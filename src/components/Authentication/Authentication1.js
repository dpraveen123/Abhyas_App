import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import VerifyCode from './OtpPage';
import PhoneNumber from './LandingPage'
import firestore from '@react-native-firebase/firestore';
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
import DrawerNav from '../Admin-Dashboard/Navigation/TopNav/NavBar'
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import TeacherStack from '../Teacher-Dashboard/Navigations/TeacherStack';


function Authentication1(props) {

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

    if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

    return <PhoneNumber onSubmit={signIn} />;
}
const mapDispatchToProps = (dispatch) => {
    return {
        details: (l) => dispatch({ type: 'authdetails', payload: l })
    }
}
export default connect(null, mapDispatchToProps)(Authentication1)