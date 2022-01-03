const { tips, comments } = require("../../models");
const { isAutorized } = require("../tokenFunction");

module.exports = (req, res) => {
  res.send("addcomment");
};
