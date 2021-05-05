import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllClasses from '../class-students/Students';
import Subjects from '../class-students/Subjects';
import Report from '../class-students/Report'
import TeacherSub from './TeacherSubj'
import Tabnav from '../class-students/Tabnav'
const Tab = createMaterialTopTabNavigator();

function FirstClass({props}) {
    return (
        <View>
            <Tabnav/>
          
        </View>
    )
}
export default FirstClass