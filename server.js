const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req,res){
  res.sendFile(__dirname + '/contact.html');
});

app.get('/about', function(req,res){
  res.send('this is the ABOUT page..');
});

app.get('/profile/:name', function(req,res){
  res.render('profile', { person: req.params.name});
});


app.listen(3000, () => {
  console.log('The app is listening on port 3000');
});
