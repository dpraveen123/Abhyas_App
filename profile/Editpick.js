import React, { Component } from 'react';
import { FlatList, Alert,View,Text, StyleSheet,ScrollView } from 'react-native';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import Edit from '../assets/edit'
import Drop from '../assets/drop';
import { TouchableOpacity } from 'react-native'; 
import New from './new'   ;

export default class Editpick extends React.Component {

// export default class Editpick extends React.Component {
  
  render() {
    console.log('hiii')
    return (

      
      <ScrollView>
      <MenuProvider  
      style={{paddingTop:10,
        // paddingright:-0
      }}
      >
      <Menu style={styles.Menu} onSelect={value => alert(`Selected number: ${value}`)}>
  {/* <MenuTrigger text='Select option' /> */}
  <MenuTrigger >
    <Edit />
  </MenuTrigger>
  <MenuOptions 
  // style={{height:100,width:200,}}
  >
    <MenuOption  value={1} text='Edit Class' />
    <MenuOption value={2} text='Delete Class' />
    <MenuOption value={3} text='Add Section'/>    
  </MenuOptions>
</Menu>
</MenuProvider>
</ScrollView>
);
 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 1,
  },
  Menu:{
    paddingLeft:10,
    paddingBottom:65,
    // backgroundColor:'white'
  }
});


 




// {/* <Menu onSelect={value => alert(`Selected to ${value}`)}>
//   {/* <MenuTrigger 
//   text='Section'
//    /> */}
// //    <MenuTrigger>
// //    <Edit />
// //    </MenuTrigger>
// //   <MenuOptions>
// //     <MenuOption value={"edit"} text='Edit Class' />
// //     <MenuOption value={"delete"} text='Delete Class' >
     
// //     </MenuOption>
// //     <MenuOption value={"add section"}  text='Add Section' />
// //   </MenuOptions>
// // </Menu> */}


