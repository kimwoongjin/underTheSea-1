const { isAuthorized } = require("../tokenFunction");

module.exports = (req, res) => {
  const userinfo = isAuthorized(req);

  if (!userinfo) {
    return res.status(200).json({ message: "You are not logged in" });
  } else {
    return res
      .cookie("jwt", "", { httpOnly: true })
      .status(200)
      .json({ message: "JWT token removed" });
  }
};
