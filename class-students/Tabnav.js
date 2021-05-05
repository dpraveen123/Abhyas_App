
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Container, Header, Tab, Tabs, TabHeading, Icon, Text ,StyleProvider} from 'native-base';
import {View} from 'react-native';
import Students from './Students'
import Report from './Report';
import Subjects from './Subjects';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TeacherSub from '../TEACHERS/TeacherSubj';

const Tab = createMaterialTopTabNavigator();

export default class Tabnav extends Component {
  render() {
    return (
      // <TeacherSub/>
    <Tab.Navigator>
      <Tab.Screen name="Subjects" component={TeacherSub} />
      <Tab.Screen name="Students" component={Students} />
      <Tab.Screen name="Reports" component={Report} />
    </Tab.Navigator>
  );
}   
}