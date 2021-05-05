// import React from 'react';
// import {View,Text} from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Subjects from './Subjects';
// import Students from './Students';
// import Reports from './Report'
// import { NavigationContainer } from '@react-navigation/native';
// const Tab = createMaterialTopTabNavigator();

// function Tabnav1(){
//   return (
//     <View>
//     <Text>hiii</Text>
//     {/* // <NavigationContainer> */}
//     <Tab.Navigator>
//        <Tab.Screen name="Subjects" component={Subjects} />
//     {/* //   <Tab.Screen name="Students" component={Students} /> */}
//     {/* //   <Tab.Screen name="Reports" component={Reports} /> */}
//      </Tab.Navigator>
//      {/* </NavigationContainer> */}
//     </View>
//   );
// }
// export default Tabnav1
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
      // <StyleProvider style={getTheme(material)}>
      // <Container >
        
      //   <Tabs >
      //     <Tab  heading={ <TabHeading><Text>Subjects</Text></TabHeading>}  >
      //     <TeacherSub/>
      //     {/* <Subjects/> */}
      //     </Tab >
         
      //     <Tab heading={ <TabHeading><Text>Students</Text></TabHeading>}>
      //      <Students />
      //     </Tab>

      //     <Tab heading={ <TabHeading><Text>Reports</Text></TabHeading>}>
      //      <Report />
      //     </Tab>
         
      //   </Tabs>
      // </Container>
      // </StyleProvider>
    
}