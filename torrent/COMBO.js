const scrap1337x = require("./1337x");
const scrapPirateBay = require("./pirateBay");
const rarbg = require("./rarbg");

async function combo(query, page) {
  let comboTorrent = [];
  await Promise.all([
    scrapPirateBay.pirateBay(query, page),
    scrap1337x.torrent1337x(query, page),
    rarbg(query, page),
  ]).then((sites) => {
    for (const data of sites) {
      if (data !== null && data.length > 0) {
        comboTorrent.push(data);
      }
    }
  });
  return comboTorrent;
}
module.exports = combo;
