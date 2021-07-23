import React, { useState } from 'react';
import Authentication1 from './Authentication1'
import { Provider } from 'react-redux';
import store from './redux';
// import SelectionButton from './AttendanceSelection/SelectionButton';
import Report from './TEACHERS/Report';


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

class App extends React.Component{
  render() {
    return (
      
           
    
      <Provider store={store}>
        {/* <Report/> */}
        {/* <SelectionButton/> */}
         <Authentication1 /> 
        </Provider>
    )
  }

}

export default App;
