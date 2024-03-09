Sure, here's a basic README for your MERN stack chat app without Redux but with Mongoose and Socket.io:

---

# BuzzTalk

This is a simple chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) without Redux, but utilizing Mongoose for MongoDB interactions and Socket.io for real-time communication.

## Features

- Real-time messaging: Instantly send and receive messages.
- User authentication: Register and login to access the chat functionality.
- Persistent storage: Messages are stored in a MongoDB database for future reference.

## Technologies Used

- MongoDB: A NoSQL database used for storing chat messages and user information.
- Express.js: A Node.js framework used for building the backend API.
- React.js: A JavaScript library used for building the frontend user interface.
- Node.js: A JavaScript runtime environment used for running the server-side code.
- Socket.io: A library that enables real-time, bidirectional, and event-based communication between web clients and servers.
- Mongoose: A MongoDB object modeling tool designed to work in an asynchronous environment.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/be3tle/buzztalk-client.git
   ```

2. Navigate to the project directory:

   ```bash
   cd buzztalk-client
   ```

3. Install server dependencies:

   ```bash
   npm install
   ```

4. Install client dependencies:

   ```bash
   npm install
   ```

5. Set up your MongoDB database:

   - Create a MongoDB Atlas account or install MongoDB locally.
   - Create a `.env` file in the root directory and add your MongoDB connection string:

     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:5731` to view the app.

## Usage

1. Register for a new account or log in with existing credentials.
2. Start chatting with other users in real-time.
3. Messages will be persisted in the database for future reference.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
