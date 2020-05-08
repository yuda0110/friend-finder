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
    const bestMatch = findBestMatch(newFriend, friendsData);
    console.log(bestMatch);

    res.json(bestMatch);
  });
}

function findBestMatch(newFriend, savedFriends) {
  const ansArr = newFriend.scores;
  console.log(ansArr);

  const diffArr = [];
  for (const data of savedFriends) {
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

  return savedFriends[minDiffIndexArr[Math.floor(Math.random() * minDiffIndexArr.length)]];
}

module.exports = apiRoutes;