import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connection from "./config/Connection.js";
import rootRoute from "./routes/RootRoute.js";

dotenv.config();
const clave = process.env.JWT;
console.log(clave);

try {
  await connection.authenticate();
  console.log("✅ Conexión establecida con la base de datos.");
} catch (error) {
  console.error("❌ Error de conexión a la base de datos:", error);
}

const PORT = process.env.PORT;
const App = express();

App.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

App.use(express.json());

App.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

App.use("/api", rootRoute);

App.route("/").get((req, res) => {
  res.json({
    raíz: "raíz",
    access: "allowed",
  });
});
