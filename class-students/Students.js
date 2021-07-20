import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,Dimensions,ScrollView,SafeAreaView,AppRegistry,
  TextInput,Button,Alert,title,TouchableHighlight,Modal} from 'react-native';
import {Card} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import pic from '../Images/student1.png';
import pic1 from '../Images/stu.png';
import Svgpages from '../assets/Svg';
import Search from '../assets/Search';
import { Icon } from 'react-native-elements';
import AddStudent from './Addstudent';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import store from '../redux'
import functions from '@react-native-firebase/functions';
import NoStudent from '../TEACHERS/noStudentAdded'
import StudentMenu from '../bottomSheet/StudentMenu'
var width1= Dimensions.get('window').width
var height1= Dimensions.get('window').height
var Height = (273.5/640)*100;
var HeightInPercentage = Height+"%";

class AllStudents extends React.Component {
  constructor(props){
    super(props)
  }
    state={
        modalVisible: false,
        sectionUid:'',
        data:'',
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
    setModalVisible = (visible) => {
      console.log("modal opened");
      this.setState({ modalVisible: visible });
      // console.log("modal closed");
    }
  componentDidMount=()=>{
    console.log(" i am from students.js",parseInt("10th class"))
    
    // console.log(this.props.props)
    firestore().collection('Schools').doc(store.getState().authdetails.SchoolID).collection('classes').doc(this.props.props.route.params.class).get()
    .then(l=>{  
      // console.log("response is",l.data().sections[this.props.props.route.params.section])
      this.state.sectionUid=l.data().sections[this.props.props.route.params.section];
      this.setState({sectionUid:this.state.sectionUid})
      this.loadStudentData()
      // console.log(this.state.sectionUid,"i am form student.js")
    })
   
  }
    loadStudentData=()=>{
      var x=[]
      // firestore().collection('Sections').doc(this.state.sectionUid).get().then(l=>{

      //   // console.log(l.data(),"checking data")
      //   for (const [key, value] of Object.entries(l.data().students).sort((a, b) => (a.rollNo>b.rollNo?-1:1))) {
      //     console.log(`${key}: ${value}`);
      //     // this.state.data=this.state.data.concat(value)
      //     // this.setState({data:this.state.data})
      //     // x=x.concat(value)
      // }  
       
      // })
      var details={
        sectionUid:this.state.sectionUid,
      }
      functions()
      .httpsCallable('getStudent')(details)
      .then((response) => {
        //  console.log("sucsesfully getting Student details", response.data)
         this.state.data=response.data;
         this.setState({data:this.state.data})
      });
    }
  modalVi=()=>{
    this.setModalVisible(false)
    this.loadStudentData()
  }
openSheet=(l,i)=>{
  // console.log(l,i)
  // this.RBSheet.open()

  

}


    render() {
     
   
      // console.log("hehhe")
      // console.log(this.props.props)
      const { modalVisible } = this.state;
  
      
      return (
          <View style={{flex:1,backgroundColor:"white",}}>
            <View style={{justifyContent:'center',paddingHorizontal:17,flexDirection:'row',paddingTop:13}}>
           
           <View style={{height:50,flexDirection:'row',padding:4,alignItems:'center',borderRadius:38,paddingLeft:18, paddingRight:40,flex: 1,backgroundColor:'#F5F8FA'}}>
           
             <Search />
             <TextInput placeholder="Search Students or roll no......" style={{fontSize:16, marginLeft:15,borderRadius:15,fontFamily:"Roboto",fontWeight:"400",marginLeft:4,lineHeight:18}}/>
             </View>
             </View>
          
             <ScrollView style={{backgroundColor:'white'  }}>
            
           
          
         
         <View style={{flexDirection:'row',borderRadius:80, margin:0,paddingBottom:100}}>
             
       
             <View
                 style={{
                   backgroundColor: "white",
                   borderRadius: 20,
                   flex: 1,
                   width:300,heigth:45,marginLeft:-10,
                   }}>
                  {
                    this.state.data===''?<View><Text>Loading....</Text></View>:<View>
                    <View style={{paddingLeft:25,paddingTop:12,}}> 

<Text style={{fontFamily:"Roboto",fontSize:20,fontWeight:"500",lineHeight:28,color:"#14171A"}}>All Students</Text>
</View>
                    {
                      this.state.data.length===0?<View><NoStudent/></View>:
                      <View>{
                      this.state.data.map((artist,i) =>{
                        // console.log(i)
                      return  (
                          <TouchableOpacity
                           onPress={() => {this[RBSheet + i].open()}}
                           key={i}
                          >
          <Card containerStyle={styles.card} > 
        <View key={artist.id} style={{flexDirection: "row"}} >
        
        <View style={{flexDirection:'row',borderRadius:20}}>
        
        <View style={{flexDirection: "column",marginTop:-20}}>
               <Image source={pic}
                  style={{
               
                  height: 64,
                  width: 64,
                  backgroundColor: "#ddd",
                  borderRadius: 64/ 2}}resizeMode="cover"/>
    
              </View>
    
              <View
                style={{
                  flexDirection: "column",
                  paddingLeft: 13,
                  marginTop: -21,
                  fontWeight:"bold",
                
                
                }}>
                <Text style={{ fontSize: 17,fontFamily:"Roboto",lineHeight:28 ,lineHeight:24}} >{artist.name}</Text>
                <Text style={{ fontSize: 14, color: "#657786",fontFamily:"Roboto" }}>Roll No. {artist.rollNo} </Text>
                
                <Text style={{ fontSize: 12, color: "#A7A7A7",fontFamily:"Roboto" }}>{this.props.props.route.params.class}-{this.props.props.route.params.section} Section</Text>
              </View>        
             </View>
             <View style={{ marginLeft:300,marginTop:-8,position:"absolute"}}>
              <View>
              <Svgpages />
               </View>
            </View>
            
        
           </View>
          
          </Card>
          <RBSheet
           ref={ref => {
            this[RBSheet + i] = ref;
              }}
            closeOnDragDown={true}
            closeOnPressMask={false}
            onOpen={()=>{
              console.log("sheet opened",artist,i)
            }}
            customStyles={{
              container:{
                borderTopLeftRadius:16,
                borderTopRightRadius:16,
                height:HeightInPercentage,
    
              },
              wrapper: {
                backgroundColor: "transparent"
              },
              draggableIcon: {
                backgroundColor: "#E1E8ED",
                width:87,
                height:5.5,
                
              }
            }}
           
          >
              <StudentMenu props={{nav:this.props,studentData:artist}}/>
          </RBSheet> 
          </TouchableOpacity>
          
            
            
            
           
           )
                      })
                      }</View>
                    }</View>
               
                  }
                    
                     
        
        
                   
                  </View>
                  
                  
                  
                  </View>
  
                </ScrollView>


                   <View style={{alignItems:"center",position:"absolute",}}>
                 
                 
                   <TouchableOpacity style={styles.button} onPress={() => this.setModalVisible(true)} underlayColor='#fff'>
                     <View>
                     <Text style={styles.Class}> + Add new Student </Text>
                     </View>
                    </TouchableOpacity>

                    <Modal visible={modalVisible} animationType="slide">

                      {/* ......................header component .............*/}

            <View style={{flexDirection:"row",paddingTop: 30,paddingLeft:10,backgroundColor:"#FFFFFF",borderBottomWidth:1,borderColor:"#E5E5E5",height:60}}>
             <View style={{flexDirection:"row",paddingLeft:10,marginTop:-10}}>
           <Icon name='close' size={24} 
           onPress={() => this.setModalVisible(false)} />
          <Text style={{fontSize:20,fontWeight:"500",paddingLeft:7,fontFamily:"Roboto"}}>Add Student</Text>
         </View>

       </View>


              <AddStudent props={{class:this.props.props.route.params,function:this.modalVi}}/>

           </Modal>

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
    
},
button:{
  backgroundColor:"#1F85FF",
  width:152,
  height:48,
  borderRadius:40,
  justifyContent:'center',
  marginTop:height1-200,
  marginLeft:110

},
Class:{
  color:'white',
  fontFamily:'Roboto',
  fontWeight:'500',
  fontSize:15,
  marginLeft:9
},

  });
  
  
  
  
  export default AllStudents;
  
  
  