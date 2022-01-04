const { ex_waters, containers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const check_container = await containers.findOne({
      where: { id: container_id },
    });
    if (!check_container) {
      return res.status(404).json({ message: "The container doesn't exist" });
    } else {
      const volume = req.body.volume;
      await ex_waters.create({ container_id, volume });
      return res
        .status(201)
        .json({ message: "Your ex_water log is successfully recorded" });
    }
  }
};
