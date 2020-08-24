const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const routes = require('./src/routes/tarefasRoutes.js')
routes(app)

app.route('/').get((req, res) =>{
    res.send('API Lista de Tarefas!')
})

const port = process.env.PORT || 3000

app.listen(port)

