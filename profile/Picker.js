import React, { useState } from "react";
import { View,  StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

const Pick = () => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={styles.container}>
      <Picker
         mode="dropdown"
        selectedValue={selectedValue}
        style={{ height: 50, width:50,paddingLeft:7}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
      
                    <Picker.Item  label="Section:A" value="section A"/>
                    <Picker.Item label="Section:B" value="section B" />
                    <Picker.Item label="Section:C" value="section C"/>
                    
                
       </Picker>

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:3,
    paddingTop: 1,
    paddingLeft:220,
  

    // paddingTop: 30,
    // paddingLeft:10,
    // paddingTop:1,

  },
  pickerContent: {
    color: "white",
    backgroundColor: "transparent",
    paddingLeft:10,
    paddingBottom:10,
    width:100,
    height:10
 },
});

export default Pick;


// import React, { Component } from 'react';
// import { FlatList, Alert,View,Text, StyleSheet } from 'react-native';
// import {
//   MenuProvider,
//   Menu,
//   MenuTrigger,
//   MenuOptions,
//   MenuOption,
// } from 'react-native-popup-menu';
// import Edit from '../assets/edit'
// import Drop from '../assets/drop';
// import { TouchableOpacity } from 'react-native';    

// export default class Pick extends React.Component {
//   render() {
//     return (

    
       
     
//       <MenuProvider  >
//       <Menu style={styles.Menu} onSelect={value => alert(`Selected number: ${value}`)}>
//   {/* <MenuTrigger text='Select option' /> */}
//   <MenuTrigger >
//   <Drop />
//   </MenuTrigger>
  
//   <MenuOptions   >
//     <MenuOption value={1}  text='Edit Class' />
//     <MenuOption value={2}  text='Delete Class' />
//     <MenuOption value={3}  text='Add Section'/>
//     <MenuOption value={4}  text='Add Section'/>

//   </MenuOptions>
// </Menu>
// </MenuProvider>




// );
 
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 1,
//   },
//   Menu:{
//     paddingLeft:180,
//     paddingBottom:75,
//     paddingTop:20
  
    
    
  

//   }
  
// });


 

