import React from 'react';
import { Text ,View} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';
import Biology from '../Navigation/TEACHERS/Biology'
import TeacherSub from '../Navigation/TEACHERS/TeacherSub'
// var details
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
      section:this.props.props.route.params.section
  }
  this.setState({
    details:this.state.details
  })
  // console.log("i am from subject.js",details)
  //  firestore().collection('Users').doc(details.User).collection('Classes').doc(details.class).get().then(
  //  l=>{
  //   //  console.log("res",l.data())
  //   console.log(l.data().SectionandSubjects[details.section],"hiiii")
  //   // var x=l.data().SectionandSubjects
    
  //  }
  //  )
  functions()
  .httpsCallable('getTeacherSubjects')(this.state.details)
  .then((response) => {
    console.log(this.state.details,'this.state.details');
    console.log("sucsesfully getting Teacher details dudee to fire functions from teacher", response.data)
  });
  }
  render(){
    // console.log("this.state.details is",this.state.details);
    return(
      // <Text>Hello, This is subjects page!!!!!</Text>
      // <Biology/>
      // <TeacherSub props={this.state.details}/>
      <View>

{this.state.details===""?<Text>Loading....</Text>:<TeacherSub props={this.state.details}/>}
      </View>
    )
    }
}


export default Subjects;