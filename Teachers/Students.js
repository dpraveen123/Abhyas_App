import React from 'react';
import { Text } from 'react-native';
import AllStudents from '../class-students/Students'
const Students = (props) => {
  // console.log(props.props.route.params)
  return (
    <AllStudents props={props.props}/>
  );
}

export default Students ;