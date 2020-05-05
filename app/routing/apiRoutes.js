const fs = require("fs");
const friendsData = require("../data/friends.js");


function apiRoutes(app) {
  app.get("/api/friends", (req, res) => {
    return res.json(friendsData)
  });

  app.post("/api/friends" , (req, res) => {
    const newFriend = req.body;
    friendsData.push(newFriend);
  });
}

module.exports = apiRoutes;