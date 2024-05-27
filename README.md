Scraping highly seeded torrents from 1337x & Piratebay & Rarbg.

the api format used is :<br>
`/api/{keyword}/{query}/{page(optional)}`

you can ether get data from a single source like this:<br>
`/api/1337x/game of thrones s05e05/`
or<br>
`/api/piratebay/breaking bad s01e01/`
or<br>
`/api/rarbg/dark s01e05/2/`

or you can get data from all of them (better choice to get the best of best quality torrents).<br>
`/api/all/dark s01e05/`

---

## install

```sh

## after cloning my rempo

# Install Depedencies
$ npm i

# Start the server
$ npm start

```
