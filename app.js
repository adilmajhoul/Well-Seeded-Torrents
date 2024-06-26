const express = require("express");

const scrap1337x = require("./torrent/1337x");
const scrapPirateBay = require("./torrent/pirateBay");
const rarbg = require("./torrent/rarbg");

const combo = require("./torrent/COMBO");
const { isValidSite } = require("./utils");

const app = express();

app.use("/api/:website/:query/:page?", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  let website = req.params.website.toLowerCase();
  let query = req.params.query;
  let page = req.params.page;

  if (website === "1337x") {
    if (page > 50) {
      return res.json({
        error: "Please enter page  value less than 51 to get the result :)",
      });
    } else {
      scrap1337x.torrent1337x(query, page).then((data) => {
        if (data === null) {
          return res.json({
            error: "Website is blocked change IP",
          });
        } else if (data.length === 0) {
          return res.json({
            error: "No search result available for query (" + query + ")",
          });
        } else {
          return res.send(data);
        }
      });
    }
  }

  if (website === "piratebay") {
    scrapPirateBay.pirateBay(query, page).then((data) => {
      if (data === null) {
        return res.json({
          error: "Website is blocked change IP",
        });
      } else if (data.length === 0) {
        return res.json({
          error: "No search result available for query (" + query + ")",
        });
      } else {
        return res.send(data);
      }
    });
  }

  if (website === "rarbg") {
    rarbg(query, page).then((data) => {
      if (data === null) {
        return res.json({
          error: "Website is blocked change IP",
        });
      } else if (data.length === 0) {
        return res.json({
          error: "No search result available for query (" + query + ")",
        });
      } else {
        return res.send(data);
      }
    });
  }

  if (website === "all") {
    combo(query, page).then((data) => {
      if (data !== null && data.length > 0) {
        return res.send(data);
      } else {
        return res.json({
          error: "No search result available for query (" + query + ")",
        });
      }
    });
  } else if (!isValidSite(website)) {
    return res.json({
      error:
        "please select 1337x | nyaasi | yts | Piratebay | torlock | eztv | TorrentGalaxy(tgx) | rarbg | zooqle | kickass | bitsearch | glodls | magnetdl | limetorrent | torrentfunk | torrentproject | all (to scrap from every site)",
    });
  }
});

app.use("/", (req, res) => {
  res.send(
    `
    <div>
    <h1>Welcome to 1337x, PirateBay, Rarbg, High Quality Torrents API</h1>
    <span>Get 'game of thrones' torrents from all sites</span>
    <a href="/api/all/game of thrones s01e01">/api/all/game of thrones</a>
    </div>
    `
  );
});

const PORT = process.env.PORT || 3001;
console.log("Listening on PORT : ", PORT);
app.listen(PORT);
