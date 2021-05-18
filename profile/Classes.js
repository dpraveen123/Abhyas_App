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
import { Input } from 'native-base';
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

      [ 
        {
        class: '1st class',
        color1:"#9A56E1",
        color2:"#F879C7"
      },
      {
        class: '2nd class',
        color1:"#F28436",
       color2:"#FEE468"
      },
      {
        class: '3rd class',
        color1:"#3890FA",
       color2:"#57D5C3"
      },
      {
        class: '4th class',
        color1:'#E0435E',
       color2:'#FF7B93'
      },
      {
        class: '5th class',
        color1:'#9E37CA',
        color2:'#D92E9F'
      },
      {
        class: '6th class',
        color1:'#126DD8',
        color2:'#50B8FF'
      },
      {
        class: '7th class',
        color1:'#E0435E',
        color2:'#FF7B93'
      },
      {
        class: '8th class',
        color1:"#3890FA",
        color2:"#57D5C3"
      },
      {
        class: '9th class',
        color1:"#F28436",
        color2:"#FEE468"
      },
      {
        class: '10th class',
        color1:"#9A56E1",
        color2:"#F879C7"
       
      },

      ]
     
  ],
  data:[],
  darray:[],
  darray1:[],
  drop:[],
  drop1:[],
  modalVisible: false,
  
  }
}
setModalVisible = () => {
  console.log("modal opened");
  this.setState({ modalVisible:!this.state.modalVisible });
  // console.log("modal closed");
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
  this.setState({drop1:this.state.drop1});
  
  // console.iflog(this.state.drop1)
}
//  changeButtonColor(){
//   if(this.buttonColor === "white"){
//     this.buttonColor = "green";
//   }
//   else{
//     this.buttonColor = "red";
//   }
// }
  render() {
    const { modalVisible } = this.state;
    return (
      <View style={{flex:1,marginTop:-20}} >
                {/* <View style={{}}>
                <ModalTester props={this.state.data}/>
                </View> */}

      {/* // <SafeAreaView style={{backgroundColor:'white' }}> */}
       <ScrollView style={{backgroundColor:'whitesmoke'}}>
       {/* <ModalTester/> */}
                {/* .............cards.............................                */}
               
                {
             this.state.data.map((l,i)=>{
                 return(
                   <View style={{borderRadius:15}}>
                     
                   <Card
                   containerStyle={{borderRadius:8,}}
                   >
              <View style={{height:70}}>
            
                 <View style={{flexDirection:'row'}}>
                 <View style={{width:64,height:64,backgroundColor:'whitesmoke'}}>
                 <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={["#3890FA","#57D5C3"]} style={styles.gradient1}>
                   <Text style={styles.name}>1</Text>
                              
                            </LinearGradient>
                 
                 </View>
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
              
                </View>
                <View style={{justifyContent:'center',marginLeft:14}}>
               
                <TouchableOpacity onPress={()=>{
                    this.Drop(i)
                    }}>

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
                        <View>
                         <TouchableOpacity onPress={()=>{ 
                            
                           this.openDrop(i) 
                         
                        
                      
                         }} >
                         <Text style={{fontWeight:"500",fontFamily:"Roboto",fontSize:18,marginLeft:0}}>Edit Class</Text>
                         </TouchableOpacity>
                          
                         
                        
                         <TouchableOpacity>
                         <Text style={{fontWeight:"500",fontFamily:"Roboto",fontSize:18,marginLeft:0}}>Delete Class</Text>
                         </TouchableOpacity>

                        
                         <TouchableOpacity onPress={() => this.setModalVisible(true)} >
                         <Text style={{fontWeight:"500",fontFamily:"Roboto",fontSize:18,marginLeft:0}}>Add Section</Text>
                         </TouchableOpacity>
                      
                             {/* ..............................modal .....................................*/}
                        
                         <Modal isVisible={modalVisible}>
                  
                      <TouchableOpacity onPress={this.setModalVisible} 
                     style={{width:400,height:200}} >
                      </TouchableOpacity>
            
                   <View style={styles.modalview}>
                  
                   <Text style={{marginLeft:22,fontWeight:"900",fontSize:20,fontFamily:"Roboto"}}>Add Section</Text>
                   <View style={{marginTop:18}} >
                   <Text style={{marginLeft:20,fontWeight:"800",fontSize:14,fontFamily:"Roboto",marginBottom:-9,}}>Enter Section Name</Text>
                   <TextInput style={{height: 40,margin:15,borderWidth: 1,fontFamily:"Roboto",fontWeight:"500",borderColor:"#E1E8ED"}}  placeholder="Add section"  />
                   </View>
                  </View>

                   <View style={styles.footer}>
                  <TouchableOpacity style={styles.button1}><Text style={styles.buttonText}>Edit Section</Text></TouchableOpacity>
                </View>
          
                </Modal>
                         


                </View>

               
             

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
                                 this.state.darray1[i]===true ?<View>
                                  
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
                 {/* <View style={{position:"absolute",marginTop:550,marginLeft:100}}>
                <ModalTester props={this.state.data}/>
                </View> */}

                {/* ................uptohere................................. */}

                </ScrollView>


                <View style={{position:"absolute",marginTop:550,marginLeft:110}}>
                <ModalTester props={this.state.data}/>
                </View>

                {/* <View style={{}}>
                <ModalTester props={this.state.data}/>
                </View> */}
     
               
              
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
         <View style={{elevation:10,alignItems:'center'}}>
          <TouchableOpacity style={styles.button} onPress={this.toggleModal}>
                <View >
                    <Text style={styles.Class}>+ Add new Class</Text>
                </View>
            </TouchableOpacity>
           <Modal isVisible={this.state.isModalVisible}>
             <TouchableOpacity onPress={this.toggleModal} style={{width:360,height:300,marginLeft:-20}}>
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
    elevation:5,

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

footer: {
  // 
  position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  bottom: -20,
  
  flexDirection:'row',
  height:80,
  alignItems:'center',
  marginLeft:5,
  
},
modalview:{
   
    backgroundColor:'white',
        height:550,
        width:357,
        // marginTop:80,
        marginLeft:-17,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        paddingTop:20
 
},
modal:{
  marginLeft:30,
  fontWeight:'600',
  fontSize:20,


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
  
},
button1:{
  backgroundColor:'#1F85FF',
  paddingBottom:8,
  borderRadius: 4,
  width:308,
  height:40 

},
gradient1:{
  width:64,
  height:64,
  borderRadius:4,
  justifyContent:'center',
  marginLeft:-1
},
buttonText:{
  color:'white',
  alignSelf:'center',
  fontSize:16,
  fontFamily:"Roboto",
  fontWeight: "bold",
  paddingLeft:9,
  paddingTop:10
  
},
Class:{
  color:'white',
  fontFamily:'Roboto',
  fontWeight:'500',
  fontSize:16,
  marginLeft:16
},
name:{
  color:'white',
  fontSize:32,
  paddingLeft:25,
  fontWeight:"500",
  fontFamily:"Roboto"

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




                     