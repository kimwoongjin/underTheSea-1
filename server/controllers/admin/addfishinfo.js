const { fishes } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  //console.log(userInfo);
  //console.log(req.body);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  }
  console.log(req.body.data);
  const {
    fish_name,
    habitat,
    temp,
    desc,
    fish_img,
    fresh_water,
    reefsafe,
    size,
    sci_name,
    ph,
  } = req.body.data;

  const check_new_fish = await fishes.findOne({ where: { fish_name } });
  if (check_new_fish) {
    return res.status(400).json({ message: "The fish is already in DB" });
  } else {
    const new_fish = await fishes.create({
      fish_name,
      habitat,
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
