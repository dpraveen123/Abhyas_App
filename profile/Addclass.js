import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ToastAndroid,
  Image,
  TouchableOpacity


} from 'react-native';

import store from '../redux'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { Linking } from 'react-native';
import { Picker } from '@react-native-community/picker';
import CheckBox from '@react-native-community/checkbox';
import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';


// import { black } from 'react-native-paper/lib/typescript/styles/colors';
var y = [];

export default function Addclass() {

  // useEffect(() => {
  //   firestore()
  //     .collection('Schools')
  //     .get()
  //     .then(response => {
  //       console.log("hii", response.data());
  //     })
  //   console.log("hello this is from componentdidmount");
  // });


  // const [isSelected, setSelection] = useState(false);

  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [onChangeName, setonChangeName] = useState('');
  const [onChangeNumber, setonChangeNumber] = useState('');
  const [selectedValue, setSelectedValue] = useState("select class");
  const [onChangeClass, setonChangeClass] = useState('');
  const [onChangeSection, setonChangeSection] = useState('');
  const [onChangeSubject, setonChangeSubject] = useState('');
  const [onAddClass, setonAddClass] = useState(1);
  const [mySections, setmySections] = useState([]);
  const [mySubjects, setmySubjects] = useState([]);

  // console.log(isSelected, onChangeName, onChangeNumber, onChangeNumber, onChangeSection, onChangeSubject)
  AddAnotherClass = () => {
    setonAddClass(onAddClass + 1);
    console.log(onAddClass);
  }
  addMySubjects = (itemValue) => {
    setmySubjects(mySubjects.concat(itemValue));
  }
  Addclass = (itemvalue) => {
    console.log("adding classes");
    firestore()
      .collection('Schools').doc(store.getState().authdetails.uuid).collection('classes').doc(itemvalue)
      .get()
      .then((querySnapshot) => {
        // querySnapshot.forEach(documentSnapshot => {
        //   console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        // });
        console.log("itemvalue", itemvalue);
        console.log('details of classes', querySnapshot.data());

        var x = querySnapshot.data();
        console.log("x is ", x.sections, Object.keys(x.sections));
        // mySections=Object.keys(x.sections)
        // y = Object.keys(x.sections)
        // console.log(y, " y details");
        setmySections(Object.keys(x.sections))
        console.log(mySections, "sections")
      });
  }
  uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  storeData = () => {
    // firestore()
    //   .collection('Schools').doc('5a027b11-470c-4fb5-9355-989036cade8c').collection('Teachers').doc(`${onChangeNumber}`)
    //   .set({
    //     TeacherName: onChangeName,
    //     TeacherPhoneno: onChangeNumber,
    //     Class: onChangeClass,
    //     section: onChangeSection,
    //     subject: onChangeSubject,
    //     classTeacher: isSelected
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //   });
    var subjects = {}
    // subjects={j:}
    mySubjects.map((l, i) => {
      subjects[l] = uuidv4()
    })

    var SectionandSubjects = {

      // onChangeSection: subjects,
      // mySection1: onChangeSection
    }
    SectionandSubjects[onChangeSection] = subjects

    // console.log("Classandsubjects",SectionandSubjects);

    // var SecSubject = [{
    //   onChangeSection: { subjects }
    // }]
    console.log("hii", subjects, "subjects");

    var details = {
      mySectionandSubjects: SectionandSubjects,
      MySubjects: subjects,
      TeacherName: onChangeName,
      TeacherPhoneno: onChangeNumber,
      Class: onChangeClass,
      section: onChangeSection,
      subject: subjects,
      classTeacher: isSelected,
      role: 'Teacher',
      uid: store.getState().authdetails.uuid
    }
    console.log("details from add teacher", details);

    functions()
      .httpsCallable('addingUser')(details)
      .then((response) => {
        console.log("sucsesfully added a new Teacher dudee to fire functions from user", response)
      });
    functions()
      .httpsCallable('addingTeacher')(details)
      .then((response) => {
        console.log("sucsesfully added a new Teacher dudee to fire functions", response)
      });

  }
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ margin: 20, marginTop: 50, }}>
        <View style={{ flex: 1, paddingLeft: 120 }}>
          <Image source={require('../Images/profile.png')} style={{
            height: 80,
            width: 80,

            backgroundColor: "#ddd",
            borderRadius: 50
          }} resizeMode="cover" />

        </View>

        <View style={{ paddingTop: 59 }}>
          <View style>
            <Text style={styles.text1}>Name</Text>
            <TextInput placeholder="Enter your full name"
              onChangeText={
                (value) => {
                  setonChangeName(value)
                  console.log(onChangeName);
                }
              } style={styles.textinput}></TextInput>
          </View>
          <Text style={styles.text1}>Mobile Number</Text>
          <TextInput placeholder="Enter your mobile number" style={styles.textinput}
            onChangeText={
              (value) => {
                setonChangeNumber(value)
                console.log(onChangeNumber);
              }
            }

          ></TextInput>
          <View
            style={{
              paddingTop: 5,
              borderBottomColor: '#E1E8ED',
              borderBottomWidth: 1,
              flex: 2
            }}
          />
          <Text style={styles.adtext}>Add Classes</Text>
          <View >
            <View style={{ flexDirection: "row" }} >

              <Picker
                selectedValue={onChangeClass}
                // placeholder = {"select class"}
                style={{ height: 50, width: 150, borderWidth: 1, borderColor: '#E1E8ED' }}
                onValueChange={(itemValue, itemIndex) => {
                  // onChangeClass = itemValue
                  setonChangeClass(itemValue)
                  // console.log("onchangechangeclass",);
                  Addclass(itemValue)


                }}

              >
                <Picker.Item label="Class 1" value="1st class" />
                <Picker.Item label="Class 2 " value="2nd class" />
                <Picker.Item label="Class 3 " value="3rd class" />
              </Picker>

              <Picker
                selectedValue={onChangeSection}
                style={{ height: 50, width: 150, borderWidth: 1, borderColor: '#E1E8ED' }}
                onValueChange={(Value, itemIndex) => setonChangeSection(Value)}
              >
                {

                  mySections.map(l => {
                    return (
                      <Picker.Item label={l} value={l} />

                    )
                  })
                }
                {/* <Picker.Item label="A" value="A" />
                <Picker.Item label="B" value="B" />
                <Picker.Item label="C" value="C" /> */}
              </Picker>
            </View>
            <Text style={styles.text1}>Subjects</Text>
            <Picker
              selectedValue={onChangeSubject}
              style={{ height: 50, width: 328, backgroundColor: "#F5F8FA", color: "#AAB8C2" }}
              onValueChange={(itemValue, itemIndex) => {
                addMySubjects(itemValue)
                setonChangeSubject(itemValue)
              }}
            >
              <Picker.Item label="Maths" value="Maths" />
              <Picker.Item label="Physics " value="Physics" />
              <Picker.Item label="Biology " value="Biology" />
            </Picker>
          </View>
          <View>
            {mySubjects.map(l => {
              return (
                <Text>{l}</Text>
              )
            })
            }
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Assign as Class teacher</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => AddAnotherClass()}>
              <Text style={{ color: '#1F85FF', fontWeight: "bold", fontSize: 15 }}
              >
                Add Another class
            </Text>
            </TouchableOpacity>

          </View>
        </View>



        <View style={styles.button} >

          <TouchableOpacity style={{ borderRadius: 4, backgroundColor: '#1F85FF', width: 328, height: 40, fontWeight: "500", padding: 12, marginTop: -20, marginLeft: 0, alignContent: 'center' }}
            onPress={() => storeData()}
          >

            <Text style={{ fontSize: 16, color: "#FFFFFF", width: 137.75, height: 24, alignItems: "center", left: 100 }}> Add Teacher</Text>
          </TouchableOpacity>

          {/* <Button title="Add Teacher" onPress={() => storeData()}></Button> */}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 14,
    marginVertical: 15,

  },
  text1: {
    fontFamily: "Roboto",
    fontSize: 14,
    marginVertical: 10,
    fontWeight: "bold",
    paddingLeft: 5



  },

  adtext: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "bold",
    marginVertical: 10,

  },
  container: {

    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E1E8ED",
    backgroundColor: "#F5F8FA",
  },
  button: {
    marginVertical: 20,
    color: '#1DA1F2',
    borderRadius: 4,
    paddingTop: 45


  },
  checkboxInput: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    margin: 8,
    // marginTop:24,
    fontSize: 16,
    color: "gray",

  },
  picker: {
    height: 45,
    width: 300,
    borderColor: "black",
    borderWidth: 1
  },
  checkboxContainer: {
    marginTop: 24,

    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  plabel: {
    color: "#AAB8C2"
  },
});