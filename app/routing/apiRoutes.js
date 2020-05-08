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
    // friendsData.push(newFriend);

    const ansArr = newFriend.scores;
    console.log(ansArr);

    const diffArr = [];
    for (const data of friendsData) {
      const otherAnsArr = data.scores;
      console.log(data.name);

      let diff = 0;

      otherAnsArr.forEach((ans, index) => {
        diff += Math.abs(ansArr[index] - ans);
      })

      diffArr.push(diff);
    }

    console.log(`diffArr: ${diffArr}`);
    const minDiff = Math.min.apply(null, diffArr);
    const minDiffIndexArr = [];
    diffArr.forEach((num, index) => {
      if (num === minDiff) {
        minDiffIndexArr.push(index);
      }
    })

    console.log('minDiffIndexArr: ' + minDiffIndexArr);

    console.log('index: ' + minDiffIndexArr[Math.floor(Math.random() * minDiffIndexArr.length)]);

    const matchFriendObj = friendsData[minDiffIndexArr[Math.floor(Math.random() * minDiffIndexArr.length)]];

    // res.json({ id: result.insertId });
  });
}

function findBestMatch(data) {

}

module.exports = apiRoutes;