import React from 'react'
import { View, Text } from 'react-native'
import Teacher from '../teacher'

import Hello from '../profile/Hello'
function Teachers({navigation}) {
    // console.log(navigation,"i am from captal Teachers")
    return (
        // <View>
            // <Teacher props={navigation}/> 
            <Hello props={navigation} />
            // {/* <Text>Teachers?????????????????????????????...............</Text> */}
        // </View>
    )
}
export default Teachers