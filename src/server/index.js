var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var cors = require('cors')
var bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
var aylien = require('aylien_textapi')

const app = express()

// to use json
app.use(cors())

// to use url encoded values
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Setup Server
const port = 8090;

// Spin up the server
const server = app.listen(port, listening);

// Function for the Server to run
function listening(){
    console.log(`Weather Server is running on localhost: ${port}`);
}

// // designates what port the app will listen to for incoming requests
// app.listen(8090, function () {
//     console.log('Example app listening on port 8090!')
// })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

