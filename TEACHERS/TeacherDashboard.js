import React from 'react'
import { View, Text,TouchableOpacity,Image,StyleSheet, ScrollView } from 'react-native'
import Timetablesvg from './TimetableSvg'
import LinearGradient from 'react-native-linear-gradient';
import Timetable from '../Images/Timetable.jpg'
import Continue from '../Images/Continue'
import AllClasses from '../profile/Classes'
const TeacherDashboard=({navigation})=>{
    return (
        <View 
        // style={{backgroundColor:'white'}}
        >
            {/* <Text>hi teachers dashboard</Text> */}
            {/* <Timetablesvg/> */}
            <View
            style={{marginTop:-20}}
            >
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
              onPress={() => navigation.navigate('TeachersTimeTbl')}
                            // console.log('timetable was pressed')}
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
            <View style={{paddingTop:50,paddingLeft:15}}>
                <Text style={{fontWeight:'bold',fontSize:14}}>My Classes</Text>
            </View>
            <ScrollView>
            <View style={{marginTop:-10}}>
                <AllClasses/>
            </View>
            </ScrollView>
            </View>
            <View>

            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        width: 328,
            height: 160,
            // background: linear-gradient(247.88deg, #4860DC 15.42, #38A8FA 84.24),
            // backgroundColor: "#4860DC",
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
    image:{
        // opacity:0.5
        // background:'none'
        // marginLeft:-0
    },
    text:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:30,
        // paddingTop:-150,
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
export default TeacherDashboard