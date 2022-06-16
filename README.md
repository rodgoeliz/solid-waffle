# Get app ready to run

- Install nvm node version manager
- run `nvm use` on the terminal
- if `nvm use` fails run nvm install with the proper node version
- run `npm install`

# Run app

- Run script `npm run start:db` to start fake db you can change the inital values at `src/data/mocks/db.js` runs on 8080 port
- Run app `npm run start` the app proxies requests to the 8080 port, if json server is ran in another port, change the proxy config in the package.json

# Notes

- App aproximadly made in about 8 hours
- Fist time using `react-query`
- Spent about 2 hours to get the json-server running as i wanted.
- Rest of the 6 hours was used in the app
- I didnt take in count styles, most of it its default mui
- If you delete a note the favorite doesnt get deleted didnt understand how to cascade using json-server (would cascade with proper api)

# ToDO

- Only A single test was added as an example on how to mock external things to the test
