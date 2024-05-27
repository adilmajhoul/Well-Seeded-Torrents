function isValidSite(site) {
  const sites = [
    "nyaasi",
    "1337x",
    "yts",
    "piratebay",
    "torlock",
    "eztv",
    "tgx",
    "all",
    "rarbg",
    "ettv",
    "zooqle",
    "kickass",
    "bitsearch",
    "glodls",
    "magnetdl",
    "limetorrent",
    "torrentfunk",
    "torrentproject",
  ];
  return sites.includes(site);
}

module.exports = { isValidSite };
