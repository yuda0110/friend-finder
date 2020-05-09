const friendsData = require("../data/friends.js");


function apiRoutes(app) {
  app.get('/api/friends', (req, res) => {
    return res.json(friendsData);
  });

  app.post('/api/friends' , (req, res) => {
    const newFriend = req.body;
    const bestMatch = findBestMatch(newFriend, friendsData);

    res.json(bestMatch);
  });
}

function findBestMatch(newFriend, savedFriends) {
  const ansArr = newFriend.scores;
  const diffArr = [];
  for (const data of savedFriends) {
    const otherAnsArr = data.scores;
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
  return savedFriends[minDiffIndexArr[Math.floor(Math.random() * minDiffIndexArr.length)]];
}

module.exports = apiRoutes;