import React, { Component } from 'react';
import { Image, Text, TextInput } from 'react-native';
import {View ,Button,StyleSheet,TouchableOpacity,Images} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AntIcon from "react-native-vector-icons/AntDesign";
function Teacherspage()
{
    return(
        
        <View>
            <View style={{marginLeft:20}}>
            <View style={{marginTop:60}}>
            <AntIcon name="left" color="black" size={20 } />
            </View>
            <View style={{marginTop:-25.3,paddingLeft:1}}>
            <AntIcon name="minus" color="black" size={30} />
            </View>
            </View>
            <View style={{marginLeft:80,marginTop:-33}}>
            <Text style={{fontSize:24,fontWeight:"500"}}>Teachers</Text>
            </View>
           <View>           
           <TextInput style={styles.input} placeholder="🔍 Search teachers...">
           {/* <Image source={Vector}style={{margin:5,size:30,backgroundColor:" #657786"}}></Image> */}
           </TextInput>
           </View>
           
       
             <View style={{marginTop:30,marginLeft:75}}>
                <Text style={{fontSize:20,color:'Grey'}}>No Teachers added yet!</Text>
            </View>
            <View style={{marginTop:15,marginLeft:129}}>
                <Text style={{fontSize:16,color:'skyblue'}}>Add Teachers</Text>
            </View>
            
                <View style={styles.teacher}>
                                   
                <TouchableOpacity style={{borderRadius:40,backgroundColor:'#1F85FF',width:169,height:48,fontWeight:"500",padding:12,marginTop:-20,marginLeft:15}}>

                      <Text style={{fontSize:16,color:"#FFFFFF",width:137.75,height:24}}> +Add new Teacher</Text>
                      </TouchableOpacity>
                        </View>
                      
              
    
            </View>
            
    
    )
}
const styles=StyleSheet.create(
{
    teacher:
    {
        width:199,
        height:48,
         marginLeft:80,
        marginTop:450,
    

  },
  input:
  {
      borderWidth:1,
      borderColor:'#777',
      padding:16,
      marginLeft:15,
      marginTop:25,
      width:328,
      height:50,
      backgroundColor:'#F5F8FA',
      borderRadius:40,
      fontSize:16,
      color:'#657786',
      fontStyle:'normal',
      fontWeight:'normal',
  }
})
export default Teacherspage;