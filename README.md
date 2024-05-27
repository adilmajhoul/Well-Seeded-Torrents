Scraping highly seeded torrents from 1337x & Piratebay & Rarbg.

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
