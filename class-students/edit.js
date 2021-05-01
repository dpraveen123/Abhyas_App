import React, { Component } from 'react';
import { FlatList, Alert,View,Text, StyleSheet } from 'react-native';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import Edit from '../assets/edit';
import Svgpages from '../assets/Svg';




export default class Editpickker extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.state = { visible: false };
  }

  render() {
    return (

    
       
     
      <MenuProvider  >
      <Menu style={styles.Menu} onSelect={value => alert(`Selected number: ${value}`)}>
  {/* <MenuTrigger text='Select option' /> */}
  <MenuTrigger >
    <Svgpages />
  </MenuTrigger>
  
  <MenuOptions   >
    <MenuOption value={1} onSelect={() => this.setState({ visible: false })} text='Close modal' text='Edit Class' />
    <MenuOption value={2}  text='Delete Class' />
    <MenuOption value={3}  text='Add Section'/>
    

  </MenuOptions>
</Menu>
</MenuProvider>




);
 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 1,
  },
  Menu:{
    paddingLeft:250,
    paddingBottom:70,
    paddingTop:20,
    marginLeft:20
    
  
    
    
  

  }
  
});
