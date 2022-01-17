const { fishes } = require("../../models");

module.exports = async (req, res) => {
  let fish_list = await fishes.findAll({});
  fish_list = fish_list.map((el) => {
    return el.dataValues.fish_name;
  });
  return res.status(200).json(fish_list);
};
