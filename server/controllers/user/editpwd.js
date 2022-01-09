const { users } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);
  // console.log(userinfo);

  if (!userinfo) {
    return res.status(400).json({ message: "Invalid token" });
  } else {
    const { id } = userinfo;
    const { cur_pwd, new_pwd } = req.body.data;

    const user = await users.findOne({ where: { id } });
    const { user_pwd } = user.dataValues;

    if (cur_pwd !== user_pwd) {
      return res.status(200).json({ message: "Invalid password" });
    } else {
      await users.update({ user_pwd: new_pwd }, { where: { id } });
      const new_userdata = await users.findOne({ where: { id } });
      const { updatedAt } = new_userdata.dataValues;

      return res.status(200).json({
        data: { updated_at: updatedAt },
        message: "User password updated",
      });
    }
  }
};
