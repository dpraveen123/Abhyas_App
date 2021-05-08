import React ,{useState} from 'react'
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
import Modal from 'react-native-modal';
import Info from '../Navigation/Icons/Info';
import ChooseClass from './ChooseClass'
import Page from './NoSectionsAdded'
import functions from '@react-native-firebase/functions';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Slider from '../profile/Tab'
function AddNewClassesPage() {
  // functions()
  //     .httpsCallable('getClass')("hloooo")
  //     .then(response => {
  //       console.log("sucsesfully added a new class bro",response.data)
  //     });
    return (
        // <View>
            // {/* <Text>hi this is addition of classes</Text> */}
              //  <View>
                 <Slider/>
              // {/* <ModalTester/> */}
              //  </View>/
            // {/* <View> */}
            // {/* <ModalTester/> */}
            // {/* <WrapperComponent/> */}
            // </View>
        // </View>
    )
}
function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    return (
      <View>
     
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
                <View>
                    <Text style={styles.Class}>+ Add new Class</Text>
                </View>
            </TouchableOpacity>
           <Modal isVisible={isModalVisible}>
             <TouchableOpacity onPress={toggleModal} style={{width:360,height:190,marginLeft:-20}}>
             </TouchableOpacity>
           <ChooseClass/>
          </Modal>
      </View>
    );
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