import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
// import PhoneNumber from './screens/PhoneNumber';
// import VerifyCode from './screens/VerifyCode';
import VerifyCode from './OtpPage';

import Authenticated from '../../../screens/Authenticated';
import PhoneNumber from './Logo/LandingPage'
import firestore from '@react-native-firebase/firestore';
// import OtpPage from '../../../OtpPage'
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
import DrawerNav from '../../../Navigation/TopNav/NavBar'
import { NavigationContainer } from '@react-navigation/native';
import AddNewClassesPage from '../../../ClassesDesign/AddNewClassesPage';
import ChooseClass from '../../../ClassesDesign/ChooseClass-2';
import { connect } from 'react-redux';
import TeacherStack from '../../../TEACHERS/TeacherStack';
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
    const [Roll, setRoll] = useState(null);
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
        // console.log(code);
        try {
            await confirm.confirm(code);
            setConfirm(null);
        } catch (error) {
            alert('Invalid code');
        }
    }   

    auth().onAuthStateChanged((user) => {
        
        // this.props.details(auth())
        if (user) {
            setAuthenticated(true);
            // console.log(user.phoneNumber,"thse are the user details")
        firestore().collection('Users').doc(user.phoneNumber).get().then(res=>{
            // console.log(res.data(),"is res")
            setRoll(res.data().role)
           props.details(res.data())
        })
        } else {
            // setConfirm(false)
            setAuthenticated(false);
        }
    })

    if (authenticated) {
      if(Roll==='Teacher'){
          return(
<NavigationContainer>
               {/* <Text>hiii teacher</Text> */}
               {/* <DrawerNav/> */}
               <TeacherStack/>
               </NavigationContainer>
          )
      }else if(Roll==='Principal'){
          return(
<NavigationContainer>
               <DrawerNav/>
               </NavigationContainer>
          )
      }else if(Roll==null){
          return(
              <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:25}}>Loading...</Text>
              </View>
          )
      }
    }

        
        // <AddNewClassesPage/>
        // <ChooseClass/>
    

    if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

    return <PhoneNumber onSubmit={signIn} />;
}
const mapDispatchToProps = (dispatch) => {
    return {

        //   // dispatching plain actions
        //   increment: () => dispatch({ type: 'INCREMENT' }),
        //   decrement: () => dispatch({ type: 'DECREMENT' }),
        //   reset: () => dispatch({ type: 'RESET' }),
        details: (l) => dispatch({ type: 'authdetails', payload: l })
    }
}
export default connect(null, mapDispatchToProps)(Authentication1)