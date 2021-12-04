import React from 'react';
import { Text ,View,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';
import Biology from '../../../../../Navigation/TEACHERS/Biology'
import TeacherSub from '../../../../../Navigation/TEACHERS/TeacherSub'
import store from '../../../../../redux'
// var details
var height1= Dimensions.get('window').height
class Subjects extends React.Component{
  constructor(props){
    super(props);
    this.state={
 details:""
    }
  }
  componentDidMount=()=>{
 this.state.details={
      User :auth().currentUser.phoneNumber,
      class:this.props.props.route.params.class,
      section:this.props.props.route.params.section,
      SchoolId:store.getState().authdetails.SchoolID,

  }
  this.setState({
    details:this.state.details
  })
  // console.log("hehehheheheh",this.state.details,"hiii",store.getState())

  // console.log("i am from subject.js",details)
  //  firestore().collection('Users').doc(details.User).collection('Classes').doc(details.class).get().then(
  //  l=>{
  //   //  console.log("res",l.data())
  //   console.log(l.data().SectionandSubjects[details.section],"hiiii")
  //   // var x=l.data().SectionandSubjects
    
  //  }
  // //  )
  // functions()
  // .httpsCallable('getTeacherSubjects')(this.state.details)
  // .then((response) => {
  //   // console.log(this.state.details,'this.state.details');
  //   // console.log("sucsesfully getting Teacher details dudee to fire functions from teacher", response.data)
  // });
  }
  render(){
    // console.log("hii andiii")
    // console.log("this.state.details is",this.state.details);
    return(
      // <Text>Hello, This is subjects page!!!!!</Text>
      // <Biology/>
      // <TeacherSub props={this.state.details}/>
      <View>

{this.state.details===""?<Text>Loading....</Text>:<TeacherSub props={this.state.details}/>}
         <TouchableOpacity
         style={styles.footer}
         onPress={()=>{console.log("subjects.js",this.state.details)
        this.props.props.navigation.navigate({name:'Attendence',params:this.state.details}) 
         }}
         >
           <View  style={styles.button}>
             <Text style={styles.buttonText}>View/Edit Attendence</Text>
           </View>
         </TouchableOpacity>

            
      </View>
    )
    }
}


export default Subjects;

const styles = StyleSheet.create(
  {
  button:{
      backgroundColor:'#1F85FF',
      padding:10,
      borderRadius: 4,
      width:240,
      height:40
    
    },
    buttonText:{
      color:'white',
      alignSelf:'center',
      fontSize:14,
      fontFamily:"Roboto",
      fontWeight: "bold"
      
    },
    footer: {
      backgroundColor:'#FFFFFF',
      height:56,
      alignItems:'center',
      justifyContent:'center',
      // marginTop:75,
      position:'absolute',
      top:height1-200,
      left:60,
      opacity:100,
     
      
      },
     }
  )
