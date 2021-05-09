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
import { shadow } from 'react-native-paper';
import Svg, { G, Path } from 'react-native-svg'
import Classroom from '../Images/Classroom.jpg'
import Teacher from '../Images/teacher.jpg'
import Student from '../Images/students.jpg'
import Graph from '../Images/Graph.jpg'
import Timetable from '../Images/Timetable.jpg'
import Continue from '../Images/Continue'
import Rectangler from '../Images/Rectangle'
const AdminDashboard = ({ navigation }) => {
  return (
    <View
      style={{ backgroundColor: 'white' }}
    >
      <ScrollView >
        <View>
          <View style={{ marginLeft: 16, marginTop: 20 }}>
            <Text style={{ fontSize: 16 }}>Admin Dashboard</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Classes')}
                style={{ width: "47.09%", height: 130, backgroundColor: "white", borderRadius: 15, elevation: 5, justifyContent: "center", alignItems: "center", border: 5, marginLeft: 7, marginTop: 12, borderWidth: 1, borderColor: "#E1E8ED", shadowColor: "black" }}>
                <Image source={Classroom} style={{ marginLeft: 5 }}>
                </Image>
                <Text style={{ fontSize: 14 }}>Classes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Teachers')}
                style={{ width: "47.09%", height: 130, backgroundColor: "white", borderRadius: 15, elevation: 5, justifyContent: "center", alignItems: "center", marginLeft: 8, borderWidth: 1, borderColor: "#E1E8ED", shadowColor: "black", marginTop: 12, marginLeft: 8, marginRight: 16 }}>
                <Image source={Teacher} style={{ marginLeft: 5 }}>
                </Image>
                <Text style={{ fontSize: 14 }}>Teachers</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Reports')}
                style={{ width: "47.09%", height: 130, backgroundColor: "white", borderRadius: 15, elevation: 5, justifyContent: "center", alignItems: "center", border: 5, marginLeft: 7, marginTop: 8, borderWidth: 1, borderColor: "#E1E8ED", shadowColor: "black" }}>
                <Image source={Graph} style={{ marginLeft: 5 }}>
                </Image>
                <Text style={{ fontSize: 14 }}>Reports</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Students')}
                style={{
                  width: "47.09%",
                  height: 130,
                  backgroundColor: "white",
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 8,
                  borderWidth: 1,
                  borderColor: "#E1E8ED",
                  shadowColor: "black",
                  elevation: 5,
                  marginTop: 8,
                  marginLeft: 8,
                  marginRight: 16
                }}>
                <Image source={Student} style={{ marginLeft: 5 }}>
                </Image>
                <Text style={{ fontSize: 14 }}>Students</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
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
const styles=StyleSheet.create({
  card:{
    width: 328,
        height: 160,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
        borderWidth: 1,
        borderColor: "#4860DC",
        shadowColor: "black",
        marginTop: 45.15,
        marginRight: 18
},
text:{
  color:'white',
  fontSize:16,
  fontWeight:'bold',
  paddingLeft:30,
},
column:{
  marginLeft:30,
  width:130,
  paddingTop:10
},
teachertext:{
  color:'white',
},
continue:{
  backgroundColor:'white',
  width:148,
  height:36,
  justifyContent:'center',
  borderRadius:120,
}
})
export default AdminDashboard