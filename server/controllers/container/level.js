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
      console.log(container.dataValues.level);
      if (container.dataValues.level === 6) {
        return res.status(200).json({ message: "You've reached max level" });
      }
      await container.increment("level", { by: 1 });
      return res.status(200).json({
        message: `The container is successfully leveled up`,
      });
    }
  }
};
