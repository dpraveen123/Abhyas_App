import React, { useState } from 'react';
import Authentication1 from './Authentication1'
import Ganesh from './Navigation/TEACHERS/TeacherSub';
//import RunMetro from './Navigation/TEACHERS/RunMetro';
//import Svgpage from '../../Svg';
// import CreateData from './createdata'
// import Schools from './Schools'
// import DropDown1 from './dropDown'
// import AdminDashboard from './cardss/AdminDashboard'
import { Provider } from 'react-redux';
import store from './redux';
import AllStudents from './class-students/Students';
// import Tabnav1 from './class-students/Tabnav'
// import Modaling from './Student-profile/modal';



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

import Sheet from './bottomSheet/Sheet'
// import Profile from './mywork/Profile';
// import Teacher from './teacher'

// import Hello from './profile/Hello';
// import Addclass from './profile/Addclass';
// import Profile from './profile/Stack';
// import AllClasses from './profile/Classes';
// import Slider from './profile/Tab';
// import Editpick from './profile/Editpick';
// // import store from './redux'
// import Newone from './profile/new2';
// import Testing from './Testing'

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
class App extends React.Component{
  render() {
    return (
      // <CreateData />
      // <Schools />
      // <Profile />
      // <Teacher />
//  <AllClasses/> 
/* <Editpick/> */
// {/* <RunSheet/> */}
     
      <Provider store={store}>
         <Authentication1 /> 
         {/* <Sheet/> */}
         {/* <Report /> */}
         {/* <Modaling /> */}
         {/* <Searchbar /> */}
         {/* <AllStudents /> */}
       {/* <Tabnav1 /> */}
         {/* <Slider/> */}
         {/* <Editpick /> */}
         {/* <Slider/> */}
         {/* <Testing/> */}
      {/* <Test/> */}  
         {/* <Newone />   */}
         {/* <DropDown1/> */}
         {/* <Pick/> */}
         {/* <EditPick/> */}
      </Provider>
      // </>
    )
  }

}

export default App;
