const { tips, comments, users } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const tip_id = req.params.tip_id;
  const comment_data = await comments.findAll({ where: { tip_id } });

  const comment = await Promise.all(
    comment_data.map(async (el) => {
      const user_id = el.dataValues.user_id;
      const user_data = await users.findOne({ where: { id: user_id } });

      return {
        comment_id: el.dataValues.id,
        comment_user_name: user_data.dataValues.user_name,
        comment_content: el.dataValues.content,
        updated_at: el.dataValues.createdAt,
      };
    })
  );

  return res.status(200).json({
    data: comment,
    message: "The comment list is successfully returned",
  });
};
