const jsonServer = require('json-server')
const auth = require('json-server-auth')
const middlewares = jsonServer.defaults()

const app = jsonServer.create()
const router = jsonServer.router('db.json')


app.db = router.db

app.use(middlewares)
app.use(auth)
app.use(router)
app.listen(5000)