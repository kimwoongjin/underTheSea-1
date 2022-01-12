const { fishes } = require("../../models");

module.exports = async (req, res) => {
  const limit = Number(req.params.limit);
  const fish_list = await fishes.findAll({ limit });
  if (!fish_list) {
    return res.status(404).json({ message: "Can't find the fish" });
  } else {
    // const { id, fish_name, habitat, temp, desc, fish_img } = fish.dataValues;
    // const final = { fish_id: id, fish_name, habitat, temp, desc, fish_img };

    const fish_data = fish_list.map((el) => el.dataValues);
    return res.status(200).json({
      message: "The fish data is successfully returned",
      data: { fish_data },
    });
  }
};
