import React, { Component } from 'react';
import { Image, Text, TextInput } from 'react-native';
import {View ,Button,StyleSheet,TouchableOpacity,Images} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AntIcon from "react-native-vector-icons/AntDesign";
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
function noStudentpage()
{
    return(
        
        <View>
            {/* <View style={{marginLeft:20}}>
            <View style={{marginTop:60}}>
            <AntIcon name="left" color="black" size={20 } />
            </View>
            <View style={{marginTop:-25.3,paddingLeft:1}}>
            <AntIcon name="minus" color="black" size={30} />
            </View>
            </View> */}
            {/* <View style={{borderColor:"black"}}>
            <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M20.5056 18.5773L14.8182 12.8899C15.9199 11.5291 16.5832 9.7999 16.5832 7.9166C16.5832 3.55164 13.0315 0 8.66656 0C4.30161 0 0.75 3.55161 0.75 7.91656C0.75 12.2815 4.30165 15.8332 8.6666 15.8332C10.5499 15.8332 12.2791 15.1699 13.6399 14.0682L19.3273 19.7556C19.4898 19.9181 19.7031 19.9998 19.9165 19.9998C20.1298 19.9998 20.3432 19.9181 20.5057 19.7556C20.8315 19.4298 20.8315 18.9031 20.5056 18.5773ZM8.6666 14.1665C5.21996 14.1665 2.41666 11.3632 2.41666 7.91656C2.41666 4.46992 5.21996 1.66662 8.6666 1.66662C12.1132 1.66662 14.9165 4.46992 14.9165 7.91656C14.9165 11.3632 12.1132 14.1665 8.6666 14.1665Z" fill="#657786"/>
     </Svg>
      </View> */}
           
       
             <View style={{marginTop:30,marginLeft:75}}>
                <Text style={{fontSize:20,color:'Grey'}}>No Students added yet!</Text>
            </View>
            <View style={{marginTop:15,marginLeft:129}}>
                <Text style={{fontSize:16,color:'skyblue'}}>Add Students</Text>
            </View>
            
                <View style={styles.teacher}>
                                   
                <TouchableOpacity style={{borderRadius:40,backgroundColor:'#1F85FF',width:169,height:48,fontWeight:"500",padding:12,marginTop:-20,marginLeft:15}}>

                      <Text style={{fontSize:16,color:"#FFFFFF",width:137.75,height:24}}> +Add new Student</Text>
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
export default noStudentpage;