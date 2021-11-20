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
import Home from '../Icons/Home'
import Bell from'../Icons/Bell'
import HomeIconPage from '../../HomeIconPage'
import AdminDashboard from '../../cardss/AdminDashboard'
// import AdminDashboard from '../../cardss/AdminDashboard'
// import  Translator from '../../cardss/Page2'
import BellIconPage from '../../BellIconPage'
import User from '../Icons/User'
import UserIconPage from '../../UserIconPage'
// import TeacherDashboard from '../../TEACHERS/TeacherDashboard'
const Tab = createBottomTabNavigator();
export default function BotNav(){
    return(
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      // component={TeacherDashboard}
      component={AdminDashboard}  
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