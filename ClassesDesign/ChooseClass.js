import React from 'react'
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

function ChooseClass() {
    return (
        <View style={styles.Page}>
            <View 
            >
            <Text>Hi this is choosing class</Text>
            </View>
            <View 
            style={styles.PopUp}
            >
            <Text>hiii</Text>
            </View>
        </View>
    )
}
export default ChooseClass
const styles=StyleSheet.create({
    Page:{
        backgroundColor:'#E5E5E5',
    },
    PopUp:{
        backgroundColor:'white',
        height:540,
        marginTop:88,
        borderRadius:16,
    }
})