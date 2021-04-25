import React, { Component } from 'react';
import { FlatList, Alert,View,Text, StyleSheet } from 'react-native';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import Edit from '../assets/edit'
import Drop from '../assets/drop';

// Menu.debug = true;

// const data = new Array(3)
//   .fill(0)
//   .map((a, i) => (
//     {
//        key: 1, value: 'section A',
//        key: 2, value: 'section B',
//        key: 3, value: 'section C'
  
//   }
   

    
    

export default class Editpick extends React.Component {
  render() {
    return (

      
      
      <MenuProvider  style={{paddingTop:10,paddingLeft:50}}>
      <Menu  onSelect={value => alert(`Selected number: ${value}`)}>
  {/* <MenuTrigger text='Select option' /> */}
  <MenuTrigger >
    <Edit />

  </MenuTrigger>
  <MenuOptions style={{height:100,width:200}}>
    <MenuOption value={1} text='One' />
    <MenuOption value={2}>
      <Text >Two</Text>
    </MenuOption>
    <MenuOption value={3} disabled={true} text='Three' />
  </MenuOptions>
</Menu>
</MenuProvider>

);
 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
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

