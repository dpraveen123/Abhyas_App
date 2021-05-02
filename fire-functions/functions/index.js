const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
const db=admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  db.collection('Principals').doc('+918688696792').get().then((res)=>{console.log(res.data())})
  db.collection('hel').add({a:"hello world"})
  var data={"className": "2nd class", "sections": ["A", "B", "C"], "uid": "f3f2e4f5-99f7-4c33-b4fd-ad0d54f6858b"} 
  for(var i=0;i<data.sections.length;i++){
  db.collection('Schools').doc(`${data.uuid}`).collection('classes').doc(`${data.className}`).collection('sections')
  .doc(data.sections[i]).set({
    className:data.className,
    sectionName:data.sections[i],
    classTeacher:'nagaraju'
  }).then((res)=>{
    console.log(res,"saved to firestore sucsessfully")
  })
  }
  console.log("hello worldddddddddd")
  response.send("Hello from nagaraju!");
});
exports.listProducts = functions.https.onCall((data,context) => {
  console.log(context.uid,"this isthe data and context")
  var x=data;
  return x;
});
exports.addingClass=functions.https.onCall((data,context)=>{
    for(var i=0;i<data.sections.length;i++){
    db.collection('Schools').doc(`${data.uid}`).collection('classes').doc(`${data.className}`).collection('sections')
    .doc(data.sections[i]).set({
      className:data.className,
      sectionName:data.sections[i],
      classTeacher:'nagaraju'
    }).then((res)=>{
      console.log(res,"saved to firestore sucsessfully")
    })
    }
  return data;
})

