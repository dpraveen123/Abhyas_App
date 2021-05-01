import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,Dimensions,ScrollView,SafeAreaView,AppRegistry,
  TextInput,Button,Alert,title,TouchableHighlight} from 'react-native';
import {Card} from'react-native-elements';
import {Picker} from '@react-native-picker/picker';
// import Drop from '../assets/dropdown';
import Classno from '../images/Classno'
import Edit from '../assets/edit';
import Arr from '../assets/line';
import Pick from './Picker';
import Editpick from './Editpick';

import Newone from './new1'


import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";






class AllClasses extends React.Component {
  
  
  state={
  artists: [
    {
      image: Classno,
     
      id: 1,
      name: "1st Class ",
     section:"4 sections"
    },
    {
      image: Classno,
      id: 2,
      name: "2nd Class ",
     section:"4 sections"

    },
    {
      image: Classno,
      id: 3,
      name: "3rd Class",
     section:"4 sections"
    },
    {
        image: Classno,
        id: 4,
      name: "4th Class ",
     section:"4 sections"
      },
      {
        image: Classno,
        id: 5,
      name: "5th Class ",
     section:"4 sections"
      },
      {
        image: Classno,
        id: 6,
      name: "6th Class",
     section:"4 sections"
      },
      {
        image: Classno,
        id: 7,
      name: "7th Class ",
     section:"4 sections"
      },
      {
        image: Classno,
        id: 8,
      name: "8th Class ",
     section:"4 sections "
      },
      {
        image: Classno,
        id: 9,
        name: "9th Class ",
       section:"4 sections"
      },
      {
        image: Classno,
        id: 10,
        name: "10th Class ",
       section:"4 sections"
      },
     
  ],
  
 
  }


  render() {
    
    
    

    
    return (
      <SafeAreaView style={{backgroundColor:'white' }}>
          
    
       <ScrollView>

           
       
       
       <View style={{flexDirection:'row',borderRadius:80, margin:12}}>
           
            
           <View
               style={{
                 backgroundColor: "white",
                 borderRadius: 20,
                 flex: 1,
                 width:300,heigth:45,marginLeft:-10}}>
                {this.state.artists.map(artist =>  (

            
            

              <Card >
      
      

       <View key={artist.id} style={{flexDirection: "row" ,flex:1}} >
         
       <View style={{flexDirection:'row',borderRadius:20}}>

       <View style={{flexDirection: "column",paddingLeft: 0,paddingTop:1,}}>
                   <Image source={artist.image}
                       style={{
                          height: 64,
                          width: 64,
                          backgroundColor: "#57D5C3" ,
                          borderRadius: 4}}resizeMode="cover"/>
    
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                          paddingLeft: 13,
                          paddingTop: 7,
                          fontWeight:"bold",
                        
                        
                        }}>
                        <Text style={{ fontSize: 20,fontFamily:"Roboto",lineHeight:28 }} >{artist.name}</Text>
                        
                        <Text style={{ fontSize: 14, color: "#A7A7A7" }}>{artist.section} </Text>
                      </View>

                                  
                     </View>
                   
                
                   </View>
                 
                   <View >
                 
                  
                      </View>
                    
                   
                      <View style={{position:'absolute',flexDirection:'row',paddingTop:15}}>

                      {/* <Pick /> */}
                      {/* <Editpick /> */}
                      <View style={{position:'absolute'}}>
                      <Editpick/>
                      </View>
                     </View> 
     
                       <Newone />
                       
                 
                    </Card>
                  
                    
                    
                    
                   
                   ))}
                  
                   
      
      
                 
                </View>
                
                
                
                </View>
               
                </ScrollView>
                <View style={{position:'absolute', marginTop: 600, marginLeft: 125}}>
               
               
                <TouchableHighlight style={styles.submit} onPress={() => 
                  Alert.alert("Adding new class")}underlayColor='#fff'>
                  <Text style={styles.submitText}> + Add new Class </Text>
                 </TouchableHighlight>

               </View>
                 
                </SafeAreaView>
                
    
    
    
    );
  }
}
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
 
submitText:{
    paddingTop:10,
    paddingBottom:10,

    color:'#fff',
    textAlign:'center',
    backgroundColor:"#1e90ff",
    borderRadius: 20,
    borderWidth: 1,
    fontWeight:'bold',
    borderColor: '#fff',
},
});




export default AllClasses;


