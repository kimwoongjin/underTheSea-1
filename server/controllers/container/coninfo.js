const {
  container_fishes,
  containers,
  feeds,
  ex_waters,
  fishes,
} = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const container = await containers.findOne({ where: { id: container_id } });
    if (!container) {
      return res.status(404).json({ message: "The container is not found" });
    } else {
      const { id, user_id, container_name, size, salinity, theme, fish_num } =
        container.dataValues;
      const fish_info_list = await container_fishes.findAll({
        where: { container_id },
      });
      const fish_list = await Promise.all(
        fish_info_list.map(async (el) => {
          const fish = await fishes.findOne({
            where: { id: el.dataValues.fish_id },
          });
          console.log(fish.dataValues.fish_name);
          return fish.dataValues.fish_name;
        })
      );

      const feed_data = await feeds.findAll({ where: { container_id } });
      const feed = feed_data.map((el) => el.dataValues.createdAt);

      const ex_water_data = await ex_waters.findAll({
        where: { container_id },
      });
      const ex_water = ex_water_data.map((el) => el.dataValues.createdAt);

      let final = {
        container_id: id,
        user_id,
        container_name,
        size,
        salinity,
        theme,
        fish_num,
        feed,
        ex_water,
        fish_name: fish_list,
      };
      return res
        .status(200)
        .json({ data: final, message: "Data is successfully returned" });
    }
  }
};
