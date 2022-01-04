const { tips } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(400).json({ message: "Invalid token" });
  } else {
    const new_content = req.body.data.content;
    const id = req.params.tip_id;

    await tips.update({ content: new_content }, { where: { id } });
    const new_contentdata = await tips.findOne({ where: { id } });
    const updated_at = new_contentdata.dataValues.updatedAt;

    return res
      .status(201)
      .json({
        data: { updated_at },
        message: "The article is successfully modified",
      });
  }
};
