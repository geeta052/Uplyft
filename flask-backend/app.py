from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains (React frontend will be on a different port)

# Mock product database
products = [
    {"id": 1, "name": "Laptop", "category": "electronics", "price": 1000},
    {"id": 2, "name": "Smartphone", "category": "electronics", "price": 500},
    {"id": 3, "name": "T-shirt", "category": "clothing", "price": 20},
    {"id": 4, "name": "Shoes", "category": "clothing", "price": 40},
    {"id": 5, "name": "Book: Python Programming", "category": "books", "price": 15},
    {"id": 6, "name": "Book: Data Science", "category": "books", "price": 30},
    # Add more products as needed...
]

# Route to handle the root URL and avoid 404 error
@app.route("/")
def home():
    return jsonify({"message": "Welcome to the E-commerce Chatbot API!"})

# Route to fetch products based on search query
@app.route("/search", methods=["GET"])
def search_products():
    query = request.args.get("query", "").lower()
    
    # Filter products based on search query (case-insensitive match for name or category)
    matched_products = [
        product for product in products
        if query in product["name"].lower() or query in product["category"].lower()
    ]
    
    # If no products match, return a friendly message
    if not matched_products:
        return jsonify({"message": "No products found"}), 404
    
    return jsonify(matched_products)

# Route to get the details of a specific product (optional)
@app.route("/product/<int:id>", methods=["GET"])
def get_product(id):
    # Fetch product by ID
    product = next((prod for prod in products if prod["id"] == id), None)
    
    # If product exists, return the product details
    if product:
        return jsonify(product)
    
    # If product not found, return an error message
    return jsonify({"message": "Product not found"}), 404

if __name__ == "__main__":
    # Run the Flask app on the local server at port 5000
    app.run(debug=True)
