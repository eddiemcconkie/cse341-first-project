const express = require('express')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

app.get('/', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
