const { container_fishes, containers, fishes } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const fish_name = req.body.data.fish_name;

    const check_container = await containers.findOne({
      where: { id: container_id },
    });
    const check_fish = await fishes.findOne({
      where: { fish_name },
    });

    if (!check_container) {
      return res.status(404).json({ message: "The container doesn't exist" });
    } else if (!check_fish) {
      return res.status(404).json({ message: "The fish doesn't exist" });
    } else {
      const fish_id = check_fish.dataValues.id;
      const new_container_fish = await container_fishes.create({
        container_id,
        fish_id,
      });
      return res.status(201).json({
        data: { new_container_fish },
        message: "The fish is successfully added",
      });
    }
  }
};
