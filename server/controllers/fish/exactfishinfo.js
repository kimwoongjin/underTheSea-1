const { fishes } = require("../../models");
const Sequelize = require("sequelize");

module.exports = async (req, res) => {
  // console.log(req, "-------------");
  const fish_name = req.body.data.fish_name;
  // console.log(fish_name);
  let fish = await fishes.findOne({
    where: { fish_name },
  });
  console.log(fish);
  if (!fish) {
    return res.status(404).json({ message: "Can't find the fish" });
  } else {
    //const final = { fish_id: id, fish_name, habitat, temp, desc, fish_img };
    return res.status(200).json({
      data: fish.dataValues,
      message: "The fish data is successfully returned",
    });
  }
};
