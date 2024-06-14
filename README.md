# Mouse Code Chat

A multi-platform chat application that works on web, mobile, and desktop.

## Features

- Real-time chat functionality
- Cross-platform support (Web, Mobile, Desktop)

## Tech Stack

- **Backend:** Flask, Flask-SocketIO
- **Frontend Web:** React, Socket.io-client
- **Frontend Mobile:** React Native, Socket.io-client

## Installation

### Backend

1. Navigate to the `backend` directory:

```sh
cd backend
Create and activate a virtual environment:
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install the dependencies:
pip install -r requirements.txt
Run the application:
flask run
Frontend Web
Navigate to the frontend/web directory:
cd frontend/web
Install the dependencies:
npm install
Start the development server:
npm start
Frontend Mobile
Navigate to the frontend/mobile directory:
cd frontend/mobile
Install the dependencies:
npm install
Start the React Native development server:
npm start
Run the application on Android:
npm run android
Run the application on iOS:
npm run ios
Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

License
This project is licensed under the MIT License.

### .gitignore

```plaintext
# Python
venv/
__pycache__/

# Node
node_modules/

# Environment variables
.env

# macOS
.DS_Store

# Windows
Thumbs.db
