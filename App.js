import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
// import PhoneNumber from './screens/PhoneNumber';
// import VerifyCode from './screens/VerifyCode';
import VerifyCode from './OtpPage';

import Authenticated from './screens/Authenticated';
import PhoneNumber from './Logo/LandingPage';

import OtpPage from './OtpPage'
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
  render() {
    return (
      <View>

        <Text>
          {/* <Translator /> */}
          <Authentication />

        </Text>
      </View>
    )
  }
}

export default App;

