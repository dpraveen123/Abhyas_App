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
import store from '../redux'
// import {Picker} from '@react-native-community/picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';

export default class  AddStudent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      class:this.props.props.class.class,
      section:this.props.props.class.section,
      rollNo:'',
      fatherName:'',  
      motherName:'',
      mobileNumber:'',
      sectionUid:''
    }
  }

// const [selectedValue, setSelectedValue] = useState("select class");
uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}
  addStudent=()=>{
    // console.log("hiiii",store.getState( ))
    var details={
      name:this.state.name,
      class:this.state.class,
      section:this.state.section,
      rollNo:this.state.rollNo,
      fatherName:this.state.fatherName,
      motherName:this.state.motherName,
      mobileNumber:this.state.mobileNumber,
      studentUid:this.uuidv4(),
      schoolUid:store.getState().authdetails.SchoolID,
      sectionUid:this.state.sectionUid,
      datadded:false,
    }
    // var a={}
    // a[details.rollNo]={uid:details.studentUid,rollNo:details.rollNo,name:details.name,}
    // firestore().collection('Sections').doc(details.sectionUid).set({
    //   students:a
    // },{merge:true}).then(l=>{
    //   console.log("sucsesffuly added")
    // })
    // firestore().collection('Students').doc(details.studentUid).set({
    //   name:details.name,
    //   class:details.class,
    //   section:details.section,
    //   rollNo:details.rollNo,
    //   fatherName:details.fatherName,
    //   motherName:details.motherName,
    //   mobileNumber:details.mobileNumber,
    //   studentUid:details.studentUid,
    //   schoolUid:details.schoolUid,
    //   sectionUid:details.sectionUid
    // })
    functions()
  .httpsCallable('addStudent')(details)
  .then((response) => {
    console.log("sucsesfully getting Teacher details dudee to fire functions from teacher", response.data)
    this.setState({datadded:true})
    alert("sucsefully added student details")
    this.props.props.function();
  });
  }
  componentDidMount=()=>{
    console.log(this.props.props,"hiiii")

    firestore().collection('Schools').doc(store.getState().authdetails.SchoolID).collection('classes').doc(this.props.props.class.class).get()
    .then(l=>{
      // console.log("response is",l.data().sections[this.props.props.route.params.section])
      this.state.sectionUid=l.data().sections[this.props.props.class.section];
      this.setState({sectionUid:this.state.sectionUid})
      console.log(this.state.sectionUid)
    })
  }

render(){

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
  <TextInput placeholder="Enter your full name" style={styles.textinput}
  onChangeText={(val)=>{this.setState({name:val})}}
  ></TextInput>


       {/* .........................picker.......................... */}

    <View style={{flexDirection:"row",marginLeft:-4}}>
      <View style={styles.text1}>
          <Text style={styles.text1}>Choose class</Text>
          <View style={{ borderWidth: 1, height:45, padding: 0, backgroundColor: "#F5F8FA" ,borderColor:"#E1E8ED",fontFamily:"Roboto", borderRadius:4,}}>
      {/* <Picker
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
        
      </Picker> */}
      </View>
      
      </View>
      <View style={styles.text2}>
      <Text style={styles.text1}>Section</Text>
      <View style={{borderWidth: 1, height:45, padding: 0, backgroundColor: "#F5F8FA",borderColor:"#E1E8ED", borderRadius:4,}}>
      {/* <Picker
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
      </Picker> */}
      </View>

      </View>

      </View>


  
  <View >
  <Text style={styles.text1}>Roll No.</Text>
  <TextInput placeholder="Enter your Roll No"  style={styles.textinput1}
    onChangeText={(val)=>{this.setState({rollNo:val})}}
  ></TextInput>
  <Text style={styles.text1}>Father's Name</Text>
  <TextInput placeholder="Enter your Father's Name"  style={styles.textinput}
    onChangeText={(val)=>{this.setState({fatherName:val})}}
  ></TextInput>
  <Text style={styles.text1}>Mother's Name</Text>
  <TextInput placeholder="Enter your Mother's Name"  style={styles.textinput}
    onChangeText={(val)=>{this.setState({motherName:val})}}
  ></TextInput>
  <Text style={styles.text1}>Mobile Number</Text>
  <TextInput placeholder="Enter your Mobile Number"  style={styles.textinput}
    onChangeText={(val)=>{this.setState({mobileNumber:val})}}
  ></TextInput>
  </View>


  </View>
  </View>
  </ScrollView>


          {/* .....................Footer ............................*/}

          <View style={styles.footer}>
          <TouchableOpacity style={styles.button}
               onPress={()=>{this.addStudent()}}
          ><Text style={styles.buttonText}>Add Student</Text></TouchableOpacity>
          </View>
  


        </View>
  
 
          )};
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