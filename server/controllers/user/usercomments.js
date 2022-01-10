const { comments, tips } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const user_id = userinfo.id;

    const commnets_data = await comments.findAll({ where: { user_id } });

    const user_comments = await Promise.all(
      commnets_data.map(async (el) => {
        const comment_tip = await tips.findOne({ where: { id: el.tip_id } });
        return {
          tip_id: comment_tip.dataValues.id,
          tip_title: comment_tip.dataValues.title,
          tip_id: el.dataValues.tip_id,
          content: el.dataValues.content,
          created_at: el.dataValues.createdAt,
        };
      })
    );

    return res.status(200).json({
      data: user_comments,
      message: "User's comments data  is successfully returned",
    });
  }
};
