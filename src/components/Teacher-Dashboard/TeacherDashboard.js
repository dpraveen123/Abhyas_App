import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import Timetablesvg from '../../../TEACHERS/TimetableSvg'
import LinearGradient from 'react-native-linear-gradient';
import Timetable from '../../../Images/Timetable.jpg'
import Continue from '../../../Images/Continue'
import { Card } from 'react-native-elements';
import Edit from '../../../assets/edit';
const IC_ARR_DOWN = require('../../../assets/dropup.png');
const IC_ARR_UP = require('../../../assets/dropdown.png');
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';
import styles from './TeacherDashboardCss'
import {
    MenuProvider,
    Menu,
    MenuTrigger,
    MenuOptions,
    MenuOption,
} from 'react-native-popup-menu';
// import AllClasses from '../profile/Classes'
class TeacherDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darray: [],
            darray1: [],
            data : [],
            colors:[ 
                {
                class: '1st class',
                color1:"#9A56E1",
                color2:"#F879C7"
              },
              {
                class: '2nd class',
                color1:"#F28436",
               color2:"#FEE468"
              },
              {
                class: '3rd class',
                color1:"#3890FA",
               color2:"#57D5C3"
              },
              {
                class: '4th class',
                color1:'#E0435E',
               color2:'#FF7B93'
              },
              {
                class: '5th class',
                color1:'#9E37CA',
                color2:'#D92E9F'
              },
              {
                class: '6th class',
                color1:'#126DD8',
                color2:'#50B8FF'
              },
              {
                class: '7th class',
                color1:'#E0435E',
                color2:'#FF7B93'
              },
              {
                class: '8th class',
                color1:"#3890FA",
                color2:"#57D5C3"
              },
              {
                class: '9th class',
                color1:"#F28436",
                color2:"#FEE468"
              },
              {
                class: '10th class',
                color1:"#9A56E1",
                color2:"#F879C7"
               
              }
              ] ,
        }
    }
    componentDidMount = () => {
        // const user = auth().currentUser.phoneNumber;
        // firestore()
        //     .collection('Users').doc(user).collection('Classes').doc("1st class")
        //     // .get()
        //     // .then((doc) => {
        //     //     console.log('User added!', doc.data());
        //     // });
        //     .get()
        //     .then(snapshot=>{
        //         snapshot.forEach(snaps=>{
        //             console.log(snaps["_queryOptions"].collectionId);  // GET LIST OF ALL COLLECTIONS
        //         })
        //     })


            // .then((querySnapshot) => {
            //     querySnapshot.forEach((doc) => {
            //         // doc.data() is never undefined for query doc snapshots
            //         console.log( " => ", doc.data());
            //     });
            // })
        // user = FirebaseAuth.getInstance().getCurrentUser();

        // console.log("userphonenumber", user);
        var details={
            User :auth().currentUser.phoneNumber
        }
       
        // console.log(this.state.darray, "is darray yy")
        
        functions()
        .httpsCallable('getTeacherdetails')(details)
        .then((response) => {
        //   console.log("sucsesfully getting Teacher details dudee to fire functions from teacher", response.data)
          this.state.data = response.data;
          this.setState({data:this.state.data});
        //   console.log(response.data,"is data")
        });
        this.state.data.map((i, l) => {
            // console.log("i and l are",i,l)
            this.state.darray[l] = false;
        })
    }


    
    openDrop = (i) => {
        // console.log(i, "drop clicked")
        this.state.darray[i] = !this.state.darray[i];
        // this.setState({darray:this.state.darray})
        this.state.darray1 = this.state.darray;
        this.setState({ darray1: this.state.darray1 })
        // console.log(this.state.darray1)
    }
    selectSection=(c,s)=>{
        var x={class:c,section:s}
        // console.log("you clicked the sectin  is",x)
        this.props.navigation.navigate({name:'Section',params:x})
    }
    render() {
        return (
            <ScrollView
            // style={{backgroundColor:'white'}}
            >
                {/* <Text>hi teachers dashboard</Text> */}
                {/* <Timetablesvg/> */}
                <View
                    style={{ marginTop: -20 }}
                >
                    <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#38A8FA', '#4860DC']}
                        style={styles.card}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={Timetable}
                                style={styles.image}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.text}>Time table</Text>
                                <View style={styles.column}>
                                    <Text style={styles.teachertext}>timetable of your teachers</Text>
                                </View>
                                <View style={{ paddingLeft: 30, paddingTop: 30 }}>
                                    <TouchableOpacity style={styles.continue}
                                        onPress={() => this.props.navigation.navigate('TeachersTimeTbl')}
                                    // console.log('timetable was pressed')}
                                    >
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: '#38A8FA', paddingLeft: 15 }}>
                                                View Timetable
                              </Text>
                                            <View style={{ paddingLeft: 5, paddingTop: 3 }}>
                                                <Continue />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                    <View style={{ paddingTop: 50, paddingLeft: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>My Classes</Text>
                    </View>
                    <ScrollView>
                        <View >
                            {
                                this.state.data.map((l, i) => {
                                    var x=this.state.colors.find(function(post, index) {
         if( l.class==post.class )
      return true;
        });
  {/* console.log("okk",x,"found")
   */}
  var color1=x.color1;
  var color2=x.color2;
  var classno=parseInt(x.class)
                                    return (
                                        <View style={{ borderRadius: 15 }} key={i}>
                                            <Card
                                                containerStyle={{ borderRadius: 8 }}
                                            >
                                                <View style={{ height: 70 }}>
                                                    {/* <Text>hlooo</Text> */}
                                                    <View style={{ flexDirection: 'row' }}>
                                                    <View style={{width:64,height:64,backgroundColor:'whitesmoke'}}>
                 <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={[color1,color2]} style={styles.gradient1}>
                   <Text style={styles.name}>{classno}</Text>
                              
                            </LinearGradient>
                 
                 </View>
                                                        <View style={{ marginLeft: 16 }}>
                                                            <Text style={{ fontSize: 20, lineHeight: 28 }}>{l.class}</Text>
                                                            <Text style={{ color: '#AAB8C2', fontSize: 14, lineHeight: 28, marginTop: 0 }}>{l.sections.length} Sections</Text>
                                                        </View>
                                                        <TouchableOpacity style={{ justifyContent: 'center', marginLeft: 80 }}
                                                            onPress={() => {
                                                                this.openDrop(i)
                                                            }}
                                                        >
                                                            <View >
                                                                <Image source={

                                                                    this.state.darray1[i] === true ? IC_ARR_DOWN : IC_ARR_UP
                                                                } style={{ width: 10, height: 10 }}></Image>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <View style={{ justifyContent: 'center', marginLeft: 14, width: 1, height: '100%', borderWidth: 0.5, borderColor: '#E1E8ED' }}>
                                                       
                                                        </View>
                                                        <View style={{ justifyContent: 'center', marginLeft: 14 }}>
                                                            <Edit />
                                                        </View>
                                                    </View>

                                                </View>

                                            </Card>

                                            <View style={{ marginLeft: 15, width: '91.5%', backgroundColor: 'white' }}>
                                                {
                                                    l.sections.map((k,key) => {
                                                        return (

                                                            <View key={key}>
                                                                {
                                                                    this.state.darray1[i] === true ? <View>
                                                             <TouchableOpacity 
                                                             onPress={()=>{
                                                                this.selectSection(l.class,k)
                                                                //  this.props.navigation.navigate('Section')
                                                             }}
                                                             >
                                                             <View style={{ marginTop: 12, marginLeft: 10 }}>
                                                                            <Text style={{ fontSize: 16, fontWeight: '400', height: 30 }}>Section {k}</Text>

                                                                        </View>
                                                             </TouchableOpacity>
                                                                    </View> : <View>
                                                                    </View>

                                                                }
                                                            </View>
                                                        )
                                                    })
                                                }

                                            </View>

                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
                <View>

                </View>
            </ScrollView>
        )
    }
}

export default TeacherDashboard