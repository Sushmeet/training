var express = require('Express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var friends = ['tony', 'moly', 'johnyy', 'bobo'];

app.get('/', function(req, res) {
    res.render('Home');
});

app.get('/friends', function(req, res){
    res.render('Friends',{friends: friends});
});

app.post('/addfriend', function(req, res){
    var friend = req.body.newfriend;
    friends.push(friend);
    console.log(req.body); // u have to use body parser or else undefined.
    res.redirect('/friends');
});


app.listen(process.env.PORT || 2000, function() {
    console.log('server is running');
});