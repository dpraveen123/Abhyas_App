import React,{useState} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,Dimensions,ScrollView,SafeAreaView,AppRegistry,
  TextInput,Button,Alert,title,TouchableHighlight} from 'react-native';
import {Card} from'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import Pick from '../profile/Picker';
import Modal from 'react-native-modal';
import Newone from '../profile/new1'
import { connect } from 'react-redux';
import store from '../../../../redux'
import functions from '@react-native-firebase/functions';
import auth from '@react-native-firebase/auth';
const IC_ARR_DOWN = require('../../../assets/Images/dropup.png');
const IC_ARR_UP =  require('../../../assets/Images/dropup.png');
const editpickup =require('../../../assets/Images/Editpick.png');
const editpickdown =require('../../../assets/Images/Editpick.png');
import firestore from '@react-native-firebase/firestore';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import LinearGradient from 'react-native-linear-gradient';
import AddNewClass from './AddNewClass'
import styles from './AllClassesCss'
class AllClasses extends React.Component {
 class=""
 section=""
 constructor(props) {
   super(props)
   console.log(props);
   this.state = {
    viewmodel:false,
    viewmodalSection:false,
    class:'',
    sec:' ',
    colors:[ 
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
     
    }
    ] ,
  data:[],
  darray:[],
  darray1:[],
  drop:[],
  drop1:[],
  drop2:[],
  modalVisible: false,
  loaderOfAddSection:0,
addSectionName:'',
  
  }
}
uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}
addSection=(l,i)=>{
this.setState({loaderOfAddSection:1})
     console.log("for add section",l,i,this.state.addSectionName)
     var n=l.sections.includes(this.state.addSectionName)
     if(n){
       alert("section already exist")
       this.setState({loaderOfAddSection:0})
     }else{
       var a={}
       a[this.state.addSectionName]=this.uuidv4()
       var details={
        className:l.class,
        sections:a,
        uid:store.getState().authdetails.uuid,
    }
    console.log(details,"these are the details for add class")
    functions()
   .httpsCallable('addingClass')(details)
   .then(response => {
     console.log("sucsesfully added a new section bro",response.data)
     this.loadData()
     this.setModalVisible();
  this.makeAllFalseOfEditView()
  this.openDrop(i)
  this.setState({loaderOfAddSection:0})
  alert("sucsefully added your section")

         //  this.props.props.modal();
   });
      //  firestore().collection('Schools').doc(store.getState().authdetails.uuid).collection('classes').doc(l.class).set({
      //    sections:a
      //  },{merge:true})
      // console.log(store.getState().authdetails.uuid)
     }

}
setModalVisible = () => {

  console.log("modal opened");
  this.setState({ modalVisible:!this.state.modalVisible });
  // this.makeAllFalseOfEditView()
  // console.log("modal closed");
}

loadData=()=>{
  var details={
    uid:store.getState().authdetails.uuid
  }
  // console.log("details are",details)
 functions().httpsCallable('getClass')(details)
 .then(response => {
  //  console.log("sucsesfully getting all classess bro",response.data)
   this.state.data=response.data;
   this.setState({data:this.state.data})
  //  console.log(this.state.data)
   this.state.data.map((i,l)=>{
     // console.log("i and l are",i,l)
     this.state.darray[l]=false;
     this.state.drop[l]=false;
     this.state.drop1[l]=false;
     this.state.drop2[l]=false;
    //  this.setState({darray:this.state.darray,drop:this.state.drop,})
  })
 //  console.log(this.state.darray,"is darray yy")
 });
}
componentDidMount=()=>{

  
  console.log("checkinggg okkk")
 
  // console.log(store.getState().authdetails," i am from clasess.js")
   this.loadData()
  //  firestore().collection('Schools').doc(store.getState().authdetails.uuid).collection('classes').get()
  //  .then((querySnapshot) =>{
  //   // querySnapshot.forEach(documentSnapshot => {
  //   //   console.log('User ID: ',documentSnapshot.id, documentSnapshot.data());
  //   // });
  // //   for (const [key, value] of Object.entries(l.data().students).sort((a, b) => a[0].localeCompare(b[0]))) {
  // //     // console.log(`${key}: ${value}`);
  // //     // this.state.data=this.state.data.concat(value)
  // //     // this.setState({data:this.state.data})
  // //     x=x.concat(value)
  // // }  
  // // console.log("x is ",x)
  //  })
}
openDrop=(i)=>{
  // console.log(i,"drop clicked")
  this.state.darray[i]=!this.state.darray[i];
  this.setState({darray:this.state.darray})
  this.state.darray1=this.state.darray;
  this.setState({darray1:this.state.darray1})


  // ...............edit and delete false................
  this.state.drop2[i]=false;
  this.setState({drop2:this.state.drop2})
}
Drop=(i)=>{
  // console.log(i,"drop clicked")
  this.state.drop[i]=!this.state.drop[i];
  this.state.drop1=this.state.drop;
  this.setState({drop1:this.state.drop1});
  // console.iflog(this.state.drop1)
}
 openEditView=(i)=>{
   this.state.drop1[i]=!this.state.drop1[i]
   this.setState({drop1:this.state.drop1})
 }
 makeAllFalseOfEditView=()=>{
   this.state.drop1.map((l,i)=>{
    this.state.drop1[i]=false;
    this.setState({drop1:this.state.drop1})
   })
 }
//  changeButtonColor(){
//   if(this.buttonColor === "white"){
//     this.buttonColor = "green";
//   }
//   else{
//     this.buttonColor = "red";
//   }
// }
editClassClicked=(i)=>{ 
  
  console.log('edit pressed func'),
  this.state.drop2[i]=true;
  this.setState({drop2:this.state.drop2})
  // this.openDrop(i)
  // opening drop jere.................
  this.state.darray[i]=true;
  // this.setState({darray:this.state.darray})
  this.state.darray1=this.state.darray;
  this.setState({darray1:this.state.darray1})

    this.makeAllFalseOfEditView()

}
ModalTesterSec=()=>{
  // console.log("section delete pressed")
  this.setState({
    viewmodalSection:!(this.state.viewmodalSection)
  })
}
setClassSec=(k,l)=>{
  console.log('ckecking class & sec');
  // this.setState({
  //   sec:k,
  //   class:c
  // })

}
ModalTester=()=>{
  console.log("delete class is pressed")
  this.setState({
    viewmodel:!(this.state.viewmodel)
  })
  // console.log('viewmodel',this.state.viewmodel)
  }
deleteClass=(l,i)=>{
  this.ModalTester();
  this.openEditView(i)
 console.log('delete pressed')
  // console.log("deleting class",l,i)
  var details={
    uid:store.getState().authdetails.uuid,
    class:l.class,
    sections:l.sections
  }
  functions()
  .httpsCallable('deleteClass')(details)
  .then(response => {
    console.log("sucsesffuly eleted the class")
    this.loadData() 
    alert("sucsesfully deleted")
    this.loadData() 

  });
  // this.setState=({
  // isModalVisible:!(this.state.isModalVisible)
  // })
  // firestore().collection('Schools').doc(details.uid).collection('classes').doc(details.class).get().then(l=>{
  //   // console.log('sections and those uids are0',l.data())
  //   var sectionUids=Object.values(l.data().sections)
  //   console.log(sectionUids,"section uids are")
  //   sectionUids.map(l=>{
  //     firestore().collection('Sections').doc(l).set({
  //       isDeleted:true,
  //     },{merge:true}).then(l=>{
  //       console.log("sucsesfully deleted",l)
  //     })
  //   })
  // })
  // firestore().collection('Schools').doc(details.uid).collection('classes').doc(details.class).delete().then(l=>{
  //   console.log("sucsessfully deleted doc",l)
  //   alert("sucsesfully deleted")
  // })

  this.loadData() 
  this.makeAllFalseOfEditView()
 this.loadData() 
}
deleteSection=(l,i,k)=>{
  this.ModalTesterSec()
  // console.log(l,i,k)
  var details={
    uid:store.getState().authdetails.uuid,
    class:l,
    section:k
  }
  functions()
  .httpsCallable('deleteSection')(details)
  .then(response => {
    this.loadData() 
    this.makeAllFalseOfEditView()
    alert("sucsesfully deleted the section")
    // this.openDrop(i)
  });
  // this.makeAllFalseOfEditView()
  // this.loadData() 
  // console.log("details are",details)
  // firestore().collection('Schools').doc(details.uid).collection('classes').doc(details.class).get().then(l=>{
  //   var sectionUid=l.data().sections[details.section]
  //   console.log("section uid issssssss",sectionUid,typeof(sectionUid))
  //   firestore().collection('Sections').doc(sectionUid).set({
  //     isDeleted:true,
  //   },{merge:true}).then(l=>{
  //     console.log("data is",l.data())
  //   }).catch(e=>{console.log("no such doocunmnet")})
    
  // })
  //   firestore().collection('Schools').doc(details.uid).collection('classes').doc(l.class).set({
  //     sections:{[details.section]:firestore.FieldValue.delete()}
  //   },{merge:true})
  this.loadData()

}
  render() {
    const { modalVisible } = this.state;
    return (
      <View style={{flex:1}} >

      {/* // <SafeAreaView style={{backgroundColor:'white' }}> */}
       <ScrollView style={{backgroundColor:'whitesmoke'}}>
       {/* <ModalTester/> */}
                {/* .............cards.............................                */}
               <View style={{paddingBottom:100}}>
                {
             this.state.data.length===0?<View style={{justifyContent:'center'}}><Text>Loading....</Text></View>:<View>
               {
                this.state.data.map((l,i)=>{
                  {/* console.log("l is",l) */}
                  var x=this.state.colors.find(function(post, index) {
         if( l.class==post.class )
      return true;
        });
  {/* console.log("okk",x,"found") */}
  var color1=x.color1;
  var color2=x.color2;
  var classno=parseInt(x.class)
                 return(
                   <View style={{borderRadius:0}} key={i}>
                     
                   <Card
                   containerStyle={styles.cardContainerStyle}
                   >
            
                 <View style={styles.cardStylings}>

                   {/* ..................................card class no(image) container ..................................... */}
                 <View>
                 <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={[color1,color2]} style={styles.gradient1}>
                   <Text style={styles.name}>{classno}</Text>
                              
                            </LinearGradient>
                 
                 </View>
   
   {/* .................................................class names and section names container............................................ */}
    
               <View style={styles.classNamesContainer}>
                   <Text style={styles.className}>{l.class}</Text>
                   <Text style={styles.sectionName}>{l.sections.length} Sections</Text>
               </View>
    {/* .......................................drop down arrow container.................................................... */}
                <TouchableOpacity style={styles.dropdownContainer}
                onPress={()=>{
                 this.openDrop(i)
                }}
                >
                <View >
                    <Image source={
                        this.state.darray1[i]===true?IC_ARR_DOWN:IC_ARR_UP
                    } style={styles.dropdown}></Image>
                </View>
                </TouchableOpacity>
      {/* .................................................thin line container......................................................... */}
                <View style={styles.thinLineContainer}>
              </View>


  {/* .................. 3 dots icon................ */}
                <View style={styles.dotsContainer}>
               <TouchableOpacity onPress={()=>{
                    this.openEditView(i)
                    }}
                    // style={{width:50,height:20}}
                    >
                   <Image source={
                        editpickup
                    } style={styles.dotsImageStylings}></Image>
                    </TouchableOpacity>
                </View>

                <View style={{width:'39.5%',backgroundColor:'white',position:"absolute",marginHorizontal:85,marginVertical:10}}>
                  {
                   <View>
                             {
                                 this.state.drop1[i]===true?<View>
                                 <View style={{marginTop:-45,marginLeft:-50,}}>
                         <Card >
                        <View>
                         <TouchableOpacity onPress={()=>{ 
                          //  this.openDrop(i) 
                          
                         console.log('edit pressed'),
                         this.editClassClicked(i)
                        // this.editClassClicked(i);
                      }} >
                         <Text style={{fontWeight:"500",fontFamily:"Roboto",fontSize:18,marginLeft:0}}>Edit Class</Text>
                         </TouchableOpacity>
                         <TouchableOpacity
                         onPress={()=>
                          // this.deleteClass(l,i)
                          this.ModalTester()
                          // console.log('visibility',this.state.viewmodel)
                        }
                         >
 {/* --------------------------------------------------------------Delete class modal-------------------------------------------------------------------------                           */}
                           <Modal 
                           isVisible={this.state.viewmodel}
                           >
                             <View style={{width:328,height:210,backgroundColor:'white',borderRadius:8,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
                               <View>
                               {/* <Delete/> */}delete icon
                               </View>
                               <View style={{width:250,height:48}}>
                                 <Text style={{fontSize:16,textAlign:'center',lineHeight:24}}>Are you sure you wanted to delete  </Text>
                                 <Text style={{fontSize:16,textAlign:'center',lineHeight:24,fontWeight:'bold'}}>{l.class}?</Text>
                               </View>
                               <View style={{flexDirection:'row'}}>
                               <TouchableOpacity style={{width:136,height:42,borderRadius:8,backgroundColor:'#E1E8ED',justifyContent:'center',alignItems:'center',margin:10}}
                                 onPress={()=>
                                 {this.ModalTester(),
                                 this.openEditView(i)}
                                 }>
                                   <View>
                                     <Text style={{fontSize:16,color:'#657786'}}>cancel</Text>
                                   </View>
                                 </TouchableOpacity>
                                 <TouchableOpacity style={{width:136,height:42,borderRadius:8,backgroundColor:'#1F85FF',justifyContent:'center',alignItems:'center',margin:10}}
                                 onPress={()=>
                                 { this.deleteClass(l,i)}
                                 }>
                                   <View>
                                     <Text style={{fontSize:16,color:'white'}}>Delete</Text>
                                   </View>
                                 </TouchableOpacity>
                               </View>
                             </View>
                           </Modal>


                         <Text style={{fontWeight:"500",fontFamily:"Roboto",fontSize:18,marginLeft:0}}>Delete Class</Text>
                         </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{
                           this.setModalVisible(true)}} >
                         <Text style={{fontWeight:"500",fontFamily:"Roboto",fontSize:18,marginLeft:0}}>Add Section</Text>
                         </TouchableOpacity>
                           {/* ..............................modal .....................................*/}
                        <Modal isVisible={modalVisible} >
                      <TouchableOpacity onPress={this.setModalVisible} 
                     style={{width:400,height:200}} >
                      </TouchableOpacity>
                     <View style={styles.modalview}>
                  <Text style={{marginLeft:22,fontWeight:"900",fontSize:20,fontFamily:"Roboto"}}>Add Section</Text>
                   <View style={{marginTop:18}} >
                   <Text style={{marginLeft:20,fontWeight:"800",fontSize:14,fontFamily:"Roboto",marginBottom:-9,}}>Enter Section Name</Text>
                   <TextInput style={{height: 40,margin:15,borderWidth: 1,fontFamily:"Roboto",fontWeight:"500",borderColor:"#E1E8ED"}}  placeholder="Add section"
                   onChangeText={t=>{this.setState({addSectionName:t})}}
                     />
                   </View>
                  </View>

                   <TouchableOpacity style={styles.footer}
                   onPress={()=>{this.addSection(l,i)}}
                   >
                   <View style={styles.button1}>
                <Text style={styles.buttonText} >{
                    this.state.loaderOfAddSection===0?<Text style={styles.buttonText}>Add Section</Text>:
                      <Text style={styles.buttonText}>Adding Section...</Text>
                   
                  }</Text>
                </View>
                   </TouchableOpacity>
          
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
             {/* </View> */}
             </Card>
           <View style={{marginLeft:15,width:'91.5%',backgroundColor:'white'}}>
                  {
                      l.sections.map((k,k1)=>{
                          return(
                    <View key={k1}>
                             {
                                 this.state.darray1[i]===true ?<View>
                                  
                                 <View style={{marginTop:12,marginLeft:10,flexDirection:"row",justifyContent:"space-between"}}>
                         <Text style={{fontSize:16,fontWeight:'400',height:30}}>Section {k}</Text>
                         {/* ....................Edit and Delete class view.............. */}
                         <View>
                         {
                                 this.state.drop2[i]===true?<View style={{flexDirection:"row",paddingLeft:90}}>
                         <TouchableOpacity 
                         >
                         <Text style={{color:"#657786"}}> Edit</Text>
                         </TouchableOpacity>
                         <TouchableOpacity
                         onPress={()=>{
                          this.ModalTesterSec(),
                          this.setState({
                            class:l.class,
                            sec:k
                          }),
                          console.log("class test",this.state.sec)
                        }
                        }
                         >
{/* --------------------------------------Delete section modal-------------------------------------------------- */}
                         <Modal 
                           isVisible={this.state.viewmodalSection}
                           >
                             <View style={{width:328,height:210,backgroundColor:'white',borderRadius:8,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
                               <View>
                               {/* <Delete/>delete icon */}
                               </View>
                               <View style={{width:250,height:48}}>
                                 <Text style={{fontSize:16,textAlign:'center',lineHeight:24}}>Are you sure you wanted to delete  </Text>
                                 <View style={{flexDirection:'row',textAlign:'center',justifyContent:'center',alignContent:'center'}}>
                                 <Text style={{fontSize:16,textAlign:'center',lineHeight:24,fontWeight:'bold'}}>Section:{this.state.sec} </Text>
                                 <Text style={{fontSize:16,textAlign:'center',lineHeight:24}}>in </Text>
                                 <Text style={{fontSize:16,textAlign:'center',lineHeight:24}}>{this.state.class}?</Text>
                                 </View>
                               </View>
                               <View style={{flexDirection:'row'}}>
                                  <TouchableOpacity style={{width:136,height:42,borderRadius:8,backgroundColor:'#E1E8ED',justifyContent:'center',alignItems:'center',margin:10}}
                                    onPress={()=>
                                      this.ModalTesterSec()
                                  }
                                    >
                                    <View >
                                      <Text style={{fontSize:16,color:'#657786'}}>Cancel</Text>
                                    </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{width:136,height:42,borderRadius:8,backgroundColor:'#1F85FF',justifyContent:'center',alignItems:'center',margin:10}}
                                  onPress={()=>
                                  {this.deleteSection(this.state.class,i,this.state.sec)}
                                }
                                  >
                                  <View>
                                      <Text style={{fontSize:16,color:'white'}}>Delete</Text>
                                    </View>
                                  </TouchableOpacity>
                               </View>
                             </View>
                           </Modal>




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
             </View>
          }
               
                {/* ................uptohere................................. */}
                </View>
                </ScrollView>
                <View style={{position:"absolute",marginTop:height1-200,marginLeft:110}}>
                <ModalTester props={{loadData:this.loadData}}/>
                </View>
       </View>
    );
  }
}

// ....................................................Add new class component...............................................

const { width, height} = Dimensions.get("screen");
var height1=Dimensions.get('window').height;
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
   loadData=()=>{
    this.state.data=[];
    this.state.availableClass=[];
    this.state.classes=[];
   this.setState({data:this.state.data,availableClass:this.state.availableClass,classes:this.state.classes})
    var details={
      uid:store.getState().authdetails.uuid
    }
    functions().httpsCallable('getClass')(details)
.then(response => {
// console.log("sucsesfully getting all classess bro",response.data)
this.state.data=[];
this.state.availableClass=[];
this.state.classes=[];
this.setState({data:this.state.data,availableClass:this.state.availableClass,classes:this.state.classes})
this.state.data=response.data;
this.setState({data:this.state.data})
// console.log(this.state.data,"i am from classes.js")
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
    toggleModal=()=>{
      this.state.data=[];
      this.state.availableClass=[];
      this.state.classes=[];
     this.setState({data:this.state.data,availableClass:this.state.availableClass,classes:this.state.classes})

      this.loadData()
      this.setState({isModalVisible:!this.state.isModalVisible})
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
           <AddNewClass props={{class:this.state.classes,modal:this.toggleModal,loadData:this.props.props.loadData}}/>
          </Modal>
      </View>
      )
    }
  }
    
  





const mapDispatchToProps = (dispatch) => {
  return {
  changevisible:()=>dispatch({type:'changevisible',payload:''})
  }
}
export default connect(null,mapDispatchToProps)(AllClasses)




                     