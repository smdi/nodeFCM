
var admin = require("firebase-admin");

var serviceAccount = require("/fcmnode/test-75636-firebase-adminsdk-91tfk-11bbbae176.json");

// var registrationToken = "eHwE7iVGJ8o:APA91bFOPcQttB-bZdonGgQVo0xbJqpPKKFNRTdlcugjrFw0N6tE5UDodgg7Vw_QkG5LAIOtMbr7oKPbQRbSJIMVOC3uIVAnaf4JKTN1nkQ3ma0IUqfWzFd8mxuizjykuq0o_T-Wy374";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-75636.firebaseio.com"
});



 var options = {
  priority: "high",
  timeToLive: 2419200
};


var notificationKey = 'APA91bFWR1u7xFRnJoypuAIJCMguzCTQWSFcGyWD6wJEihl4zCQEM1h_WH9gY1Jtv0jk9RtBjPMmtA9OuLiFBiH91b1HxPI-y1UQKaTKZBH11X0xlTItdLuDkg1LRfkbXHz5VeZ-_mgs'

// var payload = {
//   notification: {
//     title: "This is a Notification",
//     body: "This is the body of the notification message."
//   } ,
// data: {
//    MyKey1: "Hello"
//  	}
// };

// admin.messaging().sendToDevice(registrationToken, payload, options)
//   .then(function(response) {
//     console.log("Successfully sent message:", response);
//   })
//   .catch(function(error) {
//     console.log("Error sending message:", error);
//   });


var topic = "finance";

// admin.messaging().subscribeToTopic(registrationToken, topic)
//   .then(function(response) {
//     console.log("Successfully subscribed to topic:", response);
//   })
//   .catch(function(error) {
//     console.log("Error subscribing to topic:", error);
//   });


var payload = {
  notification: {
    title: "NASDAQ News",
    body: "The NASDAQ climbs for the second day. Closes up 0.60%."
  }
};


// admin.messaging().sendToTopic(topic, payload , options)
//   .then(function(response) {
//     console.log("Successfully sent message:", response);
//   })
//   .catch(function(error) {
//     console.log("Error sending message:", error);
//   });

admin.messaging().sendToDeviceGroup(notificationKey, payload)
  .then(function(response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });