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
import functions from '@react-native-firebase/functions';
import auth from '@react-native-firebase/auth';
// import Edit from '../assets/edit';
const IC_ARR_DOWN = require('../assets/dropup.png');
const IC_ARR_UP = require('../assets/dropdown.png');
import firestore from '@react-native-firebase/firestore';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
// import ModalTester from '../ClassesDesign/AddNewClassesPage'
// import store from '../redux'
// import Dropdown from '../profile/drop';

class AllClasses extends React.Component {

 constructor(props) {
   super(props)
 
   this.state = {
    
  artists: [
    {
      image: Classno,
      id: 1,
      name: "1st Class ",
     section:"4 sections",
     color1:"#9A56E1",
     color2:"#F879C7"
    },
    {
      image: Classno,
      id: 2,
      name: "2nd Class ",
     section:"4 sections",
     color1:"#F28436",
     color2:"#FEE468"
    },
    {
      image: Classno,
      id: 3,
      name: "3rd Class",
     section:"4 sections",
     color1:"#3890FA",
     color2:"#57D5C3"
    },
    {
        image: Classno,
        id: 4,
      name: "4th Class ",
     section:"4 sections",
     color1:'#E0435E',
     color2:'#FF7B93'
      },
      {
        image: Classno,
        id: 5,
      name: "5th Class ",
     section:"4 sections",
     color1:'#9E37CA',
     color2:'#D92E9F'
      },
      {
        image: Classno,
        id: 6,
      name: "6th Class",
     section:"4 sections",
     color1:'#126DD8',
     color2:'#50B8FF'
      },
      {
        image: Classno,
        id: 7,
      name: "7th Class ",
     section:"4 sections",
     color1:"#9A56E1",
     color2:"#F879C7"
      },
      {
        image: Classno,
        id: 8,
      name: "8th Class ",
     section:"4 sections ",
     color1:"#9A56E1",
     color2:"#F879C7"
      },
      {
        image: Classno,
        id: 9,
        name: "9th Class ",
       section:"4 sections",
       color1:"#9A56E1",
       color2:"#F879C7"
      },
      {
        image: Classno,
        id: 10,
        name: "10th Class ",
       section:"4 sections",
       color1:"#9A56E1",
       color2:"#F879C7"
      },
     
  ],
  data:[],
  darray:[],
  darray1:[]
  }
}
componentDidMount=()=>{
  console.log(store.getState().authdetails," i am from clasess.js")
 var details={
   uid:store.getState().authdetails.uuid
 }
functions().httpsCallable('getClass')(details)
.then(response => {
  // console.log("sucsesfully getting all classess bro",response.data)
  this.state.data=response.data;
  this.setState({data:this.state.data})
  console.log(this.state.data)
  this.state.data.map((i,l)=>{
    // console.log("i and l are",i,l)
    this.state.darray[l]=false;
 })
 console.log(this.state.darray,"is darray yy")
});
  //  firestore().collection('Schools').doc(store.getState().authdetails.uuid).collection('classes').get()
  //  .then((querySnapshot) =>{
  //   querySnapshot.forEach(documentSnapshot => {
  //     console.log('User ID: ',documentSnapshot.id, documentSnapshot.data());
  //   });
  //  })
}
openDrop=(i)=>{
  console.log(i,"drop clicked")
  this.state.darray[i]=!this.state.darray[i];
  // this.setState({darray:this.state.darray})
  this.state.darray1=this.state.darray;
  this.setState({darray1:this.state.darray1})
  console.log(this.state.darray1)
}
  render() {
    return (
      // <SafeAreaView style={{backgroundColor:'white' }}>
       <ScrollView style={{backgroundColor:'whitesmoke'}}>
       {/* <ModalTester/> */}
                {/* .............cards.............................                */}
               
                {
             this.state.data.map((l,i)=>{
                 return(
                   <View style={{borderRadius:15}}>
                   <Card
                   containerStyle={{borderRadius:8}}
                   >
              <View style={{height:70}}>
                  {/* <Text>hlooo</Text> */}
                 <View style={{flexDirection:'row'}}>
                 <View style={{width:64,height:64,backgroundColor:'whitesmoke'}}></View>
               <View style={{marginLeft:16}}>
                   <Text style={{fontSize:20,lineHeight:28}}>{l.class}</Text>
                   <Text style={{color:'#AAB8C2',fontSize:14,lineHeight:28,marginTop:0}}>{l.sections.length} Sections</Text>
               </View>
                <TouchableOpacity style={{justifyContent:'center',marginLeft:80}}
                onPress={()=>{
                    this.openDrop(i)
                }}
                >
                <View >
                    <Image source={
                        
                        this.state.darray1[i]===true?IC_ARR_DOWN:IC_ARR_UP
                    } style={{width:10,height:10}}></Image>
                </View>
                </TouchableOpacity>
                <View style={{justifyContent:'center',marginLeft:14,width:1,height:'100%',borderWidth:0.5,borderColor:'#E1E8ED'}}>
               {/* <Text>hlo</Text> */}
                </View>
                <View style={{justifyContent:'center',marginLeft:14}}>
               {/* <Text>hlo</Text> */}
               <Edit/>
                </View>
                 </View>
           
              </View>
              
          </Card>
         
              <View style={{marginLeft:15,width:'91.5%',backgroundColor:'white'}}>
                  {
                      l.sections.map(k=>{
                          return(
                    
                        <View>
                             {
                                 this.state.darray1[i]===true?<View>
                                 <View style={{marginTop:12,marginLeft:10}}>
                         <Text style={{fontSize:16,fontWeight:'400',height:30}}>Section {k}</Text>

                         </View>
                                 </View>:<View>
                                 </View>

                             }
                         </View>
                           )
                      })
                  }

              </View>
              
                   </View>
                 )
             })
         }


                {/* ................uptohere................................. */}
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
gradient:{
  width:64,
  height:64,
  borderRadius:4,
  justifyContent:'center',
  marginLeft:-20
},
name:{
  color:'white',
  fontSize:32,
  paddingLeft:25
}})
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


{/* <View style={{ paddingLeft:280,paddingTop:10,position:'absolute',flexDirection:'row', justifyContent: 'space-between'}}>
                     <Editpick 
                    //  style={{paddingTop:100}}
                     />
                     </View> */}