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

  useEffect(() => {
    console.log("hiii this is checking");
    // .collection('Schools').doc(store.getState().authdetails.uuid).collection('classes').doc(itemvalue)
    //   .get()
    //   .then((querySnapshot) => {
    //     console.log("itemvalue", itemvalue);
    //     console.log('details of classes', querySnapshot.data());

    //     var x = querySnapshot.data();
    //     console.log("x is ", x.sections, Object.keys(x.sections));
    //     setmySections(Object.keys(x.sections))
    //     console.log(mySections, "sections")
    //   });
  });


  // const [isSelected, setSelection] = useState(false);

  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [onChangeName, setonChangeName] = useState('');
  const [onChangeNumber, setonChangeNumber] = useState('');
  const [selectedValue, setSelectedValue] = useState("select class");
  const [onChangeClass, setonChangeClass] = useState([]);
  const [onChangeSection, setonChangeSection] = useState([]);
  const [onChangeSubject, setonChangeSubject] = useState('');
  const [onAddClass, setonAddClass] = useState([1]);
  const [mySections, setmySections] = useState([]);
  const [mySubjects, setmySubjects] = useState([]);
  const [darray, setdarray] = useState([]);
  const [getClass, setgetClass] = useState([])

  // console.log(isSelected, onChangeName, onChangeNumber, onChangeNumber, onChangeSection, onChangeSubject)
  AddAnotherClass = () => {
    setonAddClass(onAddClass.concat(1));
    setdarray([])
    console.log("onaddddclasss length  ", onAddClass.length);

    console.log("no of sections is ", onChangeClass);
  }
  // var darray = [];
  addMySubjects = (itemValue, i) => {
    setdarray(darray.concat(itemValue));
    mySubjects[i] = darray;
    setmySubjects(mySubjects);
    console.log("mysubjects", mySubjects);
  }

  deleteSubject = (l) => {
    console.log("deleted subject is ", l);
  }

  Addclass = (itemvalue) => {
    // console.log("no of sections is from add class ", onChangeClass.length);

    firestore()
      .collection('Schools').doc(store.getState().authdetails.uuid).collection('classes').doc(itemvalue)
      .get()
      .then((querySnapshot) => {
        console.log("itemvalue", itemvalue);
        console.log('details of classes', querySnapshot.data());

        var x = querySnapshot.data();
        console.log("x is ", x.sections, Object.keys(x.sections));
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
    mySubjects.map((m, n) => {
      var subjects = {}

      m.map((l, i) => {
        subjects[l] = uuidv4()
      })

      var SectionandSubjects = {}
      SectionandSubjects[onChangeSection[n]] = subjects
      console.log("hii", subjects, "subjects");

      var details = {
        mySectionandSubjects: SectionandSubjects,
        MySubjects: subjects,
        TeacherName: onChangeName,
        TeacherPhoneno: onChangeNumber,
        Class: onChangeClass[n],
        section: onChangeSection[n],
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
    })
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

          {

            onAddClass.map((l, i) => {
              return (


                <View>
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
                        selectedValue={onChangeClass[i]}
                        // placeholder = {"select class"}
                        style={{ height: 50, width: 150, borderWidth: 1, borderColor: '#E1E8ED' }}
                        onValueChange={(itemValue, itemIndex) => {
                          // onChangeClass = itemValue
                          onChangeClass[i] = itemValue
                          setonChangeClass(onChangeClass)
                          console.log("onchangechangeclass valuechange i is", i, onChangeClass);

                          Addclass(itemValue)
                        }}

                      >
                        <Picker.Item label="Class 1" value="1st class" />
                        <Picker.Item label="Class 2 " value="2nd class" />
                        <Picker.Item label="Class 3 " value="3rd class" />
                        <Picker.Item label="Class 4 " value="4th class" />
                        <Picker.Item label="Class 5 " value="5th class" />
                        <Picker.Item label="Class 6 " value="6th class" />
                        <Picker.Item label="Class 7 " value="7th class" />
                        <Picker.Item label="Class 8 " value="8th class" />
                        <Picker.Item label="Class 9 " value="9th class" />
                        <Picker.Item label="Class 10 " value="10th class" />
                      </Picker>

                      <Picker
                        selectedValue={onChangeSection[i]}
                        style={{ height: 50, width: 150, borderWidth: 1, borderColor: '#E1E8ED' }}
                        onValueChange={(Value, itemIndex) => {
                          onChangeSection[i] = Value
                          setonChangeSection(onChangeSection)
                          // setonChangeSection(Value)
                          console.log("new sections is", onChangeSection);
                        }}
                      >
                        {

                          mySections.map(l => {
                            return (
                              <Picker.Item label={l} value={l} />

                            )
                          })
                        }
                      </Picker>
                    </View>
                    <Text style={styles.text1}>Subjects</Text>
                    <Picker
                      selectedValue={onChangeSubject}
                      style={{ height: 50, width: 328, backgroundColor: "#F5F8FA", color: "#AAB8C2" }}
                      onValueChange={(itemValue, itemIndex) => {
                        addMySubjects(itemValue, i)
                        setonChangeSubject(itemValue)
                      }}
                    >
                      <Picker.Item label="Telugu" value="Telugu" />
                      <Picker.Item label="Hindi" value="Hindi" />
                      <Picker.Item label="English" value="English" />
                      <Picker.Item label="MatheMatics" value="MatheMatics" />
                      <Picker.Item label="Physics " value="Physics" />
                      <Picker.Item label="Biology " value="Biology" />
                    </Picker>
                  </View>
                  <View >

                    {

                      mySubjects.map(l => {
                        return (
                          <TouchableOpacity onPress={() => { deleteSubject(l) }} >
                            {/* <View style={{ backgroundColor: '#1F85FF', justifyContent: 'space-around', width: 80, borderRadius: 20, marginTop: 20,flexDirection:'column' }}> */}

                            <Text style={{ color: 'black', }}>{l}   X</Text>
                          </TouchableOpacity >
                          /* </View> */
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


                  </View>
                </View>
              )
            })
          }
          <TouchableOpacity onPress={() => AddAnotherClass()}>
            <Text style={{ color: '#1F85FF', fontWeight: "bold", fontSize: 15 }}
            >
              Add Another class
            </Text>
          </TouchableOpacity>

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