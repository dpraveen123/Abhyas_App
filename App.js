import React, { useState } from 'react';
import Authentication1 from './Authentication1'
import Ganesh from './Navigation/TEACHERS/TeacherSub';
//import RunMetro from './Navigation/TEACHERS/RunMetro';
//import Svgpage from '../../Svg';
// import CreateData from './createdata'
// import Schools from './Schools'
// import DropDown1 from './dropDown'
// import AdminDashboard from './cardss/AdminDashboard'
import Studentpage from './Navigation/TEACHERS/Studentpage';
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
import Teacher from './teacher'
import AllClasses from './profile/Classes'
import Translator from './OtpPage'
import Page from './ClassesDesign/NoSectionsAdded';
import Editpick from './profile/Editpick'
import TeacherSubj from './TEACHERS/TeacherSubj';
import Biology from './Navigation/Icons/Biology';
import Physics from './Navigation/Icons/Physics';
import Maths from './Navigation/Icons/Maths';
import Social from './Navigation/Icons/Social';
import Tabnav1 from './class-students/Tabnav';
import Sheet1 from './BottomSheet/Sheet1'
// -----------------port-8081---------------------------
class App extends React.Component {
  render() {
    return (
      // <CreateData />
      // <Schools />
      // <Profile />
      // <Teacher />
//  <AllClasses/> 
/* <Editpick/> */
     
      <Provider store={store}>
         {/* <Authentication1 />  */}
         {/* <Report /> */}
         {/* <Modaling /> */}
         {/* <Searchbar /> */}
         <AllStudents />
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
