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
  CheckBox

} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,

} from 'react-native-svg';
import { Linking } from 'react-native';
import { Picker } from '@react-native-community/picker';
// import CheckBox from '@react-native-community/checkbox';
import firestore from '@react-native-firebase/firestore';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import Hello from '../profile/Hello';


function Profile() {

  // firestore()
  //           .collection('Schools').doc('5a027b11-470c-4fb5-9355-989036cade8c').collection('Teachers').doc(`${this.state.phonenumber}`)
  //           .set({
  //               TeacherName: 'nagaraju',
  //               TeacherPhoneno: data[0].phnno,
  //               Class: '1st class',
  //               section: 'A',
  //               subject: 'maths',
  //               classTeacher: 'false'
  //           })
  //           .then(() => {
  //               console.log('User added!');
  //           });
  const [selectedValue, setSelectedValue] = useState("select class");
  const [isSelected, setSelection] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [onChangeName, setonChangeName] = useState('');
  const [onChangeNumber, setonChangeNumber] = useState('');
  const [onChangeClass, setonChangeClass] = useState('');
  const [onChangeSection, setonChangeSection] = useState('');
  // const [onChangeNumber, setonChangeNumber] = useState('');






  hello = () => {
    console.log("hii");
  }
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ margin: 20, marginTop: 50, }}>
        <View style={{ paddingStart: 160 }}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0)">
              <Path d="M11.8289 11.5609C13.4172 11.5609 14.7925 10.9912 15.9162 9.86733C17.0399 8.74362 17.6095 7.36868 17.6095 5.78025C17.6095 4.19237 17.0399 2.81725 15.916 1.69317C14.7921 0.569639 13.417 0 11.8289 0C10.2405 0 8.86556 0.569639 7.74185 1.69335C6.61813 2.81707 6.04831 4.19218 6.04831 5.78025C6.04831 7.36868 6.61813 8.7438 7.74203 9.86751C8.86593 10.991 10.241 11.5609 11.8289 11.5609Z" fill="black" />
              <Path d="M21.9435 18.4547C21.9111 17.9871 21.8455 17.477 21.749 16.9383C21.6516 16.3955 21.5262 15.8825 21.376 15.4136C21.2209 14.9289 21.01 14.4502 20.7493 13.9916C20.4786 13.5155 20.1608 13.1009 19.8041 12.7598C19.4311 12.403 18.9744 12.116 18.4463 11.9067C17.9201 11.6985 17.3369 11.5931 16.7131 11.5931C16.4681 11.5931 16.2311 11.6936 15.7736 11.9915C15.492 12.1752 15.1625 12.3876 14.7949 12.6225C14.4805 12.8228 14.0546 13.0105 13.5285 13.1804C13.0153 13.3465 12.4942 13.4307 11.9798 13.4307C11.4655 13.4307 10.9445 13.3465 10.4308 13.1804C9.90524 13.0107 9.47934 12.823 9.16532 12.6227C8.80112 12.39 8.47153 12.1775 8.18571 11.9913C7.72868 11.6934 7.49156 11.5929 7.24656 11.5929C6.62254 11.5929 6.03954 11.6985 5.51347 11.9069C4.98577 12.1158 4.52892 12.4028 4.15557 12.76C3.79907 13.1013 3.48101 13.5157 3.21075 13.9916C2.95019 14.4502 2.73925 14.9287 2.58398 15.4137C2.43402 15.8827 2.30859 16.3955 2.21118 16.9383C2.11468 17.4762 2.04913 17.9865 2.01672 18.4553C1.98486 18.9145 1.96875 19.3911 1.96875 19.8725C1.96875 21.1253 2.367 22.1395 3.15234 22.8875C3.92797 23.6256 4.95427 24.0001 6.20231 24.0001H17.7584C19.0065 24.0001 20.0324 23.6258 20.8082 22.8875C21.5937 22.1401 21.992 21.1257 21.992 19.8723C21.9918 19.3888 21.9755 18.9118 21.9435 18.4547Z" fill="black" />
            </G>
            <Defs>
              <ClipPath id="clip0">
                <Rect width="23.9999" height="24" fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
        <Text style={styles.text} >Name</Text>
        <TextInput placeholder="Enter your full name" style={styles.textinput} onChangeText={

          value => {
            // console.log("hii");
            setonChangeName(value)
            console.log(value);
          }
        }></TextInput>

        <TextInput onChangeText={console.log("hiii")} placeholder="dsgfdgfdg"></TextInput>

        <Text style={styles.text} >Mobile Number</Text>
        <TextInput placeholder="Enter your mobile number" style={styles.textinput} ></TextInput>
        <View
          style={{
            paddingTop: 5,
            borderBottomColor: '#E1E8ED',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.adtext}>Add Classes</Text>
        <View >
          <View style={{ flexDirection: "row" }} >

            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <Text>Subjects</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 328, backgroundColor: "#F5F8FA", color: "#AAB8C2" }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            // disabled={false}
            value={toggleCheckBox}
            onValueChange={Hello()

              //   (
              //   newValue) => {
              //   console.log("jhguggjh");
              //   // setToggleCheckBox(newValue)
              //   // console.log("hii" + toggleCheckBox, newValue);
              // }

            }


            // value={isSelected}
            // onChange={() => {
            //   setSelection(true)
            //   console.log("hii" + isSelected);}
            // }
            style={styles.checkbox}
          />
          <Text style={styles.label}>Assign as Class teacher</Text>
        </View>
        <View>
          <Text style={{ color: '#1F85FF' }}
            onPress={() => Linking.openURL('http://google.com')}>
            Add Another class
</Text>
        </View>
        <View style={styles.button} >
          <Button title="Add Teacher"></Button>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 14,
    marginVertical: 15
  },
  adtext: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 28,

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


  },
  checkboxInput: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    margin: 8,
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


export default Profile;