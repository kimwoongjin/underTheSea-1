const {
  container_fishes,
  containers,
  feeds,
  ex_waters,
} = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const month = Number(req.params.month);
    const container = await containers.findOne({ where: { id: container_id } });
    if (!container) {
      return res.status(404).json({ message: "The container is not found" });
    } else {
      const { id, user_id, container_name, size, salinity, theme } =
        container.dataValues;
      const fish_info_list = await container_fishes.findAll({
        where: { container_id },
      });

      const fish_list = [];
      fish_info_list.map((el) => {
        fish_list.push({
          fish_name: el.dataValues.fish_name,
          fish_num: el.dataValues.fish_num,
        });
      });

      const feed_data = await feeds.findAndCountAll({
        where: { container_id },
        attributes: ["createdAt", "type"],
        group: ["createdAt", "type"],
        order: [["createdAt", "ASC"]],
      });

      const feed_list = feed_data.count.filter((el) => {
        return el.createdAt.getMonth() + 1 === month;
      });

      let ex_water_data = await ex_waters.findAll({
        where: { container_id },
        attributes: ["createdAt", "amount"],
        order: [["createdAt", "ASC"]],
      });

      ex_water_data = ex_water_data.filter((el) => {
        return el.dataValues.createdAt.getMonth() + 1 === month;
      });

      const ex_water_list = ex_water_data.map((el) => {
        return {
          createdAt: el.dataValues.createdAt,
          amount: el.dataValues.amount,
        };
      });

      let final = {
        container_id: id,
        user_id,
        container_name,
        size,
        salinity,
        theme,
        feed_list,
        ex_water_list,
        fish_list,
      };
      return res
        .status(200)
        .json({ data: final, message: "Data is successfully returned" });
    }
  }
};
