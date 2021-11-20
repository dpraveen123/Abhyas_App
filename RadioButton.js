import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import {circles} from './circle.png';
import {circle2} from './circle2.png';
import Example  from './Example';
import RBSheet from 'react-native-raw-bottom-sheet'
import firestore from '@react-native-firebase/firestore';
import store from './redux'
export default class RadioButton extends Component {
	constructor(props)
    {
        super(props);
        this.state={
            data:['Last 7 days','This Month','Last 6 Mon','This Year'],
            checked:null,
            sectionUid:'',
    dataB:[],
    SevenDays:[],
    thisMonth:[],
    SixMonths:[],
    totalPresent:0,
    totalAbsent:0,
    totalPresent7:0,
    totalAbsent7:0,
    totalPresentMon:0,
    totalAbsentMon:0,
    totalPresent6Mon:0,
    totalAbsent6Mon:0,
    totalPresentYear:0,
    totalAbsentYear:0,
    SevenEachAvgPresent:[],
    SevenEachAvgAbsent:[],
    MonthEachAvgPresent:[],
    MonthEachAvgAbsent:[],
    SixMonthEachAvgPresent:[],
    SixMonthEachAvgAbsent:[],
    YearEachAvgPresent:[],
    YearEachAvgAbsent:[],
    Present:0,
    Absent:0,
    Year:[],
    textPresent:0,
    textAbsent:0,
        }
    }
    componentDidMount=()=>{
        console.log("radio button props is",this.props)
        this.state.dataB=this.props.props.route.params
        this.setState({dataB:this.state.dataB})
        firestore().collection('Schools').doc(store.getState().authdetails.SchoolID).collection('classes').doc(this.props.props.route.params.class).get()
        .then(l=>{  
          console.log("response is",l.data().sections[this.props.props.route.params.section])
          this.state.sectionUid=l.data().sections[this.props.props.route.params.section];
          this.setState({sectionUid:this.state.sectionUid})
        })
    }
    Selection(dt,ky){
if(ky===0)
{
// // // -------------------------------------------------GETTING PAST 7 DAYS ATTENDANCE------------------------------------------
// // Past7days=(p)=>{
// console.log('this is data selction bro',dt,ky);
var date = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
this.state.SevenDays=[]
for(var i=1;i<=7;i++)
{
  date.setDate(date.getDate() - 1);
  console.log('day is for i is',weekday[date.getDay()],i);
  if(weekday[date.getDay()]=='Sunday')
  {
    console.log('this is sunday man',date.getDate());
  }
  else
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
    this.state.SevenEachAvgAbsent=[],
    this.state.SevenEachAvgPresent=[]
    firestore()
    .collection('attendence')
    .doc(this.state.sectionUid+'_'+this.state.SevenDays[i])
    .get()
    .then(querySnapshot => {
      if(querySnapshot.exists) {
        // console.log("Document Exist",querySnapshot);
      this.state.Absent=0,
      this.state.Present=0,
      this.state.totalPresent7=0,
      this.state.totalAbsent7=0,
      console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList);
      Object.values(querySnapshot.data().attendenceList).map(j=>{
        // console.log('in map Absent',j.totalAbsent);
        // console.log('in map Present',j.totalPresent);
        this.state.Absent=this.state.Absent+j.totalAbsent,
        this.state.Present= this.state.Present+j.totalPresent
        // console.log('in map this.state.Absent',this.state.Absent);
        // console.log('in map this.state.Present',this.state.Present); 
      })  
    this.state.Absent=this.state.Absent/(querySnapshot.data().attendenceList.length)
    this.state.Present=this.state.Present/(querySnapshot.data().attendenceList.length)
    // console.log('average this.state.Absent',this.state.Absent);
    // console.log('average this.state.Present',this.state.Present);
    this.state.SevenEachAvgAbsent=this.state.SevenEachAvgAbsent.concat(this.state.Absent),
    this.state.SevenEachAvgPresent=this.state.SevenEachAvgPresent.concat(this.state.Present)
    console.log('all averagesof absent array is',this.state.SevenEachAvgAbsent);
    console.log('all averagesof present array is',this.state.SevenEachAvgPresent);
    for(var k=0;k<this.state.SevenEachAvgAbsent.length;k++)
    {
      console.log('for total avg',k);
      this.state.totalAbsent7=this.state.totalAbsent7+this.state.SevenEachAvgAbsent[k]
      this.state.totalPresent7=this.state.totalPresent7+this.state.SevenEachAvgPresent[k]
      // console.log('this.state.SevenEachAvgAbsent[k]',this.state.SevenEachAvgAbsent);
      // console.log('this.state.totalAbsent',this.state.totalAbsent7);
      // console.log('this.state.SevenEachAvgPresent[k]',this.state.SevenEachAvgPresent);
      // console.log('this.state.totalPresent',this.state.totalPresent7);
      this.state.textPresent=this.state.totalPresent7/(this.state.SevenEachAvgAbsent.length);
      this.state.textAbsent=this.state.totalAbsent7/(this.state.SevenEachAvgAbsent.length)
      console.log('total average of week is present:',this.state.textPresent,'absent: ',this.state.textAbsent);
    }
    this.props.gettingdata({absent:this.state.textAbsent,present:this.state.textPresent})
  }
  else{
    console.log("Documnet doesn't exists");
  }
    })
  }

// //  } 

}
else if(ky===1)
{
    console.log('this is data selction bro',dt,ky);
    // // //  --------------------------------------------------------GETTING THIS MONTH ATTENDANCE--------------------------------------------------

// // GetThisMonth=(p)=>{
  var date= new Date()
  var today= date.getDate()
  console.log('today is',today);
  this.state.thisMonth=[]
  this.state.MonthEachAvgAbsent=[],
  this.state.MonthEachAvgPresent=[]
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
  for(var i=0;i<today-1;i++)
  {
      // var date = new Date(p);
      date.setDate(date.getDate() - 1);
      console.log('date is',date.getDate());
      if(weekday[date.getDay()]=='Sunday')
      {
        console.log('this is sunday man',date.getDate());
      }
      else
      {
      date.setUTCHours(0,0,0,0);
  this.state.thisMonth=this.state.thisMonth.concat(date.getTime())
  this.setState({
      thisMonth:this.state.thisMonth
  })
  }
  console.log('thisMonth is',this.state.thisMonth);
}
  // 
  for(i=0;i<this.state.thisMonth.length;i++)
  {
    firestore()
    .collection('attendence')
    .doc(this.state.sectionUid+'_'+this.state.thisMonth[i])
    .get()
    .then(querySnapshot=>{
      if(querySnapshot.exists) {
        console.log("Document Exist",querySnapshot);
        this.state.Absent=0,
        this.state.Present=0,
        this.state.totalPresentMon=0,
        this.state.totalAbsentMon=0
        console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList)
        Object.values(querySnapshot.data().attendenceList).map(j=>{
          // console.log('in map Absent',j.totalAbsent);
          // console.log('in map Present',j.totalPresent);
          this.state.Absent=this.state.Absent+j.totalAbsent,
          this.state.Present= this.state.Present+j.totalPresent
          // console.log('in map this.state.Absent',this.state.Absent);
          // console.log('in map this.state.Present',this.state.Present); 
        })  
      this.state.Absent=this.state.Absent/(querySnapshot.data().attendenceList.length)
      this.state.Present=this.state.Present/(querySnapshot.data().attendenceList.length)
      // console.log('average this.state.Absent',this.state.Absent);
      // console.log('average this.state.Present',this.state.Present);
      this.state.MonthEachAvgAbsent=this.state.MonthEachAvgAbsent.concat(this.state.Absent),
      this.state.MonthEachAvgPresent=this.state.MonthEachAvgPresent.concat(this.state.Present)
      // console.log('all averagesof absent array is',this.state.MonthEachAvgAbsent);
      // console.log('all averagesof present array is',this.state.MonthEachAvgPresent);
      for(var k=0;k<this.state.MonthEachAvgAbsent.length;k++)
      {
        // console.log('for total avg',k);
        this.state.totalAbsentMon=this.state.totalAbsentMon+this.state.MonthEachAvgAbsent[k]
        this.state.totalPresentMon=this.state.totalPresentMon+this.state.MonthEachAvgPresent[k]
        // console.log('this.state.MonthEachAvgAbsent[k]',this.state.MonthEachAvgAbsent[k]);
        console.log('this.state.totalAbsent',this.state.totalAbsentMon);
        // console.log('this.state.MonthEachAvgPresent[k]',this.state.MonthEachAvgPresent[k]);
        console.log('this.state.totalPresent',this.state.totalPresentMon);
        this.state.textPresent=this.state.totalPresentMon/(this.state.MonthEachAvgAbsent.length);
        this.state.textAbsent=this.state.totalAbsentMon/(this.state.MonthEachAvgAbsent.length)
        console.log('total average of month is present:',this.state.textPresent,'absent: ',this.state.textAbsent);
      }
   this.props.gettingdata({absent:this.state.textAbsent,present:this.state.textPresent})
    }
   else{
    console.log("Document Doesn't Exist");
   } 
  
    })
  } 
// // }

}
else if(ky===2)
{
console.log('this is data selction bro',dt,ky);
// // // ------------------------------------------------------------GETTING THIS 6 MONTHS ATTENDANCE-----------------------------------------------------
// // GetSixMonths=(p)=>{
  var date= new Date()
  this.state.SixMonthEachAvgAbsent=[],
  this.state.SixMonthEachAvgPresent=[],
  this.state.SixMonths=[],
  // var today=date.getDate()
  // var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // var mon=monthNames[date.getMonth()]
  // var year=date.getFullYear()
  console.log('today is',date);
  var  d = new Date(date.getFullYear(), date.getMonth() - 6, date.getDate());
  // var thatday=d.getDate()
  // var thatmon=monthNames[d.getMonth()]
  // var Year=d.getFullYear()
  console.log('that day is',d);
  var datechange=date
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  // console.log('change date is',datechange);
  // if(datechange==date)
  // {
  //   console.log('both dates are equal broo');
  // }
  // if(datechange>d)
  // {
  //   console.log('datechange is forwarded brooo');
  // }
  while(datechange>=d)
  {
    datechange.setDate(datechange.getDate() - 1);
    if(weekday[date.getDay()]=='Sunday')
      {
        console.log('this is sunday man',date.getDate());
      }
      else
      {
    datechange.setUTCHours(0,0,0,0);
    this.state.SixMonths=this.state.SixMonths.concat(datechange.getTime())
      }
  }
  console.log('dates array is',this.state.SixMonths);
  console.log('length is',this.state.SixMonths.length);
  var x=0;
  for(var i=0;i<this.state.SixMonths.length;i++)
  {
    x=x+1;
    // console.log(x)
    firestore()
    .collection('attendence')
    .doc(this.state.sectionUid+'_'+this.state.SixMonths[i])
    .get()
    .then(querySnapshot=>{
      if(querySnapshot.exists) {
        console.log("Document Exist",querySnapshot);
        this.state.Absent=0,
        this.state.Present=0,
        this.state.totalAbsent6Mon=0,
        this.state.totalPresent6Mon=0
        console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList)
        Object.values(querySnapshot.data().attendenceList).map(j=>{
          // console.log('in map Absent',j.totalAbsent);
          // console.log('in map Present',j.totalPresent);
          this.state.Absent=this.state.Absent+j.totalAbsent,
          this.state.Present= this.state.Present+j.totalPresent
          // console.log('in map this.state.Absent',this.state.Absent);
          // console.log('in map this.state.Present',this.state.Present); 
        }) 
        this.state.Absent=this.state.Absent/(querySnapshot.data().attendenceList.length)
        this.state.Present=this.state.Present/(querySnapshot.data().attendenceList.length)
        // console.log('average this.state.Absent',this.state.Absent);
        // console.log('average this.state.Present',this.state.Present);
        this.state.SixMonthEachAvgAbsent=this.state.SixMonthEachAvgAbsent.concat(this.state.Absent),
        this.state.SixMonthEachAvgPresent=this.state.SixMonthEachAvgPresent.concat(this.state.Present)
      console.log('all averagesof absent array is',this.state.SixMonthEachAvgAbsent);
      console.log('all averagesof present array is',this.state.SixMonthEachAvgPresent);
      for(var k=0;k<this.state.SixMonthEachAvgAbsent.length;k++)
      {
        // console.log('for total avg',k);
        this.state.totalAbsent6Mon=this.state.totalAbsent6Mon+this.state.SixMonthEachAvgAbsent[k]
        this.state.totalPresent6Mon=this.state.totalPresent6Mon+this.state.SixMonthEachAvgPresent[k]
        // console.log('this.state.MonthEachAvgAbsent[k]',this.state.MonthEachAvgAbsent[k]);
        console.log('this.state.totalAbsent',this.state.totalAbsent6Mon);
        // console.log('this.state.MonthEachAvgPresent[k]',this.state.MonthEachAvgPresent[k]);
        console.log('this.state.totalPresent',this.state.totalPresent6Mon);
        this.state.textPresent=this.state.totalPresent6Mon/(this.state.SixMonthEachAvgAbsent.length);
        this.state.textAbsent=this.state.totalAbsent6Mon/(this.state.SixMonthEachAvgAbsent.length)
        console.log('total average of month is present:',this.state.textPresent,'absent: ',this.state.textAbsent);  
      }
      this.props.gettingdata({absent:this.state.textAbsent,present:this.state.textPresent})
      }
      else{
        // console.log("Document doesn't exist");
      }
    })
  }
// //   }

}
else if(ky===3){
console.log('this is data selction bro',dt,ky);
// // // -------------------------------------------------GETTING THIS YEAR ATTENDANCE------------------------------------------------------------------
// // GetThisYear=(p)=>{
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var date= new Date()
  console.log('today is',date);
  var  d = new Date(date.getFullYear()-1, date.getMonth(), date.getDate());
  console.log('that day is',d);
  var datechange=date
  while(datechange>=d)
  {
    datechange.setDate(datechange.getDate() - 1);
    if(weekday[date.getDay()]=='Sunday')
      {
        console.log('this is sunday man',date.getDate());
      }
      else
      {
    datechange.setUTCHours(0,0,0,0);
    this.state.Year=this.state.Year.concat(datechange.getTime())
      }
  }
  console.log('dates array is',this.state.Year);
  console.log('length is',this.state.Year.length);
  for(var i=0;i<this.state.Year.length;i++)
  {
    firestore()
    .collection('attendence')
    .doc(this.state.sectionUid+'_'+this.state.Year[i])
    .get()
    .then(querySnapshot=>{
      if(querySnapshot.exists) {
        // console.log("Document Exist",querySnapshot);
        this.state.Absent=0,
        this.state.Present=0,
        this.state.totalAbsentYear=0,
        this.state.totalPresentYear=0
        console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList)
        Object.values(querySnapshot.data().attendenceList).map(j=>{
          console.log('in map Absent',j.totalAbsent);
          console.log('in map Present',j.totalPresent);
          this.state.Absent=this.state.Absent+j.totalAbsent,
          this.state.Present= this.state.Present+j.totalPresent
          console.log('in map this.state.Absent',this.state.Absent);
          console.log('in map this.state.Present',this.state.Present); 
        }) 
        this.state.Absent=this.state.Absent/(querySnapshot.data().attendenceList.length)
        this.state.Present=this.state.Present/(querySnapshot.data().attendenceList.length)
        // console.log('average this.state.Absent',this.state.Absent);
        // console.log('average this.state.Present',this.state.Present);
        this.state.YearEachAvgAbsent=this.state.YearEachAvgAbsent.concat(this.state.Absent),
        this.state.YearEachAvgPresent=this.state.YearEachAvgPresent.concat(this.state.Present)
      console.log('all averagesof absent array is',this.state.YearEachAvgAbsent);
      console.log('all averagesof present array is',this.state.YearEachAvgPresent);
      for(var k=0;k<this.state.YearEachAvgAbsent.length;k++)
      {
        // console.log('for total avg',k);
        this.state.totalAbsentYear=this.state.totalAbsentYear+this.state.YearEachAvgAbsent[k]
        this.state.totalPresentYear=this.state.totalPresentYear+this.state.YearEachAvgPresent[k]
        // console.log('this.state.MonthEachAvgAbsent[k]',this.state.MonthEachAvgAbsent[k]);
        console.log('this.state.totalAbsent',this.state.totalAbsentYear);
        // console.log('this.state.MonthEachAvgPresent[k]',this.state.MonthEachAvgPresent[k]);
        console.log('this.state.totalPresent',this.state.totalPresentYear);
        this.state.textPresent=this.state.totalPresentYear/(this.state.YearEachAvgAbsent.length);
        this.state.textAbsent=this.state.totalAbsentYear/(this.state.YearEachAvgAbsent.length)
        console.log('total average of month is present:',this.state.textPresent,'absent: ',this.state.textAbsent);
      }
      }
      else{

      }
    })
    }
}
    }
	render() {
		const { PROP } = this.props;
		const { value } = this.state;
        console.log("radio button props is----",this.props)
		return (
			<View>
                <View>
                {
                    this.state.data.map((data,key)=>{
                        console.log("data is",data,"key is",key)
                        return(
                            <View>
                                  <TouchableOpacity  style={{flexDirection:'row',alignItems:'center',marginTop:28,marginLeft:18}} 
                                  onPress={()=>{this.props.close(data),console.log("data is",data,"key is",key),this.Selection(data,key)}}>
                                      <Text style={{fontSize:18}}>{data}</Text>
                                      
                                      <View style=
                                      {{
                                        height: 24,
                                        width: 24,
                                        borderRadius: 15,
                                        borderWidth: 2,
                                        borderColor: '#E1E8ED',
                                        alignItems: 'center',
                                        marginLeft:205
                                      }}
                                      >
                                      </View>
                                  </TouchableOpacity>
                                {/* } */}
                            </View>
                            
                        )
                    })
                }
            </View>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	
});