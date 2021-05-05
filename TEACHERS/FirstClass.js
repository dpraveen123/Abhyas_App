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
            {/* <Text>hiii</Text> */}
            <Tabnav/>
            {/* <Tab.Navigator>
                <
            </Tab.Navigator> */}
            {/* <Tab.Navigator>
                <Tab.Screen name="Subjects" component={Subjects}/>
            </Tab.Navigator> */}
            {/* <Text>hiii</Text> */}
            {/* <Tab.Navigator>
      <Tab.Screen name="Subjects" component={Subjects} />
      <Tab.Screen name="Students" component={AllClasses} />
      <Tab.Screen name="Reports" component={Report} />
    </Tab.Navigator> */}
            {/* <Tabnav1/> */}
            {/* <TeacherSub/> */}
        </View>
    )
}
export default FirstClass