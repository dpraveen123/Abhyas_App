import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,Dimensions,ScrollView,SafeAreaView,AppRegistry,
  TextInput,Button,Alert,title,TouchableHighlight} from 'react-native';
import {Card} from'react-native-elements';
import pic from '../Images/student1.png';
import pic1 from '../Images/stu.png';
import Svgpages from '../assets/Svg';
import Search from '../assets/Search';
import Fil from '../assets/fil';
import Editpickker from './edit';


class AllClasses extends React.Component {
  
  
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
        image: pic1,
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
          image:pic1,
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
          image: pic1,
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
          image: pic1,
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
          image: pic1,
          id: 10,
          name: "Nachos",
          section:"1ST CLASS- A SECTION",
          rollno:"Roll No. 2"
        },
       
    ],
    
   
    }
  
  
    render() {
      
      
      
  
      
      return (
          <View style={{flex:1,backgroundColor:"white"}}>
      
           
       
            <View style={{justifyContent:'center',paddingHorizontal:17,flexDirection:'row',paddingTop:13}}>
           
           <View style={{height:50,flexDirection:'row',padding:4,alignItems:'center',borderRadius:38,paddingLeft:18, paddingRight:40,flex: 1,backgroundColor:'#F5F8FA'}}>
           
           
             <Search />
             <TextInput placeholder="Search Students or roll no......" style={{fontSize:16, marginLeft:15,borderRadius:15,fontFamily:"Roboto",fontWeight:"400",marginLeft:4,lineHeight:18}}/>
             </View>
             </View>
            
             <View style={{paddingLeft:25,paddingTop:15}}> 

           <Text style={{fontFamily:"Roboto",fontSize:20,fontWeight:"500",lineHeight:28,color:"#14171A"}}>All Students</Text>
            </View>

           
          
             <ScrollView style={{backgroundColor:'white'}}>
            
            {/* <View style={{paddingLeft:25,paddingTop:12}}> 

             <Text style={{fontFamily:"Roboto",fontSize:20,fontWeight:"500",lineHeight:28,color:"#14171A"}}>All Students</Text>
             </View>
           */}
         
         <View style={{flexDirection:'row',borderRadius:80, margin:0}}>
             
       
             <View
                 style={{
                   backgroundColor: "white",
                   borderRadius: 20,
                   flex: 1,
                   width:300,heigth:45,marginLeft:-10,
                   }}>
                  {this.state.artists.map(artist =>  (
  
              
              
                <Card containerStyle={styles.card}> 
        
        
  
         <View key={artist.id} style={{flexDirection: "row"}} >
           
         <View style={{flexDirection:'row',borderRadius:20}}>
  
         <View style={{flexDirection: "column",marginTop:-20}}>
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
                            marginTop: -20,
                            fontWeight:"bold",
                          
                          
                          }}>
                          <Text style={{ fontSize: 20,fontFamily:"Roboto",lineHeight:28 }} >{artist.name}</Text>
                          <Text style={{ fontSize: 14, color: "#657786",fontFamily:"Roboto" }}>{artist.rollno} </Text>
                          
                          <Text style={{ fontSize: 14, color: "#A7A7A7",fontFamily:"Roboto" }}>{artist.section} </Text>
                        </View>
  
                                    
                       </View>
                       <View style={{ marginLeft:300,marginTop:-5,position:"absolute"}}>
                        <View>
                        <Svgpages  />
                         </View>
                      </View>
                      
                  
                     </View>
                    
                   
                    
                     
                    </Card>
                    
                      
                      
                      
                     
                     ))}
                    
                     
        
        
                   
                  </View>
                  
                  
                  
                  </View>
  
                </ScrollView>
                   <View style={{marginTop: 650, marginLeft: 110,position:"absolute"}}>
                 
                 
                   <TouchableOpacity style={styles.submit} onPress={() => 
                     Alert.alert("Adding new class")}underlayColor='#fff'>
                     <Text style={styles.submitText}> + Add new Student </Text>
                    </TouchableOpacity>
                    </View>
   
               
               
                    </View>
      
      
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
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#fff',
      fontFamily:"Roboto",
      fontWeight:"500"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation:0,
    backgroundColor:"white",
    borderWidth:0,
   
  },


  submit:{
    width:300,
    height:60,
    paddingLeft:160,
    paddingTop:7,
    marginLeft:-155,
    
}
  });
  
  
  
  
  export default AllClasses;
  
  
  