import React, { Component } from 'react'
import { Button, View, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RadioForm from "react-native-simple-radio-button";
import firestore from '@react-native-firebase/firestore';
import store from './redux'
var ring = [
    { label: " ", value: 0 },
];
export default class Example extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    isDatePickerVisible:false,
    sectionUid:'',
    data:[],
    totalPresent:0,
    totalAbsent:0,
    Present:0,
    Absent:0,
    textPresent:0,
    textAbsent:0,
    }
  }
  componentDidMount=()=>{
    this.state.data=this.props.props.route.params
    this.setState({data:this.state.data})
    firestore().collection('Schools').doc(store.getState().authdetails.SchoolID).collection('classes').doc(this.props.props.route.params.class).get()
    .then(l=>{  
      console.log("response is",l.data().sections[this.props.props.route.params.section])
      this.state.sectionUid=l.data().sections[this.props.props.route.params.section];
      this.setState({sectionUid:this.state.sectionUid})
    
      console.log(this.state.sectionUid,"i am form attendence.js-----------")
    })
  }
  ShowDatePicker(){
    console.log('hiii broo');
    this.state.isDatePickerVisible=true
    this.setState({
      isDatePickerVisible:this.state.isDatePickerVisible
    })
  } 
  HideDatePicker (){
    console.log('confirmed broo');
    this.setState({
      isDatePickerVisible:false
    })
        };
  HandleConfirm(date){
                  
                  date.setUTCHours(0,0,0,0);
                  console.log("A date has been picked: ", date.getTime());
                  this.HideDatePicker();
//                   this.GetThisDay(date);
//               };
              
// // --------------------------------------GETTING CHOOSED DATE ATTENDANCE-----------------------------------------------------
// GetThisDay=(date)=>{
// const date = new Date();
date.setUTCHours(0,0,0,0);
console.log(date.getTime());
this.state.totalPresent=0,
this.state.totalAbsent=0
    firestore()
    .collection('attendence')
    .doc(this.state.sectionUid+'_'+date.getTime())
    .get()
    .then(querySnapshot=> {
      if(querySnapshot.exists) {
        console.log("Document Exist",querySnapshot);
        console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList.length);
      Object.values(querySnapshot.data().attendenceList).map(i=>{
        this.state.totalAbsent= this.state.totalAbsent+i.totalAbsent,
        this.state.totalPresent=this.state.totalPresent+i.totalPresent
      })
    this.state.textAbsent=this.state.totalAbsent/(querySnapshot.data().attendenceList.length)
    this.state.textPresent=this.state.totalPresent/(querySnapshot.data().attendenceList.length)
    console.log('average this.state.totalAbsent',this.state.textAbsent);
    console.log('average this.state.totalPresent',this.state.textPresent);

   this.props.gettingdata({absent:this.state.textAbsent,present:this.state.textPresent})
       }
      else
    {
      console.log("Document doesn't exists");
    } })
  }
  render() {
    
    // console.log('im from Example brooo',this.props.props.route.params);
    return (
      <View>
        <View>
        <TouchableOpacity style={{ width: 440, height: 30 }} onPress={()=>this.ShowDatePicker()}>
        <Text style={{ fontSize: 18, marginLeft: 13, marginTop: 10 }}> Choose Date</Text>
        <RadioForm
        radio_props={ring}
        initial={1}
        onPress={(value)=>{}}
        buttonSize={15}
        buttonInnerSize={30}
        selectedButtonColor={'#E1E8ED'}
        selectedLabelColor={'#E1E8ED'}
        style={{marginLeft:315,marginTop:-15}}
        disable={false}></RadioForm>
        <View>
        <DateTimePickerModal
        isVisible={this.state.isDatePickerVisible}
        mode="date"
        onConfirm={(value)=>this.HandleConfirm(value)}
        onCancel={()=>this.HideDatePicker()}
        />
        </View>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}
