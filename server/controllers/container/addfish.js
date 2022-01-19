const { container_fishes, containers, fishes } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  console.log("req헤더-->", req.headers);
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const { fish_num, fish_name } = req.body.data;
    console.log("컨테이너아이디", container_id, fish_name, fish_num);
    // console.log("check_fish", check_fish);
    const check_container = await containers.findOne({
      where: { id: container_id },
    });
    const check_fish = await fishes.findOne({
      where: { fish_name },
    });
    // console.log("check_fish", check_fish);
    console.log("체크컨테이너", check_container);

    if (!check_container) {
      return res.status(404).json({ message: "The container doesn't exist" });
    } else if (!check_fish) {
      return res.status(404).json({ message: "The fish doesn't exist" });
    } else {
      let container_fish = await container_fishes.findOne({
        where: { fish_name, container_id },
      });
      if (!container_fish) {
        const new_container_fish = await container_fishes.create({
          container_id,
          fish_name,
          fish_num,
        });
        return res.status(201).json({
          data: { new_container_fish },
          message: "The fish is successfully added",
        });
      } else {
        await container_fish.increment("fish_num", {
          by: Number(fish_num),
        });
        container_fish = await container_fishes.findOne({
          where: { fish_name, container_id },
        });

        return res.status(201).json({
          data: { container_fish },
          message: "The fish is successfully added",
        });
      }
    }
  }
};
