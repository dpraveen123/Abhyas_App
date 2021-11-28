import React, { Component ,useState} from 'react';
import { Image, Text, TextInput } from 'react-native';
import { View, Button, StyleSheet, TouchableOpacity, Images, Modal } from 'react-native';
// import Vector from './vector.jpg'
import { NavigationContainer } from '@react-navigation/native';
import AntIcon from "react-native-vector-icons/AntDesign";
import { Header } from 'react-native/Libraries/NewAppScreen';
import Profile from '../../../../mywork/Profile'
import Search from '../../../../assets/Search'
function Teacher({props}) {
    console.log(props.navigate,"props from teachers bro")
    return (

        <View style={{backgroundColor:'white'}}>
            <View style={{ marginLeft: 20 }}>


            </View>
            <View style={{ marginLeft: 80, marginTop: -33 }}>
                <Text style={{ fontSize: 24, fontWeight: "500" }}>Teachers</Text>
            </View>
            <View>
                <TextInput style={styles.input} placeholder="🔍 Search teachers...">
                    {/* <Image source={Vector}style={{margin:5,size:30,backgroundColor:" #657786"}}></Image> */}
                </TextInput>
            </View>


            <View style={{ marginTop: 30, marginLeft: 75 }}>
                <Text style={{ fontSize: 20, color: 'gray',fontWeight:'bold' }}>No Teachers added yet!</Text>
            </View>
            <View style={{ marginTop: 15, marginLeft: 129 }}>
                <Text style={{ fontSize: 16, color: 'skyblue' }}>Add Teachers</Text>
            </View>
            {/* <View>
                <ModalTester props={props} />
            </View> */}
            <View style={styles.teacher}>

                <TouchableOpacity style={{ borderRadius: 40, backgroundColor: '#1F85FF', width: 169, height: 48,elevation:4, fontWeight: "500", padding: 12, marginTop: -20, marginLeft: 15 }}
                onPress={()=>{
                    props.navigate('Add Teachers')
                }}
                >

                    <Text style={{ fontSize: 16, color: "#FFFFFF", width: 137.75, height: 24 }}> +Add new Teacher</Text>
                </TouchableOpacity>

            {/* <Modal isVisible={isModalVisible}>
             <TouchableOpacity onPress={toggleModal} style={{width:360,height:190,marginLeft:-20}}>
             </TouchableOpacity>
            <ChooseClass/>
            </Modal> */}

            </View>



        </View>


    )
}

// function ModalTester(props) {
//     console.log(" i am from modal",props)
//     const [isModalVisible, setModalVisible] = useState(false);
//     const toggleModal = () => {
//         setModalVisible(!isModalVisible);
//     };
//     return (
//         <View>
//             <TouchableOpacity style={{ borderRadius: 40, backgroundColor: '#1F85FF', width: 169, height: 48, fontWeight: "500", padding: 12, marginTop: -20, marginLeft: 15 }} 
//             onPress={()=>{
//                 props.navigation.navigate('addteacher')
//             }}>
//                 <View>
//                     <Text style={{ fontSize: 16, color: "#FFFFFF", width: 137.75, height: 24 }}>+Add new Teacher</Text>
//                 </View>
//             </TouchableOpacity>
//             {/* <Modal isVisible={isModalVisible}> */}
//                 {/* <TouchableOpacity onPress={toggleModal} style={{ width: 360, height: 190, marginLeft: -20 }}>
//                 </TouchableOpacity> */}
//                 {/* <Profile /> */}
//             {/* </Modal> */}
//         </View>
//     );
// }




const styles = StyleSheet.create(
    {
        teacher:
        {
            width: 199,
            height: 48,
            marginLeft: 80,
            marginTop: 350,


        },
        input:
        {
            borderWidth: 1,
            borderColor: '#777',
            padding: 16,
            marginLeft: 15,
            marginTop: 25,
            width: 328,
            height: 50,
            backgroundColor: '#F5F8FA',
            borderRadius: 40,
            fontSize: 16,
            color: '#657786',
            fontStyle: 'normal',
            fontWeight: 'normal',
        }
    })
export default Teacher;