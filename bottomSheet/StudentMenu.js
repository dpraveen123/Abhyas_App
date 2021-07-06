import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Image1 from './profileImage.png';
import EditIcon from './editIcon.js';
import DeleteIcon from './deleteIcon.js';
export default class StudentMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      rollNo:''
    }
  }
  componentDidMount=()=>{
    console.log(this.props.props.nav.props.route.params,"data is")
    this.setState({name:this.props.props.studentData.name,rollNo:this.props.props.studentData.rollNo})

  }
  render() {
    return (
      <View>
        <View style={styles.Component}>
          <Image source={Image1} />
          <Text style={styles.name}>{this.state.name}</Text>
          <Text style={styles.rollNo}>Roll no. {this.state.rollNo}</Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#AAB8C2',
            width: '100%',
            marginTop: 14,
          }}
        />
        <TouchableOpacity style={styles.iconSection}
        onPress={()=>{
          this.props.props.nav.props.navigation.navigate({name:'EditProfile',params:{class:this.props.props.nav.props.route.params,studentData:this.props.props.studentData}})
        }}
        >
          <EditIcon />
          <Text style={styles.iconText}>Edit student details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconSection}>
          <DeleteIcon />
          <Text style={styles.iconText}>Delete Student</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Component: {
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#262626',
    lineHeight: 24,
  },
  rollNo: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    color: '#657786',
    lineHeight: 16,
  },
  line: {
    borderWidth: 1,
    borderColor: '#AAB8C2',
    backgroundColor: 'red',
    width: '100%',
    height: 1,
    borderStyle: 'solid',
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 18,
    marginTop:35,
  },
  iconText: {
    marginLeft: 12,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#14171A',
    lineHeight: 20,
  },
});
