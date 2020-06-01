// var fs = require('fs');

// function readFilePromise(path) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
//             if (err) {
//                 reject(err)
//             }
//             else resolve(data);
//         })
//     })
// }

// readFilePromise('song1.txt')
//     .then(function (song1) {
//         console.log(song1);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// var request = require('request');
// request('https://jsonplaceholder.typicode.com/todos/1', function(err, respone, body) {
//     console.log('err: ', err);
//     console.log('statusCode: ', respone && respone.statusCode);
//     console.log('body: ', body);
// })

var fs = require('fs');
var request = require('request');
request('https://jsonplaceholder.typicode.com/todos/1', function (err, respone, bosdi) {
    console.log('err: ', err);
    console.log('statusCode: ', respone && respone.statusCode);
    fs.writeFileSync('song1.txt', bosdi);
})

function load(path) {
    return new Promise(function (reslove, reject) {
        fs.readFile(path, { encoding: "utf-8" }, function (err, dat) {
            if (err) reject(err);
            else reslove(dat);
        })
    })
}
load('song1.txt')
    .then(function (body) {
        console.log('Done:', body);
    })
    .catch(function (errosr) {
        console.log(errosr);
    })




