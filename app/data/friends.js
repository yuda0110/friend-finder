const fs = require("fs");
const path = require("path");

// function getData() {
//   // Here we use the fs package to read our index.html file
//   fs.readFile(path.join(__dirname, '../data/friends.json'), function(err, data) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('data1:' + JSON.parse(data));
//     }
//   });
// }

const getData = (filePath, option) => {
  return new Promise((resolve, reject) => {
    // Here we use the fs package to read our index.html file
    fs.readFile(path.join(__dirname, filePath), option, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// console.log('data: ' + getData());
// const friendsData = getData();

const promise = getData('../data/friends.json', 'utf-8');

const friendsData = () => {
  promise.then( result => {
    console.log(JSON.parse(result));
    return JSON.parse(result);
  }).catch(console.log)
}

module.exports = friendsData;