# E-commerce Sales Chatbot

## Overview

The **E-commerce Sales Chatbot** is an interactive assistant designed for e-commerce platforms. This chatbot facilitates seamless product search and exploration, enhancing the shopping experience for users. Users can search for products based on categories like electronics, books, or clothing, and receive recommendations directly within the chat interface.

## Objective

The goal of this project was to develop a chatbot that interacts with users to help them find and explore products on an e-commerce platform. The chatbot provides real-time search results from a mock inventory, making it easier for customers to browse and discover products without navigating the entire site.

## Features

- **Interactive Chat Interface**: A simple and intuitive chatbot interface that allows users to search for products via text input.
- **Product Search**: Users can enter product queries, and the chatbot will display relevant results, including product names and prices.
- **Responsive Design**: The chatbot is designed to work seamlessly on desktop, tablet, and mobile devices.
- **Session Management**: User sessions are maintained, with chat history saved for later interactions.
- **Reset Functionality**: Users can reset the chat at any time to start a new session.
- **Backend Integration**: A mock e-commerce server is used to simulate product search and provide results via a RESTful API.

## Architecture

- **Frontend**: React.js for building a dynamic and user-friendly UI.
- **Backend**: Flask (Python) for building the RESTful API to process user queries and retrieve product data.
- **Database**: A mock inventory system with product data stored as an array of objects (simulated for demonstration purposes).
- **API Communication**: RESTful API for seamless communication between the frontend and backend.

## Installation

### Frontend

1. Navigate to the `react-frontend` directory.

2. Install the required dependencies by running:
   - `npm install`

3. Start the frontend application by running:
   - `npm start`
   
   The frontend will be available at [http://localhost:3000](http://localhost:3000).

### Backend

1. Navigate to the `flask-backend` directory.

2. Install the required Python dependencies by running:
   - `pip install -r requirements.txt`

3. Start the backend server by running:
   - `python app.py`
   
   The backend will be available at [http://127.0.0.1:5000](http://127.0.0.1:5000).

### Accessing the Chatbot

- Open a web browser and go to [http://localhost:3000](http://localhost:3000) to interact with the chatbot.


![image](https://github.com/user-attachments/assets/5631839d-72a4-46d5-be2b-ea1e88702272)
![image](https://github.com/user-attachments/assets/fff6c056-f4ff-480b-9b9d-4dc5775b795a)
![image](https://github.com/user-attachments/assets/635a5c60-20ad-4aa1-80d3-4b9349b9a16d)
![image](https://github.com/user-attachments/assets/b47ddf45-3004-497b-9fb6-57de6c2c40b3)


