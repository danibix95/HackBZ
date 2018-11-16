const load = require('./load.json')
const mongoose = require('mongoose')
const express = require('express')


app = express()

app.get('/', (req, res) => res.send('Hello World!'))

mongoose.connection.on('open', function () {
    console.log('Connected to the database! ✓'.green)
    app.listen(3000)
    console.log('listening on http://localhost:6600'.green)
})

mongoose.connection.on('error', function () {
    console.log('DATABASE CONNECTION ERROR! ⚠'.red)
})

mongoose.connect('mongodb://admin:<PASSWORD>@cluster0-shard-00-00-42kad.mongodb.net:27017,cluster0-shard-00-01-42kad.mongodb.net:27017,cluster0-shard-00-02-42kad.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true })
mongoose.set('useCreateIndex', true)