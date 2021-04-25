import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Addclass from './Addclass';
import Hello from './Hello';


const RootStack = createStackNavigator();

 export default function Profile() {
  return (
    <NavigationContainer>
    <RootStack.Navigator headerMode='none'>

<RootStack.Screen name="Hello" component={Addclass}/>
<RootStack.Screen name="Addclass" component={Addclass}/>

</RootStack.Navigator>
    </NavigationContainer>
  );
}