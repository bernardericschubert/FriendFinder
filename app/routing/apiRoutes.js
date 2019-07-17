// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {

        var difference = 40;
        var matchName = "";
        var matchPhoto = "";

        // For-each loop to go through the data in friends.js
        friends.forEach(function(friend) {

            var comparisonArray = [];
            var totalDifference = 40;

            function add(total, num) {
                return total + num;
            }

            for (var i = 0; i < friend.scores.length; i++) {
                comparisonArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));

            }

            totalDifference = comparisonArray.reduce(add, 0);

            if (totalDifference < difference) {
                
                difference = totalDifference;
                matchName = friend.name;
                matchPhoto = friend.photo;

            }
        });

        res.json({
            name: matchName,
            photo: matchPhoto
        });

        friends.push(req.body);
    });


};
