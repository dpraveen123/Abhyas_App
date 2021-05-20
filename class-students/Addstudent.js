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
  Image,
  TouchableOpacity,
  TouchableHighlight

  
} from 'react-native';

import {Picker} from '@react-native-community/picker';





export default function AddStudent(){

const [selectedValue, setSelectedValue] = useState("select class");
  


          return(
            
              <View style={{flex:1}}>
              


                  <ScrollView >
                <View style={{margin:20}}>

                  <View  style={{paddingLeft:115}}>  
                  <Image source={require('../Images/profile.png')}  style={{
                            height: 90,
                            width: 90,
                            
                            backgroundColor: "#ddd",
                            borderRadius: 90/2}}resizeMode="cover"/>  
                   </View>



  <View style={{alignItems:'center',paddingLeft:8,paddingTop:10}}>
  <Text style={{color:'#1F85FF',fontSize:15,fontWeight:'500',fontFamily:"Roboto"}}>Add Profile Picture </Text>
  </View>


  <View style={{paddingTop:80,justifyContent:"space-evenly"}}>
  
  <Text style={styles.text1}>Name</Text>
  <TextInput placeholder="Enter your full name" style={styles.textinput}></TextInput>


       {/* .........................picker.......................... */}

    <View style={{flexDirection:"row",marginLeft:-4}}>
      <View style={styles.text1}>
          <Text style={styles.text1}>Choose class</Text>
          <View style={{ borderWidth: 1, height:45, padding: 0, backgroundColor: "#F5F8FA" ,borderColor:"#E1E8ED",fontFamily:"Roboto", borderRadius:4,}}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150,fontFamily:"Roboto",fontWeight:"500" }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="1st class" value="1st class" />
        <Picker.Item label="2nd class" value="2nd class" />
        <Picker.Item label="3rd class" value="3rd class" />
        <Picker.Item label="4th class" value="4th class" />
        <Picker.Item label="5th class" value="5th class" />
        <Picker.Item label="6th class" value="6th class" />
        <Picker.Item label="7th class" value="7th class" />
        <Picker.Item label="8th class" value="8th class" />
        <Picker.Item label="9th class" value="9th class" />
        <Picker.Item label="10th class" value="10th class" />
        
      </Picker>
      </View>
      
      </View>
      <View style={styles.text2}>
      <Text style={styles.text1}>Section</Text>
      <View style={{borderWidth: 1, height:45, padding: 0, backgroundColor: "#F5F8FA",borderColor:"#E1E8ED", borderRadius:4,}}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="A" value="A" />
        <Picker.Item label="B" value="B" />
        <Picker.Item label="C" value="C" />
        <Picker.Item label="D" value="D" />
        <Picker.Item label="E" value="E" />
        <Picker.Item label="F" value="F" />
      </Picker>
      </View>

      </View>

      </View>


  
  <View >
  <Text style={styles.text1}>Roll No.</Text>
  <TextInput placeholder="Enter your Roll No"  style={styles.textinput1}></TextInput>
  <Text style={styles.text1}>Father's Name</Text>
  <TextInput placeholder="Enter your Father's Name"  style={styles.textinput}></TextInput>
  <Text style={styles.text1}>Mother's Name</Text>
  <TextInput placeholder="Enter your Mother's Name"  style={styles.textinput}></TextInput>
  <Text style={styles.text1}>Mobile Number</Text>
  <TextInput placeholder="Enter your Mobile Number"  style={styles.textinput}></TextInput>
  </View>


  </View>
  </View>
  </ScrollView>


          {/* .....................Footer ............................*/}

          <View style={styles.footer}>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Add Student</Text></TouchableOpacity>
          </View>
  


        </View>
  
 
          );
      };
      const styles= StyleSheet.create({
        header:{
          height:56,
          width:'100%',
          backgroundColor:'#F5F8FA',
          justifyContent:'center'
          

        } ,
        icon:{
          position:'absolute',
          right:36,
         
        },
        text:{
              fontFamily:"Roboto",
              fontSize:14,
              marginVertical:15,
             
          },
          text1:{
              fontFamily:"Roboto",
              fontSize:14,
              marginVertical:7,
              fontWeight:"500",
              paddingLeft:5
              
          
             
          },
          text2:{
            fontFamily:"Roboto",
            fontSize:14,
            marginVertical:7,
            fontWeight:"500",
            paddingLeft:12
        },
         
  
         
          
          container: {
          
              justifyContent: 'center',
              backgroundColor: '#F5FCFF',
            },
          textinput:{
              height:45,
              borderWidth:1,
              borderRadius:4,
              borderColor:"#E1E8ED",
              backgroundColor: "#F5F8FA",
              fontFamily:"Roboto"
          },
          textinput1:{
            height:40,
            borderWidth:1,
            borderRadius:4,
            borderColor:"#E1E8ED",
            backgroundColor: "#F5F8FA",
            width:140,
            fontFamily:"Roboto"
        },
          button:{
            backgroundColor:'#1F85FF',
            padding:10,
            borderRadius: 4,
            width:325 
          
          },
          buttonText:{
            color:'white',
            alignSelf:'center',
            fontSize:16,
            fontFamily:"Roboto",
            fontWeight: "500"
            
          },
          footer: {
            backgroundColor:'#FFFFFF',
            height:56,
            alignItems:'center',
            justifyContent:'center',
            
          },
          bottomButtons: {
          
            width:300,

          },
          footerText: {
            color:'white',
            fontWeight:'bold',
            alignItems:'center',
            fontSize:18,
          },
           
           
          });