
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View,Text} from 'react-native';
import Students from './Students'
import Report from './Report';
import Subjects from './Subjects';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TeacherSub from '../TEACHERS/TeacherSubj';
const Tab = createMaterialTopTabNavigator();
export default class Tabnav extends Component {
  constructor(props) {
  super(props)
    this.state = {
       
    }
  }
  render() {
    // console.log(this.props.route.params.l.class,"Tabnav l");
    // console.log(this.props.route.params.k,"Tabnav k");
    return (
      <>
      <View>
        <Text>{this.props.route.params.l.class}</Text>
        <Text>{this.props.route.params.k}-Section</Text>
      </View>
    <Tab.Navigator>
      <Tab.Screen name="Subjects" component={TeacherSub} />
      <Tab.Screen name="Students" component={Students} />
      <Tab.Screen name="Reports" component={Report} />
    </Tab.Navigator>
    </>
  );
}   
}