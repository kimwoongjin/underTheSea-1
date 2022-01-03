const { comments } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(400).json({ message: "Invalid token" });
  } else {
    const comment_id = req.params.comment_id;

    await comments.destroy({ where: { id: comment_id } });
    return res
      .status(200)
      .json({ message: "The comment is successfully removed" });
  }
};
