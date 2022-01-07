const { users, containers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(200).json({ message: "You are not authorized" });
  } else {
    const user_id = userinfo.id;

    await containers.destroy({ where: { user_id } });
    await users.destroy({ where: { id: user_id } });

    return res.status(200).json({ message: "User data deleted" });
  }
};
