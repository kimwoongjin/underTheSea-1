const { fishes, not_togethers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  // const userInfo = isAuthorized(req);
  // //console.log(userInfo);
  // //console.log(req.body);
  // if (!userInfo) {
  //   return res.status(401).json({ message: "You are not authorized" });
  // }
  console.log(req.body);
  const { fish_name, habitant, temp } = req.body;
  const check_new_fish = await fishes.findOne({ where: { fish_name } });
  if (check_new_fish) {
    return res.status(400).json({ message: "The fish is already in DB" });
  } else {
    const new_fish = await fishes.create({
      fish_name,
      habitant,
      temp,
    });

    const { id } = new_fish.dataValues;
    console.log(new_fish.dataValues);

    return res.status(201).json({
      data: new_fish,
      message: "Fish data is successfully added",
    });
    //notTogether 배열을 다 돌면서 notTogether 리스트에 추가하기
  }
};
