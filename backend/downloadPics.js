const request = require('request')
const fs = require('fs')
const data = require('./data.json').response.docs


var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type'])
        console.log('content-length:', res.headers['content-length'])

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback)
    })
}


console.log(data.length)
var getPic = function(i){
    if (i>=data.length)
        return
    console.log(i)
    download(data[i].B1p_url[0], './pics/' + data[i].B1p[0], () => { 
        getPic(i+1)
    })
}
getPic(0)
