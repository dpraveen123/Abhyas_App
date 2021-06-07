import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,Dimensions,ScrollView,SafeAreaView,AppRegistry,
  TextInput,Button,Alert,title,TouchableHighlight,Modal} from 'react-native';
import {Card} from'react-native-elements';
import pic from '../Images/student1.png';
import pic1 from '../Images/stu.png';
import Search from '../assets/Search';
import { Icon } from 'react-native-elements';
import { RadioButton} from 'react-native-paper'
import Calender from '../assets/calender';



class Attendence extends React.Component {
  
  
    state={
    checked: null,
    modalVisible: false,
       
        
       
      
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
          <View style={{flex:1,backgroundColor:"white",}}>
              

          <View style={{flexDirection:"row",paddingTop: 20,paddingLeft:10,backgroundColor:"#FFFFFF",borderBottomWidth:1,borderColor:"#E5E5E5",height:50}}>
                  <View style={{flexDirection:"row",paddingLeft:10,marginTop:-10,}}></View>
                  <Text style={{fontSize:14,fontWeight:"400",fontFamily:"Roboto"}}>1st Class -</Text>
                  <Text style={{fontSize:14,fontWeight:"400",fontFamily:"Roboto"}}> A section</Text>
                  
                 

                  <View style={{flexDirection:"row",marginLeft:90,paddingRight:40}}> 
                  <Calender />
                  <Text style={{marginLeft:8,color:"rgba(20, 23, 26, 1)",fontSize:14,fontFamily:"Roboto",fontWeight:"400"}}>24/05/2021</Text>
                  </View>

                  </View>
           
       
           
            
           

           
          
             <ScrollView style={{backgroundColor:'white'  }}>
             <View style={{justifyContent:'center',paddingHorizontal:17,flexDirection:'row',paddingTop:13}}>
           
           <View style={{height:50,flexDirection:'row',padding:4,alignItems:'center',borderRadius:38,paddingLeft:18, paddingRight:40,flex: 1,backgroundColor:'#F5F8FA'}}>
           
           
             <Search />
             <TextInput placeholder="Search Students or roll no......" style={{fontSize:16, marginLeft:15,borderRadius:15,fontFamily:"Roboto",fontWeight:"400",marginLeft:4,lineHeight:18}}/>
             </View>
             </View>
            
            <View style={{paddingLeft:25,paddingTop:12,flexDirection:"row"}}> 

             <Text style={{fontFamily:"Roboto",fontSize:16,fontWeight:"500",lineHeight:28,color:"#14171A"}}>All Students</Text>
             <TouchableOpacity style={{marginLeft:110}}>
             <Text style={{fontFamily:"Roboto",fontSize:14,fontWeight:"500",lineHeight:28,color:"rgba(31, 133, 255, 1)"}}>Mark All As Present</Text>
             </TouchableOpacity>
             </View>
          
         
                <View style={{flexDirection:'row',borderRadius:80, margin:0,paddingBottom:100,paddingTop:20}}>
                    
            
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
            
                    <View style={{flexDirection: "column",marginTop:-22}}>
                                <Image source={artist.image}
                                    style={{
                                    
                                        height: 80,
                                        width: 80,
                                        backgroundColor: "#ddd",
                                        borderRadius: 80/ 2}}resizeMode="cover"/>
                
                                    </View>
            
                                    <View
                                    style={{
                                        flexDirection: "column",
                                        paddingLeft: 13,
                                        marginTop: -21,
                                        fontWeight:"bold",
                                    
                                    
                                    }}>
                                    <Text style={{ fontSize: 17,fontFamily:"Roboto",lineHeight:28 ,lineHeight:24,color:"rgba(38, 38, 38, 1)"}} >{artist.name}</Text>
                                    <Text style={{ fontSize: 14, color: "#657786",fontFamily:"Roboto" }}>{artist.rollno} </Text>

                                    <RadioComponet />

                                    </View>
            
                                                
                                </View>
                               
                                
                            
                                </View>
                                
                            
                                
                                
                                </Card>
                                
                                
                                ))}
                            
                            </View>
                            
                            
                            
                            </View>
            
                            </ScrollView>


                            <View style={{alignItems:"center",position:"absolute",}}>
                            
                            
                            <TouchableOpacity style={styles.button} onPress={() =>Alert.alert("hello saving attendence")} underlayColor='#fff'>
                                <View>
                                <Text style={styles.Class}>Save Attendence</Text>
                                </View>
                                </TouchableOpacity>
                </View>
            
                        
               
      </View>
      
      
      );
    }
  }
 
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
    
},
button:{
  backgroundColor:"#1F85FF",
  width:152,
  height:48,
  borderRadius:40,
  justifyContent:'center',
  marginTop:670,
  marginLeft:110

},
Class:{
  color:'white',
  fontFamily:'Roboto',
  fontWeight:'500',
  fontSize:15,
  marginLeft:20
},

  });
  




  class RadioComponet extends React.Component {
    state = {
      checked: null,
    };
  
    render() {
      const { checked } = this.state;
  
      return (
        <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:"row",marginLeft:-10}}>
        
       <RadioButton
        color="rgba(31, 133, 255, 1)"
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked: 'first' }); }}
       
       />
       <Text style={{color:"rgba(31, 133, 255, 1)",fontWeight:"500",fontFamily:"Roboto",marginTop:6,fontSize:16}}>Present</Text>
       </View>

       <View style={{flexDirection:"row",marginLeft:55}}>
     
       <RadioButton
         value="second"
         color="rgba(241, 85, 104, 1)"
         status={checked === 'second' ? 'checked' : 'unchecked'}
         onPress={() => { this.setState({ checked: 'second' }); }}
         
       />
        <Text style={{color:"rgba(241, 85, 104, 1)",fontWeight:"500",fontFamily:"Roboto",marginTop:6,fontSize:16}}>Absent</Text>
      </View>

     </View>
      );
    }
  }

  
  
  
  export default Attendence;