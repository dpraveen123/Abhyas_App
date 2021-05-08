import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import Home from '../Navigation/Icons/Home'
import Bell from'../Navigation/Icons/Bell'
import HomeIconPage from '../Navigation/Icons/Home'
import TeacherDashboard from './TeacherDashboard'
import BellIconPage from '../BellIconPage'
import UserIconPage from '../UserIconPage'
import User from '../Navigation/Icons/User'

const Tab = createBottomTabNavigator();
export default function TeacherBotNav(){
    return(
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      // component={TeacherDashboard}
      component={TeacherDashboard}  
      options={{
        tabBarIcon:()=>(<Home/>)
      }}
      />
      <Tab.Screen 
      name="Notifications" 
      component={BellIconPage}
      options={{
        tabBarIcon:()=>(<Bell/>)
      }} /> 
       <Tab.Screen 
      name="Profile" 
      component={UserIconPage}
      options={{
        tabBarIcon:()=>(<User/>)
      }} /> 
    </Tab.Navigator>
    )
}