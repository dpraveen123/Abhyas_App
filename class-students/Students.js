import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,Dimensions,ScrollView,SafeAreaView,AppRegistry,
  TextInput,Button,Alert,title,TouchableHighlight} from 'react-native';
import {Card} from'react-native-elements';
import pic from '../Images/pp.jpg';
import Svgpages from '../assets/Svg';
import Search from '../assets/Search';
import Fil from '../assets/fil';
import Editpickker from './edit';








class Students extends React.Component {
  
  
  state={
  artists: [
    {
      image: pic,
     
      id: 1,
      name: "Mike Anderson ",
     section:"1ST CLASS- A SECTION",
     rollno:"Roll No. 2"
    },
    {
      image: pic,
      id: 2,
      name: "Thomas Edison",
      section:"1ST CLASS- A SECTION",
      rollno:"Roll No. 2"

    },
    {
      image: pic,
      id: 3,
      name: "Mounika Kiran",
     section:"1ST CLASS- A SECTION",
     rollno:"Roll No. 2"
    },
    {
        image:pic,
        id: 4,
       name: "Thomas Edison  ",
       section:"1ST CLASS- A SECTION",
       rollno:"Roll No. 2"
      },
      {
        image: pic,
        id: 5,
      name: "Mike Anderson",
      section:"1ST CLASS- A SECTION",
      rollno:"Roll No. 2"
      },
      {
        image: pic,
        id: 6,
      name: "Amelia Cleo",
      section:"1ST CLASS- A SECTION",
      rollno:"Roll No. 2"
      },
      {
        image: pic,
        id: 7,
       name: "Cleo ",
      section:"1ST CLASS- A SECTION",
      rollno:"Roll No. 2"
      },
      {
        image: pic,
        id: 8,
      name: "Mike Anderson",
      section:"1ST CLASS- A SECTION",
      rollno:"Roll No. 2"
      },
      {
        image: pic,
        id: 9,
        name: " Yuro Plee ",
        section:"1ST CLASS- A SECTION",
        rollno:"Roll No. 2"
      },
      {
        image: pic,
        id: 10,
        name: "Nachos",
        section:"1ST CLASS- A SECTION",
        rollno:"Roll No. 2"
      },
     
  ],
  
 
  }


  render() {
    
    
    

    
    return (
      <SafeAreaView style={{backgroundColor:'white' }}>
          <View style={{justifyContent:'center',paddingHorizontal:15,flexDirection:'row',paddingTop:10}}>
         
         <View style={{height:50,flexDirection:'row',padding:5,alignItems:'center',borderRadius:30,paddingLeft:30, flex: 1,backgroundColor:'#f5f8fa'}}>
         
         
           <Search />
           <TextInput placeholder="Search Students or roll no" style={{fontSize:14, marginLeft:15,borderRadius:15}}/>
           </View>
           
         </View>
         
        
  
          
    
       <ScrollView>

           
       
       
       <View style={{flexDirection:'row',borderRadius:80, margin:12}}>
           
            
           <View
               style={{
                 backgroundColor: "white",
                 borderRadius: 20,
                 flex: 1,
                 width:300,heigth:45,marginLeft:-10}}>
                {this.state.artists.map(artist =>  (

            
            
              <TouchableOpacity style={styles.card}> 
      
      

       <View key={artist.id} style={{flexDirection: "row" ,flex:1}} >
         
       <View style={{flexDirection:'row',borderRadius:20}}>

       <View style={{flexDirection: "column",paddingLeft: 0,paddingTop:1,}}>
                   <Image source={artist.image}
                       style={{
                       
                          height: 50,
                          width: 50,
                          backgroundColor: "#ddd",
                          borderRadius: 50 / 2}}resizeMode="cover"/>
    
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                          paddingLeft: 13,
                          paddingTop: 7,
                          fontWeight:"bold",
                        
                        
                        }}>
                        <Text style={{ fontSize: 20,fontFamily:"Roboto",lineHeight:28 }} >{artist.name}</Text>
                        <Text style={{ fontSize: 14, color: "#657786",fontFamily:"Roboto" }}>{artist.rollno} </Text>
                        
                        <Text style={{ fontSize: 14, color: "#A7A7A7",fontFamily:"Roboto" }}>{artist.section} </Text>
                      </View>

                                  
                     </View>
                     <View style={{ paddingLeft:260,paddingTop:25,position:"absolute"}}>
                      <View>
                      <Svgpages  />
                       </View>
                    </View>
                    
                
                   </View>
                  
                 
                  
                   
                  </TouchableOpacity>
                  
                    
                    
                    
                   
                   ))}
                  
                   
      
      
                 
                </View>
                
                
                
                </View>
               
                </ScrollView>
                <View style={{position:'absolute', marginTop: 600, marginLeft: 125}}>
               
               
                <TouchableHighlight style={styles.submit} onPress={() => 
                  Alert.alert("Adding new class")}underlayColor='#fff'>
                  <Text style={styles.submitText}> + Add new Student </Text>
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
    fontFamily:"Roboto"
},
card: {
  backgroundColor: "#fff",
  paddingVertical: 10,
  paddingHorizontal: 15,
  width: width / 1.1,
  marginHorizontal: 20,
  borderRadius: 20,

  height: height / 8,

  shadowColor: "#000",
  shadowOffset: {
    width: 2,
    height: 2,
  },
  flex:1,
  shadowOpacity: 0.3,
  shadowRadius: 1.5,
},
});




export default Students;


