const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   db.collection('Principals').doc('+918688696792').get().then((res)=>{console.log(res.data())})
//   db.collection('hel').add({a:"hello world"})
//   var data={"className": "2nd class", "sections": ["A", "B", "C"], "uid": "f3f2e4f5-99f7-4c33-b4fd-ad0d54f6858b"} 
//   for(var i=0;i<data.sections.length;i++){
//   db.collection('Schools').doc(`${data.uuid}`).collection('classes').doc(`${data.className}`).collection('sections')
//   .doc(data.sections[i]).set({
//     className:data.className,
//     sectionName:data.sections[i],
//     classTeacher:'nagaraju'
//   }).then((res)=>{
//     console.log(res,"saved to firestore sucsessfully")
//   })
//   }
//   console.log("hello worldddddddddd")
//   response.send("Hello from nagaraju!");
// });
exports.listProducts = functions.https.onCall((data, context) => {
  console.log(context.uid, "this isthe data and context")
  var x = data;
  return x;
});
// exports.addingClass = functions.https.onCall((data, context) => {
//   for (var i = 0; i < data.sections.length; i++) {
//     db.collection('Schools').doc(`${data.uid}`).collection('classes').doc(`${data.className}`).collection('sections')
//       .doc(data.sections[i]).set({
//         className: data.className,
//         sectionName: data.sections[i],
//         classTeacher: 'nagaraju'
//       }).then((res) => {
//         console.log(res, "saved to firestore sucsessfully")
//       })
//   }
//   return data;
// })


exports.addingClass = functions.https.onCall((data, context) => {
  db.collection('Schools').doc(`${data.uid}`).collection('classes').doc(`${data.className}`).set({
    sections: data.sections,
  }).then((res) => {
    console.log(res, "saved to firestore sucsessfully")
  })
  for (var i = 0; i < Object.keys(data.sections).length; i++) {
    db.collection('Sections').doc(data.sections[Object.keys(data.sections)[i]]).set({
      className: data.className,
      sectionName: Object.keys(data.sections)[i],
      classTeacher: '',
      teachers: {},
      students: {},
      subjects: {},
    })
  }
  return data;
})
// var section = {}

exports.addingUser = functions.https.onCall((data, context) => {

  section= data.section;
  db.collection('Users').doc(data.TeacherPhoneno).collection('Classes').doc(data.Class)
    .set({

      // mySubjects: data.MySubjects,
      // teachername:'Helloooo'
      SectionandSubjects:data.mySectionandSubjects
    //  section : data.section,
    //   subject: data.subject
      // SchoolID: data.uid,
      // role: data.role,
      // adress: '',
      // TeacherName: data.TeacherName,
      // TeacherPhoneno: data.TeacherPhoneno,
      // section: [],
      // subject: {}
    },{merge:true}).then((res) => {
      console.log(res, "saved to firestore sucsessfully")

      return data;
    })
  db.collection('Users').doc(data.TeacherPhoneno)
    .set({
      SchoolID: data.uid,
      role: data.role,
      address: '',
      TeacherName: data.TeacherName,
      TeacherPhoneno: data.TeacherPhoneno

    }).then((res) => {
      console.log(res, "saved to firestore sucsessfully only data")

      return data;
    })

  // return data;
})

exports.addingTeacher = functions.https.onCall((data, context) => {

  db.collection('Schools').doc(data.uid).collection('Teachers')
    .doc(data.TeacherPhoneno).set({
      TeacherName: data.TeacherName,
      TeacherPhoneno: data.TeacherPhoneno,
      Class: data.Class,
      section: data.section,
      subject: data.subject,
      classTeacher: data.classTeacher
    }).then((res) => {
      console.log(res, "saved to firestore sucsessfully")

      return data;
    })
  // }
  // return data;
})



// const db=admin.firestore();
// exports.listProducts = functions.https.onCall((data,context) => {
//   console.log(context.uid,"this isthe data and context")
//   var x=data;
//   return x;
// });
// exports.addingClass=functions.https.onCall((data,context)=>{
//     db.collection('Schools').doc(`${data.uid}`).collection('classes').doc(`${data.className}`).set({
//       sections:data.sections,
//     }).then((res)=>{
//       console.log(res,"saved to firestore sucsessfully")
//     })
//     for(var i=0;i<Object.keys(data.sections).length;i++){
//     db.collection('Sections').doc(data.sections[Object.keys(data.sections)[i]]).set({
//       className:data.className,
//       sectionName:Object.keys(data.sections)[i],
//       classTeacher:'',
//       teachers:{},
//       students:{},
//       subjects:{},
//     })
//     }
//   return data;
// })
exports.getClass=functions.https.onCall((data,context)=>{
  var a=[],i=55,j=0,b=[];
 return (
  db.collection('Schools').doc(data.uid).collection('classes').get()
  .then(
    querySnapshot => {
      // console.log('Total users: ', querySnapshot.size);
      i=querySnapshot.size;
      querySnapshot.forEach(documentSnapshot => {
        // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        //  j=documentSnapshot.id;
        
        a.push({class:documentSnapshot.id,sections:Object.keys(documentSnapshot.data().sections)})
    //  j=j+1;
      });
      return a
    })
  //  if(i==j){  
    // return a;
 )
    // console.log("a is ",a)
  //  }
})

exports.getTeacherdetails=functions.https.onCall((data,context)=>{
  var a=[],i=55,j=0,b=[];
 return (
  db.collection('Users').doc(data.User).collection('Classes').get()
  .then(
    querySnapshot => {
      // console.log('Total users: ', querySnapshot.size);
      // i=querySnapshot.size;
      querySnapshot.forEach(documentSnapshot => {
        // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        //  j=documentSnapshot.id;
        
        a.push({class:documentSnapshot.id,sections:Object.keys(documentSnapshot.data().SectionandSubjects)})
    //  j=j+1;
      });
      return a
    })
  //  if(i==j){  
    // return a;
 )
    // console.log("a is ",a)
  //  }
})