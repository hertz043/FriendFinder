var path = require("path");

module.exports = function(app){

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

//defaults to home if anything but the survey
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

}