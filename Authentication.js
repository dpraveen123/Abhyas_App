import React, { useState ,useEffect} from 'react';
import auth from '@react-native-firebase/auth';
// import PhoneNumber from './screens/PhoneNumber';
// import VerifyCode from './screens/VerifyCode';
import VerifyCode from './OtpPage';

import Authenticated from './screens/Authenticated';
import PhoneNumber from './Logo/LandingPage';
import ChooseClass from './ClassesDesign/ChooseClass'
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

class  Authentication extends React.Component {
    constructor(props){
         super(props);
         this.state={
             confirm:null,
             authenticated:false,
         }
        }
   
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
    
  
   

    

    render(){
        auth().onAuthStateChanged((user) => {
            if (user) {
                
                this.setState({authenticated:true})
            } else {
             
                this.setState({authenticated:false})
            }
        })
        if (this.state.authenticated) return <ChooseClass/>;

       if (this.state.confirm) return <VerifyCode onSubmit={this.confirmVerificationCode} />;


    // return  <PhoneNumber onSubmit={this.signIn} />
                
        
    }
}
export default Authentication