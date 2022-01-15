const { tips, users } = require("../../models");

module.exports = async (req, res) => {
  const tip_data = await tips.findAll();

  const all_tip_data = await Promise.all(
    tip_data.map(async (el) => {
      const user_id = el.dataValues.user_id;
      const user_data = await users.findOne({ where: { id: user_id } });

      return {
        tip_id: el.dataValues.id,
        user_id,
        user_name: user_data.dataValues.user_name,
        content: el.dataValues.content,
        img: el.dataValues.img,
        created_at: el.dataValues.createdAt,
        updated_at: el.dataValues.updatedAt,
      };
    })
  );

  return res.status(200).json({
    data: all_tip_data,
    message: "Messages are successfully returned",
  });
};
