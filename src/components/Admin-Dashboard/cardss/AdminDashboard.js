import React, { useState } from 'react';
import {
  Button, 
  Text, 
  TextInput, 
  View, 
  Image,
  TouchableOpacity,
  ImageBackground, 
  ScrollView,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Classroom from '../../../assets/Images/Classroom.jpg'
import Teacher from '../../../assets/Images/teacher.jpg'
import Student from '../../../assets/Images/students.jpg'
import Graph from '../../../assets/Images/Graph.jpg'
import Timetable from '../../../assets/Images/Timetable.jpg'
import Continue from '../../../../Images/Continue'
import styles from './AdminDashboardCss'
// import Rectangler from '../../../I/mages/Rectangle'
const AdminDashboard = ({ navigation }) => {
  return (
    <View
      style={{ backgroundColor: 'white' }}
    >
      <ScrollView >
        <View>
          <View >
            <Text style={styles.AdminDashboardText}>Admin Dashboard</Text>
          </View>
          <View>
            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Classes')}
                style={styles.classesCard}>
                <Image source={Classroom} style={{ marginLeft: 5 }}>
                </Image>
                <Text style={styles.cardText}>Classes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Teachers')}
                style={styles.teachersCard}>
                <Image source={Teacher} style={{ marginLeft: 5 }}>
                </Image>
                <Text style={styles.cardText}>Teachers</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Reports')}
                style={styles.reportsCard}>
                <Image source={Graph} style={{ marginLeft: 5 }}>
                </Image>
                <Text style={styles.cardText}>Reports</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Students')}
                style={styles.studentsCard}>
                <Image source={Student} style={{ marginLeft: 5 }}>
                </Image>
                <Text style={styles.cardText}>Students</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width:'100%',alignItems:'center',marginTop:17 }}>
            <View style={{width:'89%',height:1.7,backgroundColor:'#E1E8ED'}}></View>
          </View>
          <View style={{elevation:15}}>
          <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#38A8FA','#4860DC']} 
                 style={styles.card}
               >
                <View style={{flexDirection:'row'}}>
                    <Image source={Timetable} 
                       style={styles.image}
                       />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.text}>Time table</Text>
                        <View style={styles.column}>
                          <Text style={styles.teachertext}>timetable of your teachers</Text>
                        </View>
                        <View style={{paddingLeft:30,paddingTop:30}}>
                        <TouchableOpacity style={styles.continue} 
              onPress={() => navigation.navigate('Timetable')}
                            >
                            <View style={{flexDirection:'row'}}>
                              <Text style={{color:'#38A8FA',paddingLeft:15}}>
                                View Timetable
                              </Text>
                              <View style={{paddingLeft:5,paddingTop:3}}>
                                 <Continue />
                              </View>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
             </LinearGradient>
             </View>
            </View>
      </ScrollView>

    </View>

  );
}

export default AdminDashboard