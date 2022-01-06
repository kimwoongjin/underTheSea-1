const { fishes } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  }
  const fish_name = req.params.fish_name;
  const destroy = await fishes.destroy({ where: { fish_name } });
  if (!destroy)
    return res.status(404).json({ message: "The fish is not found" });
  else {
    return res
      .status(201)
      .json({ message: "The fish is successfully removed" });
  }
};
