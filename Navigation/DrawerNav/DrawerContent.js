// import React, { PropTypes, Component } from 'react';
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import DrawerIcon from '../Icons/DrawerIcon'
import Abhyas from '../Icons/Abhyas'
import { Avatar, Drawer, Title } from 'react-native-paper';
 function DrawerContent(props) {
    return (
        <View style={{flex:1}}>
           <DrawerContentScrollView {...props} >
               <Drawer.Section>
               <View style={styles.direction}>
                   <View style={styles.DrawerIcon}>
                   <DrawerIcon />
                   </View>
                   <View style={styles.Abhyas}>
                   <Abhyas/>
                   </View>
                   {/* <Text>Main Content</Text> */}
               </View>
               </Drawer.Section>
           </DrawerContentScrollView>
           {/* <Drawer.Section>
               <DrawerItem 
            //    icon={()=>{
            //        <
            //    }}
            //    label="Dashboard"
            />
           </Drawer.Section> */}
       </View>
    )
}
const styles=StyleSheet.create({
    direction:{
      flexDirection:'row'
    },
    DrawerIcon:{
        paddingLeft:16,
        paddingTop:34

    },
    Abhyas:{
        paddingTop:40,
        paddingLeft:8
    }
})
export default DrawerContent