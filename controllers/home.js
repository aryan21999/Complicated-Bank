const path = require("path");

const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/kyc.html`));
};

module.exports = {
  getHome: home
};