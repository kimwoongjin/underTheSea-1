const { fishes } = require("../../models");

module.exports = async (req, res) => {
  const fish_name = req.params.fish_name;
  console.log(fish_name);
  const fish = await fishes.findOne({ where: { fish_name } });
  if (!fish) {
    return res.status(404), json({ message: "Can't find the fish" });
  } else {
    const { id, fish_name, habitat, temp, desc, fish_img } = fish.dataValues;
    const final = { fish_id: id, fish_name, habitat, temp, desc, fish_img };
    return res.status(200).json(final);
  }
};
