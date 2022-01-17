const { tips, comments } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(400).json({ message: "Invalid token" });
  } else {
    const tip_id = req.params.tip_id;
    let comment_list = await comments.findAll({ where: { tip_id } });
    comment_list = comment_list.map((el) => el.dataValues);
    return res.status(201).json({
      message: "The comment list is successfully returned",
      data: comment_list,
    });
  }
};
