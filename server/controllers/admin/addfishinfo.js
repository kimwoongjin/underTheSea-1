const { fishes } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  // const userInfo = isAuthorized(req);
  // if (!userInfo) {
  //   return res.status(401).json({ message: "You are not authorized" });
  // }
  const {
    fish_name,
    habitant,
    temp,
    desc,
    fish_img,
    fresh_water,
    reefsafe,
    size,
    sci_name,
  } = req.body;
  const check_new_fish = await fishes.findOne({ where: { fish_name } });
  if (check_new_fish) {
    return res.status(400).json({ message: "The fish is already in DB" });
  } else {
    const new_fish = await fishes.create({
      fish_name,
      habitant,
      temp,
      desc,
      fish_img,
      fresh_water,
      reefsafe,
      size,
      sci_name,
    });

    const { id } = new_fish.dataValues;

    return res.status(201).json({
      data: new_fish.dataValues,
      message: "Fish data is successfully added",
    });
  }
};
