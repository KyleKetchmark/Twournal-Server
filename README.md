<!-- Basically this is the first server version for Twournal! -->
# Getting started with Twournal's server

Hello and welcome to Twournal's Server repository. In order to run Twournal please clone this repo and 'npm start' into your CLI.

```
git clone https://github.com/KyleKetchmark/Twournal-Server.git
npm start
```

FYI in order to run this server you'll need to utilize a 3rd party routing service (Postman) to verify routes, if the client isn't connected. The app will start and listen on a local host port. 

## Document Navigation

- app.js - main application page
- db.js - database sequelize
- models folder - encapsulates 3 files with associated tables for data storage
- middleware - 3 files to safely and securely pass data from varying files
- controllers - routing for entire applciation and endpoints

## Check out the deployed Heroku link here!
![Twournal App](https://ketch-twournal-client.herokuapp.com/)




