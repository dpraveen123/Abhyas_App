import React, { useState } from 'react';

// import auth from '@react-native-firebase/auth';
// import PhoneNumber from './screens/PhoneNumber';
// import VerifyCode from './screens/VerifyCode';
// import VerifyCode from './OtpPage';
// import ChooseClass from './ClassesDesign/ChooseClass'
// import Authenticated from './screens/Authenticated';
// import PhoneNumber from './Logo/LandingPage';
// import { NavigationContainer } from '@react-navigation/native';
// import OtpPage from './OtpPage'
// import DrawerNav from './Navigation/TopNav/NavBar'
// import LandingPage from './Logo/LandingPage'
// import LandingPage from './Logo/LandingPage'
// import MyCourses from './Bsharp/mycourses'
// import Example from './Bsharp/students'
// import Hello from './Bsharp/Cards'
// import SwitchExample from './Bsharp/dropdown'
import Authentication1 from './Authentication1'
// import CreateData from './createdata'
// import Schools from './Schools'
// import AdminDashboard from './cardss/AdminDashboard'

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
import Profile from './mywork/Profile';
import Teacher from './teacher'

import Translator from './OtpPage'
import Page from './ClassesDesign/NoSectionsAdded';
import TeacherData from './Teachersdata'
// -----------------port-8081---------------------------
class App extends React.Component {



  render() {
    return (
      // <CreateData />
      // <Schools />
      // <Profile />
      // <Teacher />
      // <TeacherData />

      <Authentication1 />
    )



    //     if (this.state.authenticated) return (
    // <NavigationContainer>
    //  <DrawerNav/>
    // </NavigationContainer>
    //     );

    //    if (this.state.confirm) return <VerifyCode onSubmit={this.confirmVerificationCode} />;


    // return  <PhoneNumber onSubmit={this.signIn} />


  }

}

export default App;

