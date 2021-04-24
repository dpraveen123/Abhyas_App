import React, { useState } from 'react';
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
  Image


} from 'react-native';
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

// import { black } from 'react-native-paper/lib/typescript/styles/colors';


export default function Addclass() {




  // const [isSelected, setSelection] = useState(false);

  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [onChangeName, setonChangeName] = useState('');
  const [onChangeNumber, setonChangeNumber] = useState('');
  const [selectedValue, setSelectedValue] = useState("select class");
  const [onChangeClass, setonChangeClass] = useState('');
  const [onChangeSection, setonChangeSection] = useState('');
  const [onChangeSubject, setonChangeSubject] = useState('');
  // console.log(isSelected, onChangeName, onChangeNumber, onChangeNumber, onChangeSection, onChangeSubject)

  storeData = () => {
    firestore()
      .collection('Schools').doc('5a027b11-470c-4fb5-9355-989036cade8c').collection('Teachers').doc(`${onChangeNumber}`)
      .set({
        TeacherName: onChangeName,
        TeacherPhoneno: onChangeNumber,
        Class: onChangeClass,
        section: onChangeSection,
        subject: onChangeSubject,
        classTeacher: isSelected
      })
      .then(() => {
        console.log('User added!');
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
                onChangeClass={onChangeClass}
                style={{ height: 50, width: 150, borderWidth: 1, borderColor: '#E1E8ED' }}
                onValueChange={(itemValue, itemIndex) => setonChangeClass(itemValue)}

              >
                <Picker.Item label="Class 1" value="class 1" />
                <Picker.Item label="Class 2 " value="class 2" />
                <Picker.Item label="Class 3 " value="class 3" />
              </Picker>

              <Picker
                onChangeSection={onChangeSection}
                style={{ height: 50, width: 150, borderWidth: 1, borderColor: '#E1E8ED' }}
                onValueChange={(Value, itemIndex) => setonChangeSection(Value)}
              >
                <Picker.Item label="A" value="A" />
                <Picker.Item label="B" value="B" />
                <Picker.Item label="C" value="C" />
              </Picker>
            </View>
            <Text style={styles.text1}>Subjects</Text>
            <Picker
              onChangeSubject={onChangeSubject}
              style={{ height: 50, width: 328, backgroundColor: "#F5F8FA", color: "#AAB8C2" }}
              onValueChange={(itemValue, itemIndex) => setonChangeSubject(itemValue)}

            >
              <Picker.Item label="Subject 1" value="Subject 1" />
              <Picker.Item label="Subject 2 " value="Subject 2" />
              <Picker.Item label="Subject 3 " value="Subject 3" />
            </Picker>
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
            <Text style={{ color: '#1F85FF', fontWeight: "bold", fontSize: 15 }}
            >
              Add Another class
</Text>

          </View>
        </View>
        <View style={styles.button} >
          <Button title="Add Teacher" onPress={() => storeData()}></Button>
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