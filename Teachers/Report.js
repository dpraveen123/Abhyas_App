import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import store from '../redux'
class Report extends Component {
  constructor(props) {
    super(props)
  
    this.state = {    
    sectionUid:'',
    data:[],
    SevenDays:[],
    totalPresent:0,
    totalAbsent:0,
    SevenEachAvgPresent:[],
    SevenEachAvgAbsent:[],
    AvgPresent:0,
    AvgAbsent:0
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
    
      console.log(this.state.sectionUid,"i am form attendence.js")
    // var details={
    //     sectionUid:this.state.sectionUid,
    //   }
    })
  }
// --------------------------------------GETTING CHOOSED DATE ATTENDANCE-----------------------------------------------------
GetThisDay=(p)=>{
const d = new Date(p);
d.setUTCHours(0,0,0,0);
console.log(d.getTime());
this.state.totalPresent=0,
this.state.totalAbsent=0
    firestore()
    .collection('attendence')
    .doc(this.state.sectionUid+'_'+d.getTime())
    .get()
    .then(querySnapshot => {
      console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList.length);
      Object.values(querySnapshot.data().attendenceList).map(i=>{
        this.state.totalAbsent= this.state.totalAbsent+i.totalAbsent,
        this.state.totalPresent=this.state.totalPresent+i.totalPresent
      })
    this.state.totalAbsent=this.state.totalAbsent/(querySnapshot.data().attendenceList.length)
    this.state.totalPresent=this.state.totalPresent/(querySnapshot.data().attendenceList.length)
    console.log('average this.state.totalAbsent',this.state.totalAbsent);
    console.log('average this.state.totalPresent',this.state.totalPresent);
  })
  }

// -------------------------------------------------GETTING PAST 7 DAYS ATTENDANCE------------------------------------------
Past7days=(p)=>{
var date = new Date(p);
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
for(var i=1;i<=3;i++)
{
  date.setDate(date.getDate() - 1);
  console.log('day is for i is',weekday[date.getDay()],i);
  // if(weekday[date.getDay()]=='Sunday')
  // {
  //   console.log('this is sunday man',date.getDate());
  // }
  // else
  {
   date.setUTCHours(0,0,0,0);
    this.state.SevenDays=this.state.SevenDays.concat(date.getTime())
    this.setState({
        SevenDays:this.state.SevenDays
    })
    console.log('array is',this.state.SevenDays); 
  }
  }
  for(i=0;i<this.state.SevenDays.length;i++)
  {
    firestore()
    .collection('attendence')
    .doc(this.state.sectionUid+'_'+this.state.SevenDays[i])
    .get()
    .then(querySnapshot => {
      this.state.totalAbsent=0,
      this.state.totalPresent=0,
      this.state.AvgPresent=0,
      this.state.AvgAbsent=0
      console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList);
      Object.values(querySnapshot.data().attendenceList).map(j=>{
        // console.log('in map totalAbsent',j.totalAbsent);
        // console.log('in map totalPresent',j.totalPresent);
        this.state.totalAbsent=this.state.totalAbsent+j.totalAbsent,
        this.state.totalPresent= this.state.totalPresent+j.totalPresent
        // console.log('in map this.state.totalAbsent',this.state.totalAbsent);
        // console.log('in map this.state.totalPresent',this.state.totalPresent); 
      })  
    this.state.totalAbsent=this.state.totalAbsent/(querySnapshot.data().attendenceList.length)
    this.state.totalPresent=this.state.totalPresent/(querySnapshot.data().attendenceList.length)
    // console.log('average this.state.totalAbsent',this.state.totalAbsent);
    // console.log('average this.state.totalPresent',this.state.totalPresent);
    this.state.SevenEachAvgAbsent=this.state.SevenEachAvgAbsent.concat(this.state.totalAbsent),
    this.state.SevenEachAvgPresent=this.state.SevenEachAvgPresent.concat(this.state.totalPresent)
    // console.log('all averagesof absent array is',this.state.SevenEachAvgAbsent);
    // console.log('all averagesof present array is',this.state.SevenEachAvgPresent);
    for(var k=0;k<this.state.SevenEachAvgAbsent.length;k++)
    {
      // console.log('for total avg',k);
      this.state.AvgAbsent=this.state.AvgAbsent+this.state.SevenEachAvgAbsent[k]
      this.state.AvgPresent=this.state.AvgPresent+this.state.SevenEachAvgPresent[k]
      // console.log('this.state.SevenEachAvgAbsent[k]',this.state.SevenEachAvgAbsent[k]);
      // console.log('this.state.AvgAbsent',this.state.AvgAbsent);
      // console.log('this.state.SevenEachAvgPresent[k]',this.state.SevenEachAvgPresent[k]);
      // console.log('this.state.AvgPresent',this.state.AvgPresent);
      console.log('total average of week is present:',this.state.AvgPresent/this.state.SevenDays.length,'absent: ',this.state.AvgAbsent/this.state.SevenDays.length);
    }
    })
  }
 } 
  render() {
    return (
      <View>
        <Text>Heyyyyyyyyyy, This is Reports page!!!!!</Text>
        <Button title="Choose Date" onPress={()=>this.GetThisDay('2021-07-04')}/>
            <Button title="Last 7 days" onPress={()=>this.Past7days('2021-07-05')}/>
            <Button title="This Month" onPress={()=>this.GetThisMonth()}/>
            <Button title="Last 6 months" onPress={()=>this.GetSixMonths()}/>
            <Button title="This Year" onPress={()=>this.GetThisYear()}/>
            <View>
              <Text>Total Present :{this.state.totalPresent}</Text>
              <Text>Total Absent :{this.state.totalAbsent}</Text>
            </View>
            {/* {
                Object.values(this.state.data).map(i=>{
                    console.log('in map present',i.totalPresent);
                    console.log('in map absent',i.totalAbsent);
                })
            } */}
      </View>
    )
  }
}

export default Report ;