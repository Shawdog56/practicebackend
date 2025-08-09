import express from "express";
import dotenv from "dotenv";
import connection from "./config/Connection.js";

import rootRoute from "./routes/RootRoute.js";

dotenv.config();

try {
  await connection.authenticate();
  console.log("✅ Conexión establecida con la base de datos.");
} catch (error) {
  console.error("❌ Error de conexión a la base de datos:", error);
}

const PORT = process.env.PORT;
const App = express();

App.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

App.route("/").get(rootRoute);
