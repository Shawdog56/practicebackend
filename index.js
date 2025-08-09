import express from "express";
import dotenv from "dotenv";
import connection from "./config/Connection.js";

import rootRoute from "./routes/RootRoute.js";

dotenv.config();

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database as id " + connection.threadId);
});

const PORT = process.env.PORT;
const App = express();

App.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

App.route("/").get(rootRoute);
