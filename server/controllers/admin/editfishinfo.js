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
  const new_notTogether = req.body.notTogether;

  //console.log(fish_name, new_habitat, new_desc, new_fish_img, new_notTogether);

  const fish = await fishes.findOne({ where: { fish_name } });
  //console.log(fish.dataValues);
  if (!fish) return res.status(404).json({ message: "The fish is not found" });
  else {
    const { id, habitat, temp, desc, fish_img } = fish.dataValues;

    const edit_habitat = new_habitat || habitat;
    const edit_temp = new_temp || temp;
    const edit_desc = new_desc || desc;
    const edit_fish_img = new_fish_img || fish_img;
    console.log(edit_fish_img, edit_desc);
    await fishes.update(
      {
        habitat: edit_habitat,
        temp: edit_temp,
        desc: edit_desc,
        fish_img: edit_fish_img,
      },
      { where: { fish_name } }
    );
    if (new_notTogether) {
      new_notTogether.forEach(async (el) => {
        await not_togethers.destroy({ where: { fish_id: id } });
        await not_togethers.create({ fish_id: id, nt_fish_id: el });
      });
      return res.status(200).json({
        data: {
          fish_id: id,
          fish_name: edit_fish_name,
          habitat: edit_habitat,
          temp: edit_temp,
          desc: edit_desc,
          fish_img: edit_fish_img,
          notTogether: new_notTogether,
        },
        message: "Fish data is successfully changed",
      });
    }
  }
};
