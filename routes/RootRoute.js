import express from "express";
import dotenv from "dotenv";

import LoginController from "../controllers/LoginController.js";

const router = express.Router();
dotenv.config();

router.route("/").get((req, res) => {
  res.send({
    pusuas: "raíz",
    acceso: "autorizado",
  });
});

router
  .route("/huesos")
  .get((req, res) => {
    res.send({
      pusuas: "huesos",
      acceso: "autorizado",
    });
  })
  .post((req, res) => {});

router.route("/login").post(LoginController);

export default router;
