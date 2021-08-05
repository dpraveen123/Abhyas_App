import React, {Component, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
import SwipeButton from 'rn-swipe-button';
import Svgpage from './Svg';
import Svgpage2 from './assets/svg2';
import {Icon} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
//import Example from './Example';
import Example1 from './calendar';
import Calender from './calendar';
import RadioButton from './RadioButton';
import RadioForm, { RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { valueToNode } from '@babel/types'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { values } from 'lodash'
import { Value } from 'react-native-reanimated'
import { Calendar } from 'react-native-calendars'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Example from './Example';
class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: false,
    };
  }
  Dropdown = () => {
    console.log('hello');
    this.setState({
      x: true,
    });
  };
  Dropup = () => {
    console.log('hi');
    this.setState({
      x: !this.state.x,
    });
  };
  componentDidMount=()=>{
    
  }
  render() {
    return (
      <View style={styles.ganesh}>
        {/* <View style={styles.header}>
          <Text style={styles.headertext}>Reports</Text>
        </View> */}
        <View style={styles.ganesh}>
          <View style={styles.Attendance_section}>
            <View>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#3890FA', '#57D5C3']}
                style={{width: 8, height: 44, right: 25}}></LinearGradient>
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
               {/* <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:20}}>Today</Text>
                  </View> */}
                  <TouchableOpacity style={{ width: 115, height: 32, borderWidth: 1, borderColor: '#E1E8ED', borderRadius: 4, marginTop: 17, marginLeft: 16, }} onPress={() => this.RBSheet.open()}>
                        <Text style={{ marginTop: 8, marginLeft: 8, fontSize: 14 }}>Today</Text>
                        <Svgpage style={{ marginTop: -10, marginLeft: 90 }} />
                        {/* <Image source={img1} style={{ marginTop: -10, marginLeft: 90 }}></Image> */}
                    </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => this.RBSheet.open()}
                style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center'}}>
                <Svgpage />
              </TouchableOpacity> */}
              <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={370}
                        openDuration={250}
                        customStyles={{
                            container: {
                                borderRadius: 20
                            }
                        }}
                    >
                        <View>
                            <View style={{ width: 87, height: 6, backgroundColor: '#E1E8ED', borderRadius: 3, marginLeft: 150, marginTop: 8 }}></View>
                            <Text style={{ marginTop: 14, textAlign:'center', fontSize: 20 }}>Select Time Period</Text>
                            <View style={{ width: 400, borderWidth: 1, borderColor: '#E1E8ED', marginTop: 14 }}></View>
                        </View>
                        <View>
                            <Example1 />
                        </View>
                        <View>
                           <RadioButton/>
                        </View>
                    </RBSheet>
              <View
                style={{marginTop: 230, position: 'absolute', paddingLeft: 10}}>
                <SwipeButton
                  disabled={false}
                  swipeSuccessThreshold={70}
                  height={40}
                  width={300}
                  title="Swipe and Let's go >>"
                  onSwipeSuccess={() => {
                    alert('Submitted Successfully!');
                  }}
                  railFillBackgroundColor="#e688a1"
                  railFillBorderColor="#e688ff"
                  thumbIconBackgroundColor="#2B57EE"
                  thumbIconBorderColor="#CCDDEE"
                  railBackgroundColor="white"
                  railBorderColor="#bbeaff"
                />
              </View>
            </View>
           : 
            <View></View>
          }
          
          {/* {this.state.x === true ? (
            <View>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 20}}>This is Attendance page </Text>
              </View>
            </View>
            ) : (
            <View></View>
          )} */}
        </View>
      </View>
    );
  }
}
export default Attendance;

const styles = StyleSheet.create({
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
    backgroundColor: '#E5E5E5',
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
});
