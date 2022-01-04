const { tips, comments, users } = require("../../models");

module.exports = async (req, res) => {
  const tip_id = req.params.tip_id;

  if (!tip_id)
    return res.status(404).json({ message: "The article doesn't exist" });

  const tip_data = await tips.findOne({ where: { id: tip_id } });
  const comment_data = await comments.findAll({ where: { tip_id } });

  const comment = await Promise.all(
    comment_data.map(async (el) => {
      const user_id = el.dataValues.user_id;
      const user_data = await users.findOne({ where: { id: user_id } });

      return {
        comment_user_name: user_data.dataValues.user_name,
        comment_content: el.dataValues.content,
        updated_at: el.dataValues.createdAt,
      };
    })
  );

  tip_data.dataValues.comment = comment;

  return res.status(200).json({
    data: tip_data,
    message: "The article data is successfully returned",
  });
};
