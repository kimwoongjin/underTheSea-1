const { containers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  }
  console.log(req.body.data);
  const user_id = userInfo.id;
  const { container_name, size, salinity, theme, fish_id } = req.body.data;
  const check_container = await containers.findOne({
    where: { container_name },
  });
  if (check_container) {
    return res.status(400).json("The container name is already exist");
  }
  const new_container = await containers.create({
    user_id,
    container_name,
    size,
    salinity,
    theme,
    fish_id,
    level: 1,
  });
  return res.status(201).json({
    data: new_container.dataValues,
    message: "Container is successfully added",
  });
};
