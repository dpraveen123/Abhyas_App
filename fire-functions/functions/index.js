const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  console.log("hello worldddddddddd")
  response.send("Hello from nagaraju!");
});
exports.listProducts = functions.https.onCall((data,context) => {
  console.log(context.uid,"this isthe data and context")
  var x=data;
  return x+"bhimavarammmmmmmmmmmm";
});


