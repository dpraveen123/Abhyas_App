import React, { useState } from 'react';

import auth from '@react-native-firebase/auth';
// import PhoneNumber from './screens/PhoneNumber';
// import VerifyCode from './screens/VerifyCode';
import VerifyCode from './OtpPage';
import ChooseClass from './ClassesDesign/ChooseClass'
import Authenticated from './screens/Authenticated';
import PhoneNumber from './Logo/LandingPage';
import { NavigationContainer } from '@react-navigation/native';
import OtpPage from './OtpPage'
import DrawerNav from './Navigation/TopNav/NavBar'
// import LandingPage from './Logo/LandingPage'
// import MyCourses from './Bsharp/mycourses'
// import Example from './Bsharp/students'
// import Hello from './Bsharp/Cards'
// import SwitchExample from './Bsharp/dropdown'
import Authentication from './Authentication'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView
} from 'react-native';

import Translator from './OtpPage'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        confirm:null,
        authenticated:false,
    }
   }
// componentDidMount=()=>{
//   auth().onAuthStateChanged((user) => {
//     if (user) {
        
//         this.setState({authenticated:true})
//     } else {
     
//         this.setState({authenticated:false})
//     }
// })
// }
signIn=(phoneNumber)=> {
   try {
       const confirmation = auth().signInWithPhoneNumber(phoneNumber);
       this.setState({confirm:confirmation})
   } catch (error) {
       alert(error);
   }
}

confirmVerificationCode=(code)=> {
   console.log(code);
   try {
        confirm.confirm(code);
       setConfirm(null);
   } catch (error) {
       alert('Invalid code');
   }
}

  render() {
    
      
     
    if (this.state.authenticated) return (
      <NavigationContainer>
       <DrawerNav/>
      </NavigationContainer>
    );

   if (this.state.confirm) return <VerifyCode onSubmit={this.confirmVerificationCode} />;


return  <PhoneNumber onSubmit={this.signIn} />
        
    
  }
}

export default App;

