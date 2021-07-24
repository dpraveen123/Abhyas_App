import React, { Component, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import Svgpage from './Svg';
import Svgpage2 from './assets/svg2';;
import RBSheet from 'react-native-raw-bottom-sheet';
import Pie from 'react-native-pie'
import RadioButton from './RadioButton';
import Example from './Example';
import Switchbutton from './switchbutton'
import firestore from '@react-native-firebase/firestore';
import store from './redux'
class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: false,
      dataB:[],
      sectionUid:'',
      count:[],
      totalCount:0,
      totalPresentAvg:0,
      totalAbsentAvg:0,
      percentagePresent:0,
      percentageAbsent:0,
      percentageEnable:false,
      displayAbsent:0,
      displayPresent:0
    };
  }
  componentDidMount=()=>{
    this.state.dataB=this.props.props.route.params
    this.setState({dataB:this.state.dataB})
    firestore().collection('Schools').doc(store.getState().authdetails.SchoolID).collection('classes').doc(this.props.props.route.params.class).get()
    .then(l=>{  
      console.log("response is",l.data().sections[this.props.props.route.params.section])
      this.state.sectionUid=l.data().sections[this.props.props.route.params.section];
      this.setState({sectionUid:this.state.sectionUid})
      console.log(this.state.sectionUid,"i am form attendence.js-----------///")
      this.gettingTotalCount()
      })     
}

  Dropdown = () => {
    console.log('hello');
    this.setState({
      x: true,
    });
  };
  closeSheet = (x) => {
    this.RBSheet.close();
    console.log("parameter is", x)
  }
  Dropup = () => {
    console.log('hi');
    this.setState({
      x: !this.state.x,
    });
  };
  gettingData=(k)=>{
   console.log('updated data is',k);
   this.state.totalAbsentAvg=k.absent
   this.state.totalPresentAvg=k.present
   this.setState({
     totalAbsentAvg:this.state.totalAbsentAvg,
     totalPresentAvg:this.state.totalPresentAvg
   })
   this.calculatePercentage()
  //  this.finalDisplay()
  }
  gettingTotalCount=()=>{
    console.log('this is gettingtotalcount');
    firestore()
    .collection('Sections')
    .doc(this.state.sectionUid)
    .onSnapshot(documentSnapshot => {
      console.log('User data: ', documentSnapshot.data().students);
      this.state.count=Object.keys(documentSnapshot.data().students)
      this.state.totalCount=this.state.count.length
      this.setState({
        totalCount:this.state.totalCount
      })
      console.log('./././',this.state.totalCount)
    });
  }
  calculatePercentage=()=>{
 this.state.percentagePresent=((this.state.totalPresentAvg)*100)/this.state.totalCount
 this.state.percentageAbsent=((this.state.totalAbsentAvg)*100)/this.state.totalCount
 this.setState({
   percentageAbsent:this.state.percentageAbsent,
   percentagePresent:this.state.percentagePresent
 })
 console.log('final percentage is',((this.state.totalAbsentAvg)*100)/this.state.totalCount,((this.state.totalPresentAvg)*100)/this.state.totalCount);
  }
  checkingSwitchbutton=(k)=>{

this.state.percentageEnable=k.value
this.setState({
  percentageEnable:this.state.percentageEnable
})
console.log('checking broo',this.state.percentageEnable);
// this.finalDisplay()
  }
// finalDisplay=()=>{
// if(this.percentageEnable)
// {
//   this.state.displayAbsent=this.state.percentageAbsent
//   this.state.displayPresent=this.state.percentagePresent
//   this.setState({
//     displayPresent:this.state.displayPresent,
//     displayAbsent:this.state.displayAbsent
//   })
// }
// else{
//   this.state.displayAbsent=this.state.totalAbsentAvg
//   this.state.displayPresent=this.state.totalPresentAvg
//   this.setState({
//     displayAbsent:this.state.displayAbsent,
//     displayPresent:this.state.displayPresent
//   })
// }
//   }
  render() {
    const chart_wh = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']
    // console.log('im from attendance broo',this.props.props);
    return (
      <View style={styles.ganesh}>
        <View style={styles.ganesh}>
          <View style={styles.Attendance_section}>
            <View>
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['#3890FA', '#57D5C3']}
                style={{ width: 8, height: 44, right: 25 }}></LinearGradient>
            </View>
            <Text style={styles.headertext1}>Attendance</Text>
            <TouchableOpacity style={styles.upArrow} onPress={this.Dropup}>
              {this.state.x === false ?
                <Svgpage />
                :
                <Svgpage2 />
              }
            </TouchableOpacity>
          </View>
          {this.state.x === true ?
            <View>
              <TouchableOpacity style={{ width: 115, height: 32, borderWidth: 1, borderColor: '#E1E8ED', borderRadius: 4, marginLeft:10}} onPress={() => this.RBSheet.open()}>
                <Text style={{ marginTop: 8, marginLeft: 10, fontSize: 14 }}>Today</Text>
                <View style={{ marginLeft: 80, marginTop: -12, height: 9.28, width: 4.64 }}>
                  <Svgpage />
                </View>
              </TouchableOpacity>
              <View style={{marginLeft:50}}>
                    <Switchbutton 
                    checkingswitchbutton={this.checkingSwitchbutton}
                    />
                  </View>
              <RBSheet
                ref={ref => {
                  this.RBSheet = ref;
                }}
                height={370}
                openDuration={250}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                  container: {
                    borderRadius: 20
                  }
                }}
              >
                <View>
         <Text style={{ marginTop: 14, marginLeft: 120.5, fontSize: 20 }}>Select Time Period</Text>
                  <View style={{ width: 400, borderWidth: 1, borderColor: '#E1E8ED', marginTop: 14 }}></View>
                </View>
                <View>
                  <Example  props={this.props.props} gettingdata={this.gettingData}/>
                </View>
                <View>
                  <RadioButton close={this.closeSheet} props={this.props.props} gettingdata={this.gettingData}/>
                </View>
              </RBSheet>
              <Text style={{ fontSize: 18, marginLeft: 310, marginTop: -28, fontWeight: 'normal', color: '#1F85FF' }}>%</Text>
              <View
                style={{ marginTop: 230, position: 'absolute', paddingLeft: 10 }}>
                <View style={styles.container}>
                  <View
                    style={{
                      paddingVertical: 15,
                      flexDirection: 'row',
                      width: 350,
                      justifyContent: 'center',
                      marginBottom: 500,
                      marginTop: -130,
                      alignContent: 'center'

                    }}
                  >
                    <View style={{ marginLeft: 110.5 }}>
                      <TouchableOpacity>

                        <Pie
                          radius={80}
                          sections={[
                            {
                              percentage: this.state.percentageAbsent,
                              color: '#FF7B93',
                            },
                            {
                              percentage: this.state.percentagePresent,
                              color: '#1F85FF',
                            }
                          ]}
                          strokeCap={'butt'}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: -210, marginTop: 200 }}>
                          {this.state.percentageEnable=== true ? this.state.percentagePresent.toFixed(2) :this.state.totalPresentAvg.toFixed(2)}
                          {/* {this.state.displayPresent} */}
                          {/* {this.state.totalPresentAvg} */}
                          </Text>
                        <Text style={{ color: '#1F85FF', marginLeft: -230, marginTop: 4, width: 24, height: 24 }}>⬤</Text>
                        <Text style={{ fontWeight: '300', fontSize: 14, marginLeft: -213, marginTop: -22 }}>Present</Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: -90, marginTop: 200 }}>
                          {this.state.percentageEnable===true? this.state.percentageAbsent.toFixed(2) :this.state.totalAbsentAvg.toFixed(2)}
                        {/* {this.state.displayAbsent} */}
                          {/* {this.state.percentageAbsent} */}
                          {/* {this.state.totalAbsentAvg} */}
                          </Text>
                        <Text style={{ color: '#FF7B93', marginLeft: -119, marginTop: 4, width: 24, height: 24 }}>⬤</Text>
                        <Text style={{ fontWeight: '300', fontSize: 14, marginLeft: -103, marginTop: -22 }}>Absent</Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop: 200 }}>{this.state.totalCount}</Text>
                        <Text style={{ color: '#1F85FF', marginLeft: -15, marginTop: 4, width: 24, height: 24 }}>⬤</Text>
                        <Text style={{ fontWeight: '300', fontSize: 14, marginRight: 10, marginTop: -24 }}>Total Students</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{ color: '#1f85ff', marginTop: 270, marginLeft: -326, fontSize: 16 }}>List View</Text>
                      <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'white', }}>
                        <Text style={{ color: '#1f85ff', marginTop: 270, marginLeft: -326, fontSize: 16 }}>List View</Text>
                      </TouchableOpacity>
                    </View>
                    {/* <View style={{marginTop:-30,marginRight:35}}>
                     <Switchbutton></Switchbutton>
                    </View> */}

                  </View>
                 
                </View>
               
              </View>
            </View>
            :
            <View>
              
            </View>
          }
        </View>
      </View>
    );
  }
}
export default Attendance;

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', height: 1050 },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
  headertext: {
    fontSize: 20,
    fontWeight: '500',
    color: '#14171A',
    marginTop: 25,
    marginLeft: 10,
  },
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    // backgroundColor: '#E5E5E5',
  },
  ganesh: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  Attendance_section: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  headertext1: {
    fontSize: 20,
    fontWeight: '500',
    color: '#14171A',
    right: '110%',
  },
  box1: {
    width: '3%',
    height: 40,
    right: '25%',
    backgroundColor: '#3890FA',
  },
  downArrow: {
    height: '60%',
    width: '10%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  upArrow: {
    height: '60%',
    width: '10%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  header2: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  headertext2: {
    fontSize: 20,
    fontWeight: '500',
    color: '#14171A',
    marginTop: 17,
    marginLeft: 10,
  },
  box2: {
    width: '3%',
    height: '60%',
    backgroundColor: '#F879C7',
    marginTop: 10,
    marginLeft: 10,
  },
  image1: {
    marginTop: 60,
    marginLeft: 140,
    width: 60,
    height: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});