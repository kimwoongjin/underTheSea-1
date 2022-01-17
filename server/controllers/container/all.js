const { containers } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  // console.log(req.headers, "55555555555");
  const userInfo = isAuthorized(req);
  // console.log(userInfo, "55555555555");
  if (!userInfo) {
    return res.status(401).json({ message: "You are not authorized" });
  } else {
    const { id } = userInfo;
    const all_container = await containers.findAll({
      where: { user_id: id },
    });

    const container_list = all_container.map((el) => el.dataValues);
    // console.log(container_list);
    return res
      .status(200)
      .json({ data: container_list, message: "Data is successfully returned" });
  }
};
