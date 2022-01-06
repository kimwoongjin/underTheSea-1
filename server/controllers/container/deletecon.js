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
    console.log(container_id);
    const check_container = containers.findOne({ where: { id: container_id } });
    console.log(container_id);
    if (!check_container) {
      return res.status(404).json({ message: "THe container is not found" });
    } else {
      await containers.destroy({ where: { id: container_id } });
      await container_fishes.destroy({ where: { container_id } });
      await feeds.destroy({ where: { container_id } });
      await ex_waters.destroy({ where: { container_id } });
      return res
        .status(200)
        .json({ message: "THe container is successfully removed" });
    }
  }
};
