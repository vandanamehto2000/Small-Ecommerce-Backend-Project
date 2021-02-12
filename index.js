const express = require('express')
const app = express()
const knex = require('./connection/create_tables')
const router = express.Router();
const port = 8000

app.use(express.json())
app.use('/', router)

require('./routers/laptop')(router)
require('./routers/phone')(router)
require('./routers/headphones')(router)
require('./routers/footwear')(router)
require('./routers/cloths')(router)

app.listen(port, () => {
    console.log('server has started on 8000')
})
