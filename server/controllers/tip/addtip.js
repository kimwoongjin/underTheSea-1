const { tips } = require("../../models");
const { isAutorized } = require("../tokenFunction");

module.exports = (req, res) => {
  return res.send("addtip");
};
