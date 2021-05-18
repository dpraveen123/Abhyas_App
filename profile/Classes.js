import React,{useState} from 'react';
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
import Modal from 'react-native-modal';
import Newone from './new1'
import { connect } from 'react-redux';
import store from '../redux'
import DropDownItem from '../react-native-drop-down-item';
import functions from '@react-native-firebase/functions';
import auth from '@react-native-firebase/auth';
// import Edit from '../assets/edit';
const IC_ARR_DOWN = require('../assets/dropup.png');
const IC_ARR_UP = require('../assets/dropdown.png');
const editpickup =require('../assets/Editpick.png');
const editpickdown =require('../assets/Editpick.png');
import firestore from '@react-native-firebase/firestore';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import ChooseClass from '../ClassesDesign/ChooseClass'
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
  darray1:[],
  drop:[],
  drop1:[],
  
  }
}
componentDidMount=()=>{
  // console.log(store.getState().authdetails," i am from clasess.js")
 var details={
   uid:store.getState().authdetails.uuid
 }
functions().httpsCallable('getClass')(details)
.then(response => {
  // console.log("sucsesfully getting all classess bro",response.data)
  this.state.data=response.data;
  this.setState({data:this.state.data})
  // console.log(this.state.data)
  this.state.data.map((i,l)=>{
    // console.log("i and l are",i,l)
    this.state.darray[l]=false;
    this.state.drop[l]=false;
 })
//  console.log(this.state.darray,"is darray yy")
});
  //  firestore().collection('Schools').doc(store.getState().authdetails.uuid).collection('classes').get()
  //  .then((querySnapshot) =>{
  //   querySnapshot.forEach(documentSnapshot => {
  //     console.log('User ID: ',documentSnapshot.id, documentSnapshot.data());
  //   });
  //  })
}
openDrop=(i)=>{
  // console.log(i,"drop clicked")
  this.state.darray[i]=!this.state.darray[i];
  // this.setState({darray:this.state.darray})
  this.state.darray1=this.state.darray;
  this.setState({darray1:this.state.darray1})
  // console.log(this.state.darray1)
}
Drop=(i)=>{
  // console.log(i,"drop clicked")
  this.state.drop[i]=!this.state.drop[i];
  this.state.drop1=this.state.drop;
  this.setState({drop1:this.state.drop1})
  // console.log(this.state.drop1)
}
  render() {
    return (
      <View >
                <View style={{}}>
                <ModalTester props={this.state.data}/>
                </View>

      {/* // <SafeAreaView style={{backgroundColor:'white' }}> */}
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
               
                <TouchableOpacity onPress={()=>{
                    this.Drop(i)
                    this.openDrop(i)

                }}
                >
                    <Image source={
                        
                        this.state.drop1[i]===true?editpickdown:editpickup
                    } style={{width:10,height:20}}></Image>
                        
                    </TouchableOpacity>
                </View>

                           {/* .................. 3 dots icon................ */}
                <View style={{width:'39.5%',backgroundColor:'white',position:"absolute",marginHorizontal:85,marginVertical:10}}>
                  {

                    
                        <View>
                             {
                                 this.state.drop1[i]===true?<View>
                                 <View style={{marginTop:-45,marginLeft:-50,}}>
                         <Card >
      
                         <TouchableOpacity onPress={()=>{ 
                           this.openDrop(i)
                          //  this.Drop(i)
                         }} >
                         <Text style={{fontWeight:"bold",fontFamily:"Roboto",fontSize:18,borderWidth:1,borderColor:"#E1E8ED",marginLeft:1}}>Edit Class</Text>
                         </TouchableOpacity>
                        
                         <TouchableOpacity>
                         <Text style={{fontWeight:"bold",fontFamily:"Roboto",fontSize:18,marginLeft:1,borderWidth:1,borderColor:"#E1E8ED"}}>Delete Class</Text>
                         </TouchableOpacity>
                         <TouchableOpacity>
                         <Text style={{fontWeight:"bold",fontFamily:"Roboto",fontSize:18,borderWidth:1,borderColor:"#E1E8ED",marginLeft:1}}>Add Section</Text>
                         </TouchableOpacity>
                         </Card>

                         </View>
                                 </View>:<View>
                                 </View>

                             }
                         </View>
             }

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
                                 <View style={{marginTop:12,marginLeft:10,flexDirection:"row",justifyContent:"space-between"}}>
                         <Text style={{fontSize:16,fontWeight:'400',height:30}}>Section {k}</Text>
                         {/* ....................Edit and Delete class view.............. */}
                                
                         <View>
                         {
                                 this.state.drop1[i]===true?<View style={{flexDirection:"row",paddingLeft:90}}>
                         <TouchableOpacity>
                         <Text style={{color:"#657786"}}> Edit</Text>
                         </TouchableOpacity>
                         <TouchableOpacity>
                         <Text style={{color:"#657786",paddingStart:10}}> Delete</Text>
                         </TouchableOpacity>
                         
                         </View>:<View>
                             </View>
                      }
                         </View>

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

                </ScrollView>
     
                {/* ..................floating button .................. */}
                {/* <View style={{position:'absolute', marginTop: 567, marginLeft: 104}}>
               
               
               {/* <TouchableOpacity style={{width:153,height:48}} onPress={() => 
                 Alert.alert("Adding new class")}underlayColor='#fff'>
                 <Text style={styles.submitText}> + Add new Class </Text>
                </TouchableOpacity> */}
              {/* </View> */} 
              
                </View>
                
                

                
    
    
    
    );
  }
}
const { width, height } = Dimensions.get("screen");
  class ModalTester extends React.Component{
    constructor(props){
      super(props);
      this.state={
        isModalVisible:false,
        classes:[],
        availableClass:[],
        data:[],
        intialClasses:['1st class','2nd class','3rd class','4th class','5th class','6th class','7th class','8th class','9th class','10th class']
      }
    }
    toggleModal=()=>{
      this.setState({isModalVisible:!this.state.isModalVisible})
    }
    
    componentDidMount=()=>{
      var details={
        uid:store.getState().authdetails.uuid
      }
      functions().httpsCallable('getClass')(details)
.then(response => {
  // console.log("sucsesfully getting all classess bro",response.data)
  this.state.data=response.data;
  this.setState({data:this.state.data})
  // console.log(this.state.data,"i am from modal tester")
  this.state.data.map(l=>{
      this.state.availableClass=this.state.availableClass.concat(l.class)
      this.setState({availableClass:this.state.availableClass})
  })
  // console.log(this.state.availableClass,"available")
  this.state.intialClasses.map(l=>{
    var n=this.state.availableClass.includes(l)
    if(!n){
      console.log(n,l)
       this.state.classes=this.state.classes.concat(l)
    this.setState({classes:this.state.classes})
    }
  })
  console.log(this.state.classes,"thse are not added")

//  console.log(this.state.darray,"is darray yy")
});
     
    }
    render(){
      return(
         <View style={{elevation:10,alignItems:'center',}}>
          <TouchableOpacity style={styles.button} onPress={this.toggleModal}>
                <View>
                    <Text style={styles.Class}>+ Add new Class</Text>
                </View>
            </TouchableOpacity>
           <Modal isVisible={this.state.isModalVisible}>
             <TouchableOpacity onPress={this.toggleModal} style={{width:360,height:190,marginLeft:-20}}>
             </TouchableOpacity>
           <ChooseClass props={{class:this.state.classes,modal:this.toggleModal}}/>
          </Modal>
      </View>
      )
    }
  }
    
  

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
},
button:{
  backgroundColor:"#1F85FF",
  width:152,
  height:48,
  borderRadius:40,
  justifyContent:'center',
  // display:'flex',
  // position:'absolute',
  // left:30,
  // top:50
},
Class:{
  color:'white',
  fontFamily:'Roboto',
  fontWeight:'500',
  fontSize:16,
  marginLeft:16
}
})
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

                     