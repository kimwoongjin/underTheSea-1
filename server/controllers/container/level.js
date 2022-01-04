const { containers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const container = await containers.findOne({ where: { container_id } });
    if (!container) {
      return res.status(404).json({ message: "The container doesn't exist" });
    } else {
      const { level_id } = container.dataValues;
      await containers({ level_id: level_id++ }, { where: { container_id } });
      return res.status(200).json({
        message: `The container is successfully leveled up to level ${level_id++}`,
      });
    }
  }
};
