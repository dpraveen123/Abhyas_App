import React, { Component } from 'react';
import { Touchable, TouchableOpacity } from 'react-native';
import { Platform, StyleSheet, Text, View, ScrollView, Image ,Dimensions} from 'react-native';
import DropDownItem from '../react-native-drop-down-item';
import {Card} from 'react-native-elements';
import New from './new';
import { connect } from 'react-redux';
import store from '../redux'
import Classno from '../Images/Classno'
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import Edit from '../assets/edit';
// var com=require('../react-native-drop-down-item/index.js')
// console.log(com.default,"where is these bri")
var x=0;
const IC_ARR_DOWN = require('../assets/dropup.png');
const IC_ARR_UP = require('../assets/dropdown.png');
var artists= [
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

    },]
    // {
    //   image: Classno,
    //   id: 3,
    //   name: "3rd Class",
    //  section:"4 sections"
    // },
    // {
    //     image: Classno,
    //     id: 4,
    //   name: "4th Class ",
    //  section:"4 sections"
    //   },
    //   {
    //     image: Classno,
    //     id: 5,
    //   name: "5th Class ",
    //  section:"4 sections"
    //   },
    //   {
    //     image: Classno,
    //     id: 6,
    //   name: "6th Class",
    //  section:"4 sections"
    //   },
    //   {
    //     image: Classno,
    //     id: 7,
    //   name: "7th Class ",
    //  section:"4 sections"
    //   },
    //   {
    //     image: Classno,
    //     id: 8,
    //   name: "8th Class ",
    //  section:"4 sections "
    //   },
    //   {
    //     image: Classno,
    //     id: 9,
    //     name: "9th Class ",
    //    section:"4 sections"
    //   },
    //   {
    //     image: Classno,
    //     id: 10,
    //     name: "10th Class ",
    //    section:"4 sections"
    //   },
     
//   ]
 class App extends Component {

    constructor(props){
        super(props);
        this.state={
          isLoading:false,
          dummyData:[
            {name:"Section 1"},
            {name:"Section 2"},
            {name:"Section 3"}
          ],
        };
      }


  render() {
    const{isLoading,dummyData} =this.state;
    // console.log(this.props.onPress,"these ra eth props bro")
    return (
      <View style={styles.container}>      
 <ScrollView >
        {
            artists.map(artist=>{
                return(
                    <View>
                    <DropDownItem
                    contentVisible={false}
                    invisibleImage={
                      IC_ARR_UP
                    }
                    visibleImage={IC_ARR_DOWN}
                    header={
                      <View style={styles.header}>
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
 <Menu style={styles.Menu}>
{/* <MenuTrigger text='Select option' /> */}
<MenuTrigger  style={{width:20,height:20,backgroundColor:'red'}}>
<Edit />
{/* <Drop /> */}
</MenuTrigger>

<MenuOptions   >
<MenuOption value={1}  text='Edit Class' onSelect={()=>{
    // this.props.onPress() 
    this.props.changevisible()
     console.log("visible is",store.getState().changecontentvisbile)
    console.log("here also working bro")}}  />
<MenuOption value={2}  text='Delete Class' />
<MenuOption value={3}  text='Add Section'/>
{/* <MenuOption value={4}  text='Add Section'/> */}

</MenuOptions>
</Menu>
</View>
</MenuProvider>

              </View>
             </View>             
     
         </View>
            
            
         </View>
         </Card>
            
                    </View>
                    }
                    >

                       <View>
            {
              dummyData.map((item,index) =>
              {

                {/* x=x+1;
                console.log("hlooooo",x) */}
                return(
                  <View
                  // onPress={} 
                  style={{
                    paddingVertical:1,
                    paddingHorizontal:1,
                    flexDirection:"row"
                  }}>


                      <TouchableOpacity style={styles.appButtonContainer}>
                    <Text style={{fontSize:15,fontWeight:"bold"}} >{item.name}</Text>
                    </TouchableOpacity>
                   
                  
                     </View> 
                 
                )
              })
            }
            
             </View>



                  </DropDownItem>
                    </View>
                )
            })
        }

        </ScrollView>
      </View>
    );
  }
}
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    elevation:5,
    backgroundColor:'white'
    // position:"absolute"
    
  },
  header: {
//   paddingVertical: 8,
//     paddingTop:10,
//     paddingBottom:10,
//     marginTop:5,
// position:'absolute',
// left:100,
  },

   appButtonContainer: {
  
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 5,

    
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
  export default connect(null,mapDispatchToProps)(App)