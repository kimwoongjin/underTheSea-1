const { tips, users, comments } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(400).json({ message: "Invalid token" });
  } else {
    const user_id = userinfo.id;
    const tip_id = req.params.tip_id;
    const { content } = req.body.data;

    const result = await comments.create({ user_id, tip_id, content });
    // const comment_data = await comments.findAll({ where: { tip_id } });

    // const comment = await Promise.all(
    //   comment_data.map(async (el) => {
    //     const user_id = el.dataValues.user_id;
    //     const user_data = await users.findOne({ where: { id: user_id } });

    //     return {
    //       comment_user_name: user_data.dataValues.user_name,
    //       comment_content: el.dataValues.content,
    //       updated_at: el.dataValues.createdAt,
    //     };
    //   })
    // );

    return res
      .status(201)
      .json({
        data: result.dataValues,
        message: "The Comment is successfully posted",
      });
  }
};
