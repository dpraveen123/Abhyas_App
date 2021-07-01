import React, { Component ,useState} from 'react';
import { Image, Text, TextInput } from 'react-native';
import { View, Button, StyleSheet, TouchableOpacity, Images, Modal } from 'react-native';
class Attendance extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          count:0
        }
 }
    render()
    {
        return(
            <View style={styles.reporttext}>
                <Text>Reports</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        reporttext:
        {
            fontSize:14,
            fontWeight:"500",
            width:'50vw',
            height:'20vh'

        }
    }



)
export default Attendance

