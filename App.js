import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
// import PhoneNumber from './screens/PhoneNumber';
// import VerifyCode from './screens/VerifyCode';
import VerifyCode from './OtpPage';

import Authenticated from './screens/Authenticated';
import PhoneNumber from './Logo/LandingPage';

// import OtpPage from './OtpPage'
// import LandingPage from './Logo/LandingPage'
// import MyCourses from './Bsharp/mycourses'
// import Example from './Bsharp/students'
// // import Hello from './Bsharp/Cards'
// import SwitchExample from './Bsharp/dropdown'
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Button,
//   TextInput,
//   ScrollView
// } from 'react-native';
import Hello from './profile/Hello';
import Addclass from './profile/Addclass';
import Profile from './profile/Stack';
import AllClasses from './profile/Classes';
import Slider from './profile/Tab';
import Tab2 from './profile/Editpick'



class App extends React.Component {
  render() {
    return (
      // <PickerWithIcon />
      // <Tab2 />
      // // <View>
      
      
      //   {/* <PhoneNumber /> */}
        // <AllClasses /> 
         <Slider />
      //   {/* <Tablet /> */}
      //   {/* <Hello /> */}
      //   {/* <Profile /> */}
      //   {/* <Addclass /> */}
      //   {/* <MyCourses /> */}
      //   {/* <SwitchExample /> */}
      //   {/* <Example /> */}
      // // </View>
    )
  }
}

export default App;

// export default function App() {
//   // return (
//   //   // <OtpPage />
//   //   <LandingPage />
//   // )

//   const [confirm, setConfirm] = useState(null);
//   const [authenticated, setAuthenticated] = useState(false);

//   async function signIn(phoneNumber) {
//     try {
//       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//       setConfirm(confirmation);
//     } catch (error) {
//       alert(error);
//     }
//   }

//   async function confirmVerificationCode(code) {
//     console.log(code);
//     try {
//       await confirm.confirm(code);
//       setConfirm(null);
//     } catch (error) {
//       alert('Invalid code');
//     }
//   }

//   auth().onAuthStateChanged((user) => {
//     if (user) {
//       setAuthenticated(true);
//     } else {
//       setAuthenticated(false);
//     }
//   })

//   if (authenticated) return <Authenticated />;

//   if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

//   return <PhoneNumber onSubmit={signIn} />;
// }
