import React from 'react';
import { Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';
import Biology from '../Navigation/TEACHERS/Biology'
import TeacherSub from '../Navigation/TEACHERS/ganesh'
class Subjects extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount=()=>{
    var details={
      User :auth().currentUser.phoneNumber,
      class:this.props.props.route.params.class,
      section:this.props.props.route.params.section
  }
  // console.log("i am from subject.js",details)
  //  firestore().collection('Users').doc(details.User).collection('Classes').doc(details.class).get().then(
  //  l=>{
  //   //  console.log("res",l.data())
  //   console.log(l.data().SectionandSubjects[details.section],"hiiii")
  //   // var x=l.data().SectionandSubjects
    
  //  }
  //  )
  // functions()
  // .httpsCallable('getTeacherSubjects')(details)
  // .then((response) => {
  //   console.log("sucsesfully getting Teacher details dudee to fire functions from teacher", response.data)
  // });
  }
  render(){
    return(
      // <Text>Hello, This is subjects page!!!!!</Text>
      // <Biology/>adb devices
      <TeacherSub/>

    )
    }
}


export default Subjects;