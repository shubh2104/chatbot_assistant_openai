Chatbot Project
This project is a simple chatbot application that integrates a Python backend with a Node.js server and a web frontend. The chatbot uses the OpenAI API to generate responses based on user input.

Project Structure

my_project/
├── node_modules/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .env
├── package.json
├── runPython.js
├── server.js
└── chatbot.py

Frontend
The frontend is a basic web interface built with HTML, CSS, and JavaScript. It allows users to interact with the chatbot by sending messages and receiving responses.

public/index.html: The main HTML file.
public/style.css: The CSS file for styling the chatbot interface.
public/script.js: The JavaScript file for handling user input and updating the UI.
Backend
The backend consists of a Node.js server that handles HTTP requests from the frontend and a Python script that interacts with the OpenAI API.

server.js: The Node.js server that handles API requests and runs the Python script.
chatbot.py: The Python script that communicates with the OpenAI API to generate chatbot responses.