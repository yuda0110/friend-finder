const fs = require("fs");
const path = require("path");
const friendsData = require("../data/friends.js");


function apiRoutes(app) {
  console.log('apiRoutes!!');

  app.get('/api/friends', (req, res) => {
    console.log(' app.get(\'/api/friends\'');
    console.log(friendsData());
    return res.json(friendsData());
  });

  app.post('/api/friends' , (req, res) => {
    console.log('post api friends!');

    const newFriend = req.body;
    friendsData.push(newFriend);
    console.log(friendsData());

    fs.writeFile(path.join(__dirname, '../data/friends.json'), JSON.stringify(friendsData, null, 2), (err) => {

      // If an error was experienced we will log it.
      if (err) {
        console.log(err);
      }

      // If no error is experienced, we'll log the phrase "Content Added" to our node console.
      else {
        console.log("A new friend Added!");
      }

    });
  });
}

module.exports = apiRoutes;