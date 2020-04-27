const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const request = require('request');
// Use axios insteading request 
const axios = require("axios");
// Apply for apiKey via https://openweathermap.org/api
const apiKey = '06fca7b66b0842d27f5f977c71eb81e3';
const https = require("https"),
  fs = require("fs");
// Use Let's encrypt certificate and privkey
const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/hzjc.tech/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/hzjc.tech/fullchain.pem")
};
// Force Https
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS

// In order to access css under public directory
app.use(express.static('public'))
// To make use of key-value pairs stored on the req-body 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Don't redirect if the hostname is `localhost:port` or the route is `/insecure`
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
// Use EJS(Embedded JavaScript) templating language 
app.set('view engine', 'ejs')

/*app.get('/', function (req, res) {
  res.render('index',{weather: null, error: null})
})
app.get('/svc', function (req, res) {
  res.render('index',{weather: 'svc page', error: null})
})*/

// Query weather via 3rd part API
app.post('/', function (req, res) {
  console.log("/,req.body:"+JSON.stringify(req.body));
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: '请重新输入'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: '请重新输入'});
      } else {
        let weatherText = `${weather.name} 当前气温: ${weather.main.temp} 度!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.post('/read_file', function(req, res) {
   console.log("/read file,req.body:" + JSON.stringify(req.body)); 
})

//const p2d = require("./tools/p2d")
/*app.get("/pdf2doc", async (req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=My Document.docx');
    console.log(typeof p2d.foo);
    p2d.foo().then((result) => {
      res.send(Buffer.from(result, 'base64'));
    });
})*/

// Use routes to control various request
app.use('/', require('./routes/index'))
app.use('/admin', require('./routes/admin'))
app.use('/api', require('./routes/api'))

// Create HTTP Server
app.listen(80, function () {
  console.log('Weather app listening on port 80!')
})

// Create HTTPS Server
https.createServer(options, app).listen(443, function () {
  console.log('Weather app listening on port 443!')
})
