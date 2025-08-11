import bcrypt from "bcrypt";
import { Op } from "sequelize";

import User from "../models/User.js";
import loginRepository from "../repositories/LoginRepository.js";

class LoginService {
  async findUserByUsernameOrEmail(identifier, password) {
    const user = await loginRepository.findUserByUsernameOrEmail(identifier);

    if (!user) {
      return { success: false, message: "User doesn't exist" };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { success: false, message: "Incorrect credentials" };
    }

    return { success: true, message: "User and password are correct", user };
  }
}

const loginService = new LoginService();
export default loginService;
