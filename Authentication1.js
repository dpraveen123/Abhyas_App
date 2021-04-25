import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
// import PhoneNumber from './screens/PhoneNumber';
// import VerifyCode from './screens/VerifyCode';
import VerifyCode from './OtpPage';

import Authenticated from './screens/Authenticated';
import PhoneNumber from './Logo/LandingPage';
import firestore from '@react-native-firebase/firestore';
import OtpPage from './OtpPage'
// import LandingPage from './Logo/LandingPage'
// import MyCourses from './Bsharp/mycourses'
// import Example from './Bsharp/students'
// import Hello from './Bsharp/Cards'
// import SwitchExample from './Bsharp/dropdown'
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
import DrawerNav from './Navigation/TopNav/NavBar'
import { NavigationContainer } from '@react-navigation/native';
import AddNewClassesPage from './ClassesDesign/AddNewClassesPage';
import ChooseClass from './ClassesDesign/ChooseClass-2';
import { connect } from 'react-redux';
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

 function Authentication1(props) {
    // console.log("hloooooo")
    // return (
    //   // <OtpPage />
    //   <LandingPage />
    // )

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
        console.log(user.phoneNumber,"thse are the user details")
        firestore().collection('Principals').doc(user.phoneNumber).get().then(res=>{
            console.log(res.data(),"is res")
           props.details(res.data())
        })
        // this.props.details(auth())
        if (user) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    })

    if (authenticated) return (
        <NavigationContainer>
            <DrawerNav />
        </NavigationContainer>
        // <AddNewClassesPage/>
        // <ChooseClass/>
    );

    if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

    return <PhoneNumber onSubmit={signIn} />;
}
const mapDispatchToProps = (dispatch) => {
    return {
   
    //   // dispatching plain actions
    //   increment: () => dispatch({ type: 'INCREMENT' }),
    //   decrement: () => dispatch({ type: 'DECREMENT' }),
    //   reset: () => dispatch({ type: 'RESET' }),
    details:(l)=>dispatch({type:'authdetails',payload:l})
    }
  }
export default connect(null,mapDispatchToProps)(Authentication1)