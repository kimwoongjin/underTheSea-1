const { containers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  console.log("서버에서 받는요청", req.headers);
  const userInfo = isAuthorized(req);
  console.log("userInfo ==>", userInfo);
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const container_id = req.params.container_id;
    const container = await containers.findOne({ where: { id: container_id } });
    if (!container) {
      return res.status(404).json({ message: "The container doesn't exist" });
    } else {
      let now = new Date();
      let dayOfWeek = now.getDay(); //0-6
      let numDay = now.getDate();
      let start = new Date(now); //copy
      const month = now.getMonth() + 1;

      start.setHours(0, 0, 0, 0);
      start.setDate(numDay - dayOfWeek);
      console.log(
        container.dataValues.last_lv_up >= start,
        container.dataValues.last_lv_up,
        start
      );
      if (container.dataValues.last_lv_up <= start) {
        const level = Number(String(container.dataValues.level)[0]);
        if (level === 6) {
          // return res.status(200).json({ message: "You've reached max level" });
          return res
            .header("Authorization", req.headers.authorization)
            .redirect(`http://localhost:80/container/${container_id}/${month}`);
        } else {
          await container.increment("level", { by: 10 });
          container.last_lv_up = now;
          await container.save();
          console.log("Hello");
          return res
            .header("Authorization", req.headers.authorization)
            .redirect(
              `http://localhost:80/container/info/${container_id}/${month}`
            );
          // return res.status(200).json({
          //   message: `The container is successfully leveled up`,
          // });
        }
      } else {
        return res
          .header("Authorization", req.headers.authorization)
          .redirect(
            `http://localhost:80/container/level/${container_id}/${month}`
          );
        // return res.status(200).json({
        //   message: "You've already leveled up this week",
        // });
      }
    }
  }
};
