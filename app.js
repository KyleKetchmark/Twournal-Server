require("dotenv").config()
const Express = require("express")
const app = Express()
const dbConnection = require("./db")
const controllers = require("./controllers")
const middleware = require("./middleware")



app.use(Express.json())
app.use(require('./middleware/headers'))


app.use('/user', controllers.userController)
app.use('/twournal', middleware.validateSession, controllers.twournalController)
app.use('/tweet', middleware.validateSession, controllers.tweetController)

dbConnection.authenticate()
.then(() => dbConnection.sync())
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`[Server] listening on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(`[server] has crashed: ${err}`)
})