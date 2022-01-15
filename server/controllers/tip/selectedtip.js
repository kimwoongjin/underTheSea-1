const { tips, comments, users } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const tip_id = req.params.tip_id;
  const userinfo = isAuthorized(req);

  const user_name = userinfo.user_name;

  if (!tip_id)
    return res.status(404).json({ message: "The article doesn't exist" });

  const tip_data = await tips.findOne({ where: { id: tip_id } });

  return res.status(200).json({
    data: { ...tip_data.dataValues, user_name },
    message: "The article data is successfully returned",
  });
};
