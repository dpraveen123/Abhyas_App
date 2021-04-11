import React, { useState } from 'react';
import { Button, Text, TextInput, View ,Image,
  TouchableOpacity, 
  ImageBackground,ScrollView} from 'react-native';
import { shadow } from 'react-native-paper';
  import Svg, {G,Path} from 'react-native-svg'
// import OtpInputs from 'react-native-otp-textinput'
// import Svgpage from '../otppage/Svg';
import Classroom from '../Images/Classroom.jpg'
import Teacher from '../Images/teacher.jpg'
import Student from '../Images/students.jpg'
import Graph from '../Images/Graph.jpg'
import Timetable from '../Images/Timetable.jpg'
import Continue from '../Images/continue.jpg'
const AdminDashboard = ({navigation}) => {
  // const [text, setText] = useState('');
  return (
      <View 
      // style={{paddingTop:-100}}
      >
        <ScrollView>
     <View>
      <View style={{marginLeft:16,marginTop:20}}>
        <Text style={{fontSize:16}}>Admin Dashboard</Text>
        </View>
    <View>
    <View style={{flexDirection:"row"}}>
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Classes')}
    style={{width:"47.09%",height:130,backgroundColor:"whitesmoke",borderRadius:15,justifyContent: "center",alignItems:"center",border:5,marginLeft:7,marginTop:12,borderWidth:1,borderColor:"#E1E8ED",shadowColor:"black"}}>
      <Image source={Classroom} style={{marginLeft:5}}>
      </Image>
      <Text style={{fontSize:14}}>Classes</Text>
    </TouchableOpacity>
    <TouchableOpacity 
     onPress={()=>navigation.navigate('Teachers')}
    style={{width:"47.09%",height:130,backgroundColor:"whitesmoke",borderRadius:15,justifyContent: "center",alignItems:"center",marginLeft:8,borderWidth:1,borderColor:"#E1E8ED",shadowColor:"black",marginTop:12,marginLeft:8,marginRight:16}}>
      <Image source={Teacher} style={{marginLeft:5}}>
      </Image>
      <Text style={{fontSize:14}}>Teachers</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View>
    <View style={{flexDirection:"row"}}>
    <TouchableOpacity
     onPress={()=>navigation.navigate('Reports')}
    style={{width:"47.09%",height:130,backgroundColor:"whitesmoke",borderRadius:15,justifyContent: "center",alignItems:"center",border:5,marginLeft:7,marginTop:8,borderWidth:1,borderColor:"#E1E8ED",shadowColor:"black"}}>
      <Image source={Graph} style={{marginLeft:5}}>
      </Image>
      <Text style={{fontSize:14}}>Reports</Text>
    </TouchableOpacity>
    <TouchableOpacity 
     onPress={()=>navigation.navigate('Students')}
    style={{
      width:"47.09%",
      height:130,
      backgroundColor:"whitesmoke",
      borderRadius:15,
      justifyContent: "center",
      alignItems:"center",
      marginLeft:8,
      borderWidth:1,
      borderColor:"#E1E8ED",
      shadowColor:"black",
      marginTop:8,
      marginLeft:8,
      marginRight:16}}>
      <Image source={Student} style={{marginLeft:5}}>
      </Image>
      <Text style={{fontSize:14}}>Students</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View>

    <TouchableOpacity 
    style={{
      width:328,
      height:160,
      backgroundColor:"#4860DC",
      borderRadius:8,
      justifyContent: "center",
      alignItems:"center",
      marginLeft:15,
      borderWidth:1,
      borderColor:"#4860DC",
      shadowColor:"black",
      marginTop:45.15,
      marginRight:18}}>

      <View>
       <View style={{marginTop:12}}>
      <Image source={Timetable} style={{marginLeft:31.33,marginRight:210}}>
      </Image>
      </View>
      </View>
 </TouchableOpacity>
    </View>
    <Text 
      style={{
        color:"white",
        marginLeft:184,
        marginTop:-140,
        fontSize:14
        }}>Time table</Text>
    <Text 
      style={{
        color:"white",
        marginLeft:184,
        fontSize:12
        }}>Add/edit the timetable for</Text>
    <Text style={{
      color:"white",
      marginLeft:184,
      fontSize:12
      }}>your teachers</Text>
    </View>
    <View>
      <TouchableOpacity 
      
         style={{
           width:148,
           height:36,
           borderRadius:40,
           backgroundColor:"white",
           marginLeft:190,
           marginTop:40
           }}>
      <Text 
     onPress={()=>navigation.navigate('Timetable')}
      style={{
        marginTop:5,
        marginLeft:8,
        color:"#1F85FF",
        fontSize:14,
        textAlign:'center'
        }}>View Timetable
      <Image source={Continue} style={{marginLeft:10}}></Image>
      </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
 
</View>

  );
}

export default AdminDashboard 