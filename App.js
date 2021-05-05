import React, { useState } from 'react';
import Authentication1 from './Authentication1'
import CreateData from './createdata'
import Schools from './Schools'
import { Provider } from 'react-redux';
import store from './redux';

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
// -----------------port-8081---------------------------
class App extends React.Component {
  render() {
    return (
      <>
     {/* <Tabnav1/> */}
      <Provider 
      store={store}
      >
         <Authentication1 /> 
      </Provider>
      </>
    )
  }
 }

export default App;
