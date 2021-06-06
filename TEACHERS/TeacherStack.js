import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import TeachersTimeTbl from './TeachersTimeTbl'
// import TeacherDashboard from './TeacherDashboard';
import EditProfile from '../Student-profile/Editprofile'
import Modaling from '../Student-profile/modal'
import TeacherBotNav from './TeacherBotNav';
import FirstClass from './FirstClass';
import TabNav from './Tabnav'
const Stack = createStackNavigator();
function TeacherStack({props}) {
console.log(props,"instack");
  return (
    //   <View>
    //       <Text>hii</Text>
    //   </View>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TeacherBotNav} />
      <Stack.Screen name="TeachersTimeTbl" component={TeachersTimeTbl}/>
      <Stack.Screen name="Section" component={TabNav}/>
      <Stack.Screen name="EditProfile" component={Modaling}/>
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
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
