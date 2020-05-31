var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


const app = express()



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

