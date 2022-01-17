const { containers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const container = await containers.findOne({ where: { id: container_id } });
    if (!container) {
      return res.status(404).json({ message: "The container doesn't exist" });
    } else {
      let now = new Date();
      let dayOfWeek = now.getDay(); //0-6
      let numDay = now.getDate();
      let start = new Date(now); //copy

      start.setHours(0, 0, 0, 0);
      start.setDate(numDay - dayOfWeek);
      console.log(
        container.dataValues.last_lv_up >= start,
        container.dataValues.last_lv_up,
        start
      );
      if (container.dataValues.last_lv_up <= start) {
        const level = Number(String(container.dataValues.level)[0]);
        if (level === 6) {
          return res.status(200).json({ message: "You've reached max level" });
        } else {
          await container.increment("level", { by: 10 });
          container.last_lv_up = now;
          await container.save();
          return res.status(200).json({
            message: `The container is successfully leveled up`,
          });
        }
      } else {
        return res.status(200).json({
          message: "You've already leveled up this week",
        });
      }
    }
  }
};
