const { fishes, not_togethers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  }
  const fish_name = req.body.data.fish_name;
  const new_habitat = req.body.data.habitat;
  const new_temp = req.body.data.temp;
  const new_desc = req.body.data.desc;
  const new_fish_img = req.body.fish_img;
  const new_fresh_water = req.body.fresh_water;
  const new_reefsafe = req.body.reefsafe;
  const new_size = req.body.size;
  const new_sci_name = req.body.sci_name;

  //console.log(fish_name, new_habitat, new_desc, new_fish_img, new_notTogether);

  const fish = await fishes.findOne({ where: { fish_name } });
  //console.log(fish.dataValues);
  if (!fish) return res.status(404).json({ message: "The fish is not found" });
  else {
    const {
      id,
      habitat,
      temp,
      desc,
      fish_img,
      fresh_water,
      reefsafe,
      size,
      sci_name,
    } = fish.dataValues;

    const edit_habitat = new_habitat || habitat;
    const edit_temp = new_temp || temp;
    const edit_desc = new_desc || desc;
    const edit_fish_img = new_fish_img || fish_img;
    const edit_fresh_water = new_fresh_water || fresh_water;
    const edit_reefsafe = new_reefsafe || reefsafe;
    const edit_size = new_size || size;
    const edit_sci_name = new_sci_name || sci_name;
    console.log(edit_fish_img, edit_desc);
    await fishes.update(
      {
        habitat: edit_habitat,
        temp: edit_temp,
        desc: edit_desc,
        fish_img: edit_fish_img,
        fresh_water: edit_fresh_water,
        reefsafe: edit_reefsafe,
        size: edit_size,
        sci_name: edit_sci_name,
      },
      { where: { fish_name } }
    );
    return res.status(200).json({
      data: {
        fish_id: id,
        fish_name: edit_fish_name,
        habitat: edit_habitat,
        temp: edit_temp,
        desc: edit_desc,
        fish_img: edit_fish_img,
        fresh_water: edit_fresh_water,
        reefsafe: edit_reefsafe,
        size: edit_size,
        sci_name: edit_sci_name,
      },
      message: "Fish data is successfully changed",
    });
  }
};
