const { tips } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  console.log(req.headers);
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(400).json({ message: "Invalid token" });
  } else {
    const user_id = userinfo.id;
    const { title, content, img } = req.body.data;

    const tip = await tips.create({ user_id, title, content, img });
    console.log(tip.dataValues);

    return res.status(201).json({
      data: tip.dataValues,
      message: "The article is successfully posted",
    });
  }
};
