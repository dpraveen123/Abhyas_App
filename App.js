import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

import auth from '@react-native-firebase/auth';
// import PhoneNumber from './screens/PhoneNumber';
// import VerifyCode from './screens/VerifyCode';
import VerifyCode from './OtpPage';
import Authenticated from './screens/Authenticated';
import PhoneNumber from './Logo/LandingPage';
import OtpPage from './OtpPage';
import LandingPage from './Logo/LandingPage';
// import Icon from './Navigation/Icons/Icon'
import DrawerNav from './Navigation/TopNav/NavBar';
import BotNav from './Navigation/BottomNav/BotNav';
import Drawernavi from './Navigation/DrawerNav/DrawerNav';
import AdminDashboard from './cardss/AdminDashboard'
import AddNewClassesPage from './ClassesDesign/AddNewClassesPage'
// import NavBar from './Navigation/Topnav/NavBar'
import { NavigationContainer } from '@react-navigation/native';
import ChooseClass from './ClassesDesign/ChooseClass';
export default function App() {
  return (
    <>
   
    {/* -------------port-8888------------------ */}
        {/*------------- Creating Navigation container----------------------  */}
        {/* <NavigationContainer>
          <DrawerNav/>
        </NavigationContainer> */}
        {/* <AddNewClassesPage/> */}
        <ChooseClass/>
   </>
  )

  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }

  async function confirmVerificationCode(code) {
    console.log(code);
    try {
      await confirm.confirm(code);
      setConfirm(null);
    } catch (error) {
      alert('Invalid code');
    }
  }

  auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })

  if (authenticated) return <Authenticated />;

  if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

  return <PhoneNumber onSubmit={signIn} />;
}
