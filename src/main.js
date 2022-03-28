const app = require('./app')

const { APP_PORT } = require('./config/config.default')


app.listen(APP_PORT, () => {
    console.log(`serve is running on http://localhost:${APP_PORT}`)
})