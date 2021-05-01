import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,Dimensions,ScrollView,SafeAreaView,AppRegistry,
  TextInput,Button,Alert,title,TouchableHighlight} from 'react-native';
import {Card} from'react-native-elements';
import {Picker} from '@react-native-picker/picker';
// import Drop from '../assets/dropdown';
import Classno from '../Images/Classno'
import Edit from '../assets/edit';
import Arr from '../assets/line';
import Pick from './Picker';
import Editpick from './Editpick';

import Newone from './new1'
import { connect } from 'react-redux';
import store from '../redux'
import DropDownItem from '../react-native-drop-down-item';

import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
// import Dropdown from '../profile/drop';





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
      // <SafeAreaView style={{backgroundColor:'white' }}>
          
    
       <ScrollView>

           
       
       
           
            
          
                {this.state.artists.map((artist)=>{
                  return(
                    <Card>

       <View style={{flexDirection:'row',borderRadius:80, margin:12}}>

                    <View
               style={{
                 backgroundColor: "white",
                 borderRadius: 20,
                 flex: 1,
                 width:300,heigth:45,marginLeft:-10}}
                > 
      
      

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
                     <View >
                     {/* <Editpick/> */}
                     <MenuProvider>
    <View>
        <Menu style={styles.Menu} onSelect={value => {
          if(value===1){
            // return(
            //   <Newone/>
            // )
            this.props.changevisible()
            console.log("visible is",store.getState().changecontentvisbile)
          }
        }}>
  {/* <MenuTrigger text='Select option' /> */}
  <MenuTrigger  style={{width:20,height:20,backgroundColor:'red'}}>
    <Edit />
    {/* <Drop /> */}
  </MenuTrigger>
  
  <MenuOptions   >
    <MenuOption value={1}  text='Edit Class'  />
    <MenuOption value={2}  text='Delete Class' />
    <MenuOption value={3}  text='Add Section'/>
    {/* <MenuOption value={4}  text='Add Section'/> */}

  </MenuOptions>
</Menu>
    </View>
</MenuProvider>
                     </View>
                    </View> 
    
                      <Newone />
                      
                
                 
                </View>
                   
                   
                </View>
                </Card>
                   
                  
                  )
                }

            
            

              
                   )}
                  
                   
      
      
                 
                
                
                
               
                <View style={{position:'absolute', marginTop: 600, marginLeft: 125}}>
               
               
                <TouchableHighlight style={styles.submit} onPress={() => 
                  Alert.alert("Adding new class")}underlayColor='#fff'>
                  <Text style={styles.submitText}> + Add new Class </Text>
                 </TouchableHighlight>

               </View>
                </ScrollView>

                
    
    
    
    );
  }
}
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 1,
  },
  Menu:{
   marginLeft:250,
    marginBottom:70,
    // paddingTop:20,
    // marginLeft:20,
    elevation:5,
//     height:300,
// width:300,
// position:'absolute'
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




const mapDispatchToProps = (dispatch) => {
  return {
 
  //   // dispatching plain actions
  //   increment: () => dispatch({ type: 'INCREMENT' }),
  //   decrement: () => dispatch({ type: 'DECREMENT' }),
  //   reset: () => dispatch({ type: 'RESET' }),
  // details:(l)=>dispatch({type:'authdetails',payload:l})
  changevisible:()=>dispatch({type:'changevisible',payload:''})
  }
}
export default connect(null,mapDispatchToProps)(AllClasses)


