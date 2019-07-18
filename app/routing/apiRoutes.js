
var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {

        var difference = 40; // This is the max difference possible - i.e. if there is a friend in the default array with all 5s and someone enters all 1s
        var matchName = "";
        var matchPhoto = "";

        // For-each loop to go through the array data in friends.js
        friendData.forEach(function(friends) {

            var comparisonArray = [];
            var totalDifference = 0;

            for (var i = 0; i < friends.scores.length; i++) {
                comparisonArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friends.scores[i])));
                console.log("comparisonArray: " + comparisonArray);
            }

            // This adds up all values in the comparison array
            var reducer = (accumulator, currentValue) => accumulator + currentValue;
            totalDifference = comparisonArray.reduce(reducer, 0);
            console.log("totalDifference: " + totalDifference);

            if (totalDifference <= difference) {       
                // As the loop occurs, compare to the default difference value and update when lower, save name and photo into our variables
                difference = totalDifference;
                matchName = friends.name;
                matchPhoto = friends.photo;
                console.log("difference: " + difference);
            }
        });

        // Respond back to the client with the name and photo of the closest match
        res.json({
            name: matchName,
            photo: matchPhoto
        });

        // Push new friend into default array
        friendData.push(req.body);
    });


};
