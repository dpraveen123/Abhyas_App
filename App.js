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
// import Profile from './mywork/Profile';
import Teacher from './teacher'

import Translator from './OtpPage'
import Page from './ClassesDesign/NoSectionsAdded';
// -----------------port-8081---------------------------
class App extends React.Component {
  //   constructor(props){
  //     super(props);
  //     this.state={
  //         confirm:null,
  //         authenticated:false,
  //     }
  //    }
  // componentDidMount=()=>{
  //   auth().onAuthStateChanged((user) => {
  //     if (user) {

  //         this.setState({authenticated:true})
  //     } else {

  //         this.setState({authenticated:false})
  //     }
  // })
  // }
  // signIn=(phoneNumber)=> {
  //    try {
  //        const confirmation = auth().signInWithPhoneNumber(phoneNumber);
  //        this.setState({confirm:confirmation})
  //    } catch (error) {
  //        alert(error);
  //    }
  // }

  // confirmVerificationCode=(code)=> {
  //    console.log(code);
  //    try {
  //         confirm.confirm(code);
  //        setConfirm(null);
  //    } catch (error) {
  //        alert('Invalid code');
  //    }
  // }

  render() {
    return (
      // <CreateData />
      // <Schools />
      // <Profile />
      // <Teacher />

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
  // class App extends React.Component {
  //   render() {
  //     return (
  //       <View>
  //         <PhoneNumber />
  //         {/* <Hello /> */}
  //         {/* <MyCourses /> */}
  //         {/* <SwitchExample /> */}
  //         {/* <Example /> */}
  //       </View>
  //     )
  //   }
  // }

  // export default App;

  // export default function App() {
  //    return (
  //   // <OtpPage />
  //  <Profile />

  //  )

  // const [confirm, setConfirm] = useState(null);
  // const [authenticated, setAuthenticated] = useState(false);

  // async function signIn(phoneNumber) {
  //   try {
  //     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //     setConfirm(confirmation);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  // async function confirmVerificationCode(code) {
  //   console.log(code);
  //   try {
  //     await confirm.confirm(code);
  //     setConfirm(null);
  //   } catch (error) {
  //     alert('Invalid code');
  //   }
  // }

  // auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     setAuthenticated(true);
  //   } else {
  //     setAuthenticated(false);
  //   }
  // })

  // if (authenticated) return <Authenticated />;

  // if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

  // return <PhoneNumber onSubmit={signIn} />;
}

export default App;

