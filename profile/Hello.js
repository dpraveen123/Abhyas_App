import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,Dimensions,ScrollView,SafeAreaView,TextInput,Button,Alert,title,TouchableHighlight } from 'react-native';
// import pic from '../images/pp.jpg';
import pic from '../images/pp.jpg'
import Svgpages from '../assets/Svg';
import Search from '../assets/Search';
import Fil from '../assets/fil';
import Addclass from './Addclass';
import { Icon } from 'react-native-elements'




class Hello extends React.Component {
  constructor(props)
  {
  super(props);
  }
 
  
  
  
  state={
  artists: [
    {
      image: pic,
      id: 1,
      skills: "subject",
      name: "Mike ",
      student:"ASSIGN class"
    },
    {
      image: pic,
      id: 2,
      skills: "subject",
      name: "Aldrew ",
      student:"ASSIGN class"

    },
    {
      image: pic,
      id: 3,
      skills: "Maxel",
      name: "Mike ",
      student:"ASSIGN class"
    },
    {
        image: pic,
        id: 4,
        skills: "subject",
      name: "Cleo ",
      student:"ASSIGN class"
      },
      {
        image: pic,
        id: 5,
        skills: "subject",
      name: "Arpret ",
      student:"ASSIGN class"
      },
      {
        image: pic,
        id: 6,
        skills: "subject",
      name: "Anderson",
      student:"ASSIGN class"
      },
      {
        image: pic,
        id: 7,
        skills: "subject",
      name: "Angela ",
      student:"ASSIGN class"
      },
      {
        image: pic,
        id: 8,
        skills: "subject",
      name: "Malk ",
      student:"ASSIGN class "
      },
      {
        image: pic,
        id: 9,
        skills: "subject",
        name: "Mike ",
        student:"ASSIGN class"
      },
      {
        image: pic,
        id: 10,
        skills: "subject",
        name: "Saint ",
        student:"ASSIGN class"
      },
      {
        image: pic,
        id: 11,
        skills: "subject",
        name: "Anderson ",
        student:"ASSIGN class"
      },
      {
        image: pic,
        id: 12,
        skills: "subject",
        name: "Anderson ",
        student:"ASSIGN class"
      },
  
  ]
  }


  render() {
   

    
    return (
      <SafeAreaView style={{backgroundColor:'white' }}>
    

       <View style={{justifyContent:'center',paddingHorizontal:15,flexDirection:'row',paddingTop:9}}>
         
       <View style={{height:50,flexDirection:'row',padding:5,alignItems:'center',borderRadius:30,paddingLeft:30, flex: 1,backgroundColor:'#f5f8fa'}}>
     
                   
       
         <Search />
         <TextInput placeholder="Search Teachers" style={{fontSize:14, marginLeft:15,borderRadius:15}}/>
         </View>
         <View style={{ height:50,backgroundColor:"white",flexDirection:'row',padding:5,alignItems:'center',borderRadius:30,paddingRight:5}}>
         {/* <Fil /> */}
         <Image style={styles.Fil}source={require('../images/Filter.png')}/>
         <TouchableOpacity  > 
                  <Text style={{fontWeight:"bold",color:"#1e90ff",fontSize:15}}> Filter</Text>
                </TouchableOpacity> 
               

               
                  
         
         </View>
       </View>
       
      

      
      
       <ScrollView>
       <View style={{ borderRadius:80, margin:12}}>
         
       <Text style={{fontWeight: "bold",paddingLeft:30}}>All Teachers</Text>
       
       <View style={{flexDirection:'row'}}>
           
            
           <View
               style={{
                 backgroundColor: "white",
                 borderRadius: 20,
                 flex: 1,
                 width:300,heigth:45,marginLeft:-10}}>
                {this.state.artists.map(artist =>  (
                    <View >
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
                        }}>
                        <Text >{artist.name}</Text>
                        
                        <Text style={{ fontSize: 14, color: "#A7A7A7" }}>{artist.skills} </Text>
                        <Text style={{ fontSize: 14, color: "#A7A7A7" }}>{artist.student} </Text>
                          
                        
                      </View>
                     </View>

                     <View style={{ paddingLeft:100,paddingTop:15}}>
                      <View>
                      <Svgpages  />
                       </View>
                    </View>
      
                   </View>
         

       </TouchableOpacity>

       </View> ))}
      
      
                 
                </View>
                
                
                </View>
                </View>
               
                </ScrollView>
                
                <View style={{ position:'absolute',marginTop: 650, marginLeft: 104}}>
               
               
                <TouchableHighlight style={styles.submit} onPress={() => this.props.navigation.navigate('Addclass')} underlayColor='#fff'>
                  <Text style={styles.submitText}>+ Add Class</Text>
                 </TouchableHighlight>

               </View>
                
                
                
  
            
                 
                </SafeAreaView>
                
    
    
    
    );
  }
}
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
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
  submit:{
    width: 152,
     height: 48,
    
  },
  Fil:{
    width: 30,
    height:30,
    resizeMode: 'stretch'

  },
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




export default Hello;

