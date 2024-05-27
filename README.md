Scraping highly seeded torrents from 1337x & Piratebay & Rarbg.

## try it on my deployed vercel :)

| Website   | Keyword                                   | Url                        | Example                                                                                                                 |
| --------- | ----------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1337x     | 1337x                                     | <https://1337xx.to>        | [/api/1337x/breaking%20bad](https://well-seeded-torrents.vercel.app/api/1337x/breaking%20bad)                           |
| PirateBay | piratebay                                 | <https://thehiddenbay.com> | [/api/piratebay/breaking%20bad%20s05e14](https://well-seeded-torrents.vercel.app/api/piratebay/breaking%20bad%20s05e14) |
| Rarbg     | rarbg                                     | <https://rargb.to>         | [/api/rarbg/game%20of%20thrones](https://well-seeded-torrents.vercel.app/api/rarbg/game%20of%20thrones)                 |
| all       | all (It will get torrents from all sites) |                            | [/api/all/breaking%20bad%20s05e14](https://well-seeded-torrents.vercel.app/api/all/breaking%20bad%20s05e14)             |

---

the api format used is :<br>
`/api/{keyword}/{query}/{page(optional)}`<br>

you can ether get data from a single source like this:<br>
`/api/1337x/game of thrones s05e05/`<br>

or<br>
`/api/piratebay/breaking bad s01e01/`<br>

or<br>
`/api/rarbg/dark s01e05/2/`<br>

or you can get data from all of them (better choice to get the best of best quality torrents).<br>
`/api/all/dark s01e05/`<br>

---

## install

```sh

## after cloning my rempo

# Install Depedencies
$ npm i

# Start the server
$ npm start

```
