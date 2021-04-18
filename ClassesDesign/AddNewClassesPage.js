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
function AddNewClassesPage() {
    return (
        <View>
            <Text>hi this is addition of classes</Text>
            <View>
            <ModalTester/>
            {/* <WrapperComponent/> */}
            </View>
        </View>
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
            <Button title="Hide modal" onPress={toggleModal} />
          <ChooseClass/>
            {/* <Page/> */}
            {/* <Info/> */}
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