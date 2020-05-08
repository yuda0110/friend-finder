const fs = require("fs");
const path = require("path");
const friendsData = require("../data/friends.js");


function apiRoutes(app) {
  console.log('apiRoutes!!');

  app.get('/api/friends', (req, res) => {
    return res.json(friendsData);
  });

  app.post('/api/friends' , (req, res) => {
    console.log('post api friends!');

    const newFriend = req.body;
    friendsData.push(newFriend);
    console.log(friendsData);
  });
}

module.exports = apiRoutes;