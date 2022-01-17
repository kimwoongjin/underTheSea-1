const { containers, ex_waters } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  // console.log(req, "pppppppppp");
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const user_id = userinfo.id;

    const container_data = await containers.findAll({ where: { user_id } });

    const user_container = await Promise.all(
      container_data.map(async (el) => {
        const container_id = el.dataValues.id;
        const ex_water_data = await ex_waters.findAll({
          where: { container_id },
        });
        const last_ex_water = ex_water_data.reverse()[0].dataValues.createAt;

        return {
          container_id: el.dataValues.id,
          container_name: el.dataValues.container_name,
          size: el.dataValues.size,
          level_img: el.dataValues.level_img,
          fish_num: el.dataValues.fish_num,
          last_ex_water: last_ex_water,
          theme: el.dataValues.theme,
        };
      })
    );

    return res.status(200).json({
      data: user_container,
      message: "User's container data is successfully returned",
    });
  }
};
