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
    const month = req.params.month;
    const container = await containers.findOne({ where: { id: container_id } });
    if (!container) {
      return res.status(404).json({ message: "The container is not found" });
    } else {
      const { id, user_id, container_name, size, salinity, theme } =
        container.dataValues;
      const fish_info_list = await container_fishes.findAll({
        where: { container_id },
      });
      console.log(fish_info_list);
      const fish_list = [];
      fish_info_list.map((el) => {
        fish_list.push({
          fish_name: el.dataValues.fish_name,
          fish_num: el.dataValues.fish_num,
        });
        // return `{fish_name: ${el.dataValues.fish_name}, fish_num:${el.dataValues.fish_num}}`;
      });
      // const fish_list = await Promise.all(
      //   fish_info_list.map(async (el) => {
      //     const fish = await fishes.findOne({
      //       where: { id: el.dataValues.fish_name },
      //     });
      //     console.log(fish.dataValues.fish_name);
      //     return fish.dataValues.fish_name;
      //   })
      // );

      let feed_data = await feeds.findAll({
        where: { container_id },
        attributes: [
          "type",
          [
            feeds.sequelize.fn(
              "date_format",
              feeds.sequelize.col("createdAt"),
              "%Y-%m-%d"
            ),
            "date",
          ],
        ],
      });
      feed_data = feed_data.filter((el) => {
        return el.dataValues.date.split("-")[1] === month;
      });

      const feed_list = feed_data.map((el) => {
        return { date: el.dataValues.date, type: el.dataValues.type };
      });

      let ex_water_data = await ex_waters.findAll({
        where: { container_id },
        attributes: [
          "amount",
          [
            feeds.sequelize.fn(
              "date_format",
              feeds.sequelize.col("createdAt"),
              "%Y-%m-%d"
            ),
            "date",
          ],
        ],
      });
      ex_water_data = ex_water_data.filter((el) => {
        return el.dataValues.date.split("-")[1] === month;
      });

      const ex_water_list = ex_water_data.map((el) => {
        return { date: el.dataValues.date, amount: el.dataValues.amount };
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
