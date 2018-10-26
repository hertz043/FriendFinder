
var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    })

    app.post("/api/friends", function(req, res){
        var user = req.body;

        for (i=0;i<user.scores.length;i++) {
            user.scores[i] = parseInt(user.scores[i]);
          }

        var bestMatch = "";
        var minimumDiff = 40;

        for (i=0;i<friends.length;i++) {
            var totalDiff = 0;

            for (j=0;j<friends[i].scores.length;j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDiff += difference;
            }

            if (totalDiff < minimumDiff) {
                bestMatch = friends[i];
                minimumDiff = totalDiff;
            }
        }

        friends.push(user);
        res.json(bestMatch);
    });
}