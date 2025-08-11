import User from "../models/User.js";
import { Op } from "sequelize";

class LoginRepository {
  async findUserByUsernameOrEmail(identifier) {
    return await User.findOne({
      where: {
        [Op.or]: [{ email: identifier }, { username: identifier }],
      },
    });
  }
}

export default new LoginRepository();
