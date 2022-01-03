const { tips, comments } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(400).json({ message: "Invalid token" });
  } else {
    const user_id = userinfo.id;
    const tip_id = req.params.tip_id;
    const { content } = req.body.data;

    await comments.create({ user_id, tip_id, content });
    return res
      .status(201)
      .json({ message: "The Comment is successfully posted" });
  }
};
