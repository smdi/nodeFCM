
var express = require('express')
var admin   = require('firebase-admin');


var app     =  express()


app.use(express.static(__dirname+"/../fcmnode"));

var serviceAccount = require("/fcmnode/test-75636-firebase-adminsdk-91tfk-11bbbae176.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-75636.firebaseio.com"
});



app.get("/notify",function(req, res){

var options = {
  priority: "high",
  timeToLive: 2419200
};


var topic = "alansaar";


var payload = {
  notification: {
    title: req.query.head,
    body: req.query.contain
  }
};



admin.messaging().sendToTopic(topic, payload , options)
  .then(function(response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
 });


});

app.get("/register" , function(req,res){

var topic = "alansaar"

var registrationToken = req.query.token; 

admin.messaging().subscribeToTopic(registrationToken, topic)
  .then(function(response) {
    console.log("Successfully subscribed to topic:", response);
      res.send(response)

  })
  .catch(function(error) {
    console.log("Error subscribing to topic:", error);
    res.send(error)
  });


});


app.listen(8999)
console.log('server listening')
