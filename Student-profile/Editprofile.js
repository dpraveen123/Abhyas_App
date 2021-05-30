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



  export default function EditPro(){
    const[name,setname]=useState('');
    const[Rollno,setRollno]=useState('');
    const[fname,setfname]=useState('');
    const[Mname,setMname]=useState('');
    const[num,setnum]=useState('');
    
    
 
    return(
   
       
        
            <ScrollView>
             
             <View style={{paddingLeft:121,paddingTop:13}}>  
            <Image source={require('../Images/Student.png')}  style={{
                      height: 120,
                      width: 120,
                      
                      backgroundColor: "#ddd",
                      borderRadius: 80}}resizeMode="cover"/>  
                      <TouchableOpacity  style={{marginLeft:-8,marginTop:3,justifyContent:"center"}}>
                      <Text style={{color:'#1F85FF',fontSize:14,paddingTop:2,fontWeight:"bold"}}>Change Profile Picture </Text>
                      </TouchableOpacity>
    

</View>


<View style={{paddingLeft:20,marginTop:30}}>

<Text style={styles.text1}>Name</Text>

<TextInput placeholder="Enter your full name" style={styles.textinput}
onChangeText ={(value)=> setname(value)} />
{/* ............................testing data ................................ */}
<Text>{name}</Text>



<Text style={styles.text1}>Roll No</Text>
<TextInput placeholder="Enter your Roll No"  style={styles.textinput}
onChangeText ={(value)=> setRollno(value)}

></TextInput>
<Text>{Rollno}</Text>


<Text style={styles.text1}>Father's Name</Text>
<TextInput placeholder="Enter Father's Name"  style={styles.textinput}
onChangeText ={(value)=> setfname(value)}
></TextInput>
<Text>{fname}</Text>

<Text style={styles.text1}>Mother's Name</Text>
<TextInput placeholder="Enter Mother's Name"  style={styles.textinput}
onChangeText ={(value)=> setMname(value)}
></TextInput>
<Text>{Mname}</Text>

<Text style={styles.text1}>Mobile Number</Text>
<TextInput placeholder="Enter Mobile Number"  style={styles.textinput}
keyboardType="phone-pad"
onChangeText ={(value)=> setnum(value)}
></TextInput>
<Text>{num}</Text>





</View>






</ScrollView>
















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
              marginVertical:12,
             
          },
          text1:{
              fontFamily:"Roboto",
              fontSize:14,
              marginVertical:8,
              fontWeight:"bold",
              paddingLeft:5
              
          
             
          },
          
          container: {
          
              justifyContent: 'center',
              backgroundColor: '#F5FCFF',
            },
          textinput:{
              height:40,
              width:328,
              borderWidth:1,
              borderRadius:4,
              borderColor:"#E1E8ED",
              backgroundColor: "#F5F8FA",
              paddingLeft:10
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
            fontSize:14,
            fontFamily:"Roboto",
            fontWeight: "bold"
            
          },
          footer: {
            backgroundColor:'#FFFFFF',
            height:50,
            alignItems:'center',
            justifyContent:'center',
            marginTop:605,
            paddingLeft:15,
            position:"absolute"
            
            
         
         
          },
           
           
          });