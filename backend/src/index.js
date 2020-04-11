const express = require('express')
import cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors({
    // origin: 'http://app.monduvin.com.br'
}))
app.use(express.json())
app.use(routes)

app.listen(3333)