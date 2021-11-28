import React, { Component } from 'react';
import { FlatList, Alert,View,Text, StyleSheet,ScrollView } from 'react-native';
import {
  MenuProvider,
  Menu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from 'react-native-popup-menu';
import Edit from '../../../../assets/edit'
// import Drop from '../assets/drop';
import { TouchableOpacity } from 'react-native'; 
// import New from './new'   ;
import { connect } from 'react-redux';
import store from '../../../../redux'
class Editpick extends React.Component {
  render() {
    console.log('hiii')
    return (
      
<MenuProvider>
    <View>
        <Menu style={styles.Menu} onSelect={value => {
          if(value===1){
            this.props.changevisible()
            console.log("visible is",store.getState().changecontentvisbile)
          }
        }}>
  {/* <MenuTrigger text='Select option' /> */}
  <MenuTrigger  style={{width:20,height:20,backgroundColor:'red'}}>
    <Edit />
    {/* <Drop /> */}
  </MenuTrigger>
  
  <MenuOptions   >
    <MenuOption value={1}  text='Edit Class' />
    <MenuOption value={2}  text='Delete Class' />
    <MenuOption value={3}  text='Add Section'/>
    {/* <MenuOption value={4}  text='Add Section'/> */}
      
  </MenuOptions>
</Menu>
    </View>
</MenuProvider>




);
 
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
 
  //   // dispatching plain actions
  //   increment: () => dispatch({ type: 'INCREMENT' }),
  //   decrement: () => dispatch({ type: 'DECREMENT' }),
  //   reset: () => dispatch({ type: 'RESET' }),
  // details:(l)=>dispatch({type:'authdetails',payload:l})
  changevisible:()=>dispatch({type:'changevisible',payload:''})
  }
}
export default connect(null,mapDispatchToProps)(Editpick)
const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 1,
  },
  Menu:{
   marginLeft:250,
    marginBottom:70,
    // paddingTop:20,
    // marginLeft:20,
    elevation:5,
//     height:300,
// width:300,
// position:'absolute'
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


