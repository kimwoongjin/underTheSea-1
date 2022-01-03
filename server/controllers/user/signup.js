const { users } = require("../../models");

module.exports = async (req, res) => {
  const { email, user_name, user_pwd } = req.body.data;

  if (!email || !user_name || !user_pwd) {
    return res
      .status(404)
      .json({ message: "signup: You are missing some argument(s)" });
  }

  const user = await users.findOne({ where: { email } });

  if (user) {
    return res.status(400).json({ message: "Email is already in use" });
  } else {
    await users.create({ email, user_name, user_pwd });
    return res.status(201).json({
      message: "User account is successfully created",
    });
  }
};
