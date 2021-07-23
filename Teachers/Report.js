import React, { Component } from 'react'
import { Text, View,Button, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import store from '../redux'
import Attendance from '../attendence';
// import { Button, View, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RadioForm from "react-native-simple-radio-button";

class Report extends Component {
render() {
  console.log('props is',this.props.props.route.params);
    return (
      <View>
         {/* return ( */}
     <View>
       <TouchableOpacity >
     <Attendance props={this.props.props}/>
     </TouchableOpacity>
     </View>
      </View>
    )
  }
}

export default Report ;