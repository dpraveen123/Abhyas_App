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
// import ChooseClass from './ChooseClass'
function AddNewClassesPage() {
    return (
        <View>
            <Text>hi this is addition of classes</Text>
            <View>
            <TouchableOpacity style={styles.button} onPress={()=>console.log('hiiii')}>
                <View>
                    <Text style={styles.Class}>+ Add new Class</Text>
                </View>
                {/* <ChooseClass/> */}
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default AddNewClassesPage
const styles=StyleSheet.create({
button:{
    backgroundColor:"#1F85FF",
    width:152,
    height:48,
    borderRadius:40,
    justifyContent:'center',
    display:'flex',
},
Class:{
    color:'white',
    fontFamily:'Roboto',
    fontWeight:'500',
    fontSize:16,
    marginLeft:16
}
})