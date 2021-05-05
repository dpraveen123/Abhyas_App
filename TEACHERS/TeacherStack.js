import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import TeachersTimeTbl from './TeachersTimeTbl'
// import TeacherDashboard from './TeacherDashboard';
import TeacherBotNav from './TeacherBotNav';
import FirstClass from './FirstClass';
import Tabnav from '../class-students/Tabnav'
const Stack = createStackNavigator();
function TeacherStack() {
// console.log(props);
  return (
    //   <View>
    //       <Text>hii</Text>
    //   </View>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TeacherBotNav} />
      <Stack.Screen name="TeachersTimeTbl" component={TeachersTimeTbl}/>
      <Stack.Screen name="1st Class" component={Tabnav}/>
    </Stack.Navigator>
  );
}
export default TeacherStack
//     return (
//         <View>
//             <Text>hiiii</Text>
//         </View>
//     )
// }
