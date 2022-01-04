const { tips } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const user_id = userinfo.id;

    const tips_data = await tips.findAll({ where: { user_id } });

    const user_tips = tips_data.map((el) => {
      return {
        tip_id: el.id,
        title: el.title,
        content: el.content,
        created_at: el.updatedAt,
      };
    });

    return res.status(200).json({
      data: user_tips,
      message: "User's tip data  is successfully returned",
    });
  }
};
