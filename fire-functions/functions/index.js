const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
const db=admin.firestore();
exports.listProducts = functions.https.onCall((data,context) => {
  console.log(context.uid,"this isthe data and context")
  var x=data;
  return x;
});
exports.addingClass=functions.https.onCall((data,context)=>{
    db.collection('Schools').doc(`${data.uid}`).collection('classes').doc(`${data.className}`).set({
      sections:data.sections,
    }).then((res)=>{
      console.log(res,"saved to firestore sucsessfully")
    })
    for(var i=0;i<Object.keys(data.sections).length;i++){
    db.collection('Sections').doc(data.sections[Object.keys(data.sections)[i]]).set({
      className:data.className,
      sectionName:Object.keys(data.sections)[i],
      classTeacher:'',
      teachers:{},
      students:{},
      subjects:{},
    })
    }
  return data;
})

exports.getClass=functions.https.onCall((data,context)=>{
  var a=[],i=55,j=0;
  db.collection('Schools').doc(data.uid).collection('classes').get()
  .then(
    querySnapshot => {
      // console.log('Total users: ', querySnapshot.size);
      i=querySnapshot.size;
      querySnapshot.forEach(documentSnapshot => {
        // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        var l=documentSnapshot.id;
        a.push({l:documentSnapshot.data()})
     j=j+1;
      });
    })
   if(i==j){
    return a;
    console.log("a is ",a)
   }
})