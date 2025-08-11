import loginService from "../services/LoginService.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT = process.env.JWT;

export default async function LoginController(req, res) {
  console.log(req.body);
  // async aquí
  try {
    const identifier = req.body.user;
    const password = req.body.password;

    const response = await loginService.findUserByUsernameOrEmail(
      identifier,
      password
    );

    const payload = {
      id: response.id,
      username: response.username,
      typeof: response.typeof,
    };
    const options = {
      expiresIn: "24h",
    };
    const token = jwt.sign(payload, JWT, options);

    res.json({
      success: response.success,
      message: response.message,
      token: response.success ? token : null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error en el login: ${error.message}`,
    });
  }
}
