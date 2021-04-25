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
import {Picker} from '@react-native-community/picker';
import CheckBox from '@react-native-community/checkbox';
// import { black } from 'react-native-paper/lib/typescript/styles/colors';


export default function Addclass(){
const [selectedValue, setSelectedValue] = useState("select class");
const [isSelected, setSelection] = useState(false);
        return(
            <View style={{margin:20,marginTop: 50,}}>
                <View style={{flex:1,paddingLeft:120}}>  
                <Image source={require('../Images/profile.png')}  style={{
                          height: 80,
                          width: 80,
                          
                          backgroundColor: "#ddd",
                          borderRadius: 50}}resizeMode="cover"/>       

</View>

<View style={{paddingTop:120}}>
<View style>
<Text style={styles.text1}>Name</Text>
<TextInput placeholder="Enter your full name" style={styles.textinput}></TextInput>
</View>
<Text style={styles.text1}>Mobile Number</Text>
<TextInput placeholder="Enter your mobile number"  style={styles.textinput}></TextInput>
<View
  style={{
    paddingTop:5,
    borderBottomColor: '#E1E8ED',
    borderBottomWidth: 1,
    flex:2
  }}
/>
<Text style={styles.adtext}>Add Classes</Text>
<View >
            <View style={{flexDirection:"row"}} >
      
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="class" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
    <Text style={styles.text1}>Subjects</Text>
    <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 328,backgroundColor:"#F5F8FA",color:"#AAB8C2"}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        
      >
        <Picker.Item  label="Add new class" value="class 1" />
        <Picker.Item  label="Class 1 " value="class 2" />
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
<Text style={{color: '#1F85FF',fontWeight:"bold",fontSize:15}}
      onPress={() => Linking.openURL('http://google.com')}>
       Add Another class
</Text>

</View>
</View>
<View style={styles.button} >
            <Button title="Add Teacher"></Button>
            </View>
</View>
        );
    };
    const styles= StyleSheet.create({
        text:{
            fontFamily:"Roboto",
            fontSize:14,
            marginVertical:15,
           
        },
        text1:{
            fontFamily:"Roboto",
            fontSize:14,
            marginVertical:10,
            fontWeight:"bold",
            paddingLeft:5
            
        
           
        },

        adtext:{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontSize: 20,
            lineHeight: 28,
            fontWeight:"bold",
            marginVertical:10,
            
        },
        container: {
        
            justifyContent: 'center',
            backgroundColor: '#F5FCFF',
          },
        textinput:{
            height:50,
            borderWidth:1,
            borderRadius:4,
            borderColor:"#E1E8ED",
            backgroundColor: "#F5F8FA",
        },
        button:{
            marginVertical:20,
            color:'#1DA1F2',
            borderRadius:4,
            paddingTop:45
            
        
        },
        checkboxInput: {
            flexDirection: "row",
            marginBottom: 20,
          },
          label: {
            margin: 8,
            fontSize:16,
            color:"gray",
            
          },
          picker:{
              height:45,
              width:300,
              borderColor:"black",
              borderWidth:1
          },
          checkboxContainer: {
            flexDirection: "row",
            marginBottom: 20,
          },
          checkbox: {
            alignSelf: "center",
          },
          plabel:{
            color:"#AAB8C2"
          },
        });