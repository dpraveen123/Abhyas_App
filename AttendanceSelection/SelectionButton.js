import React, { Component } from 'react'
import { Text, View,Button} from 'react-native'
import firestore from '@react-native-firebase/firestore';
// import  { useState } from "react";
// import { Button, View, TouchableOpacity, Text } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import RadioForm from "react-native-simple-radio-button";
// var ring = [
//     { label: " ", value: 0 },


// ];
// const Example = () => {
   
export default class SelectionButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             SevenDays:[],
             thisMonth:[],
             sixmonths:[],
             thisYear:[],
             thisDay:[],
             data:[],
             count:0,
             info:'',
             subcode:'69b0a8e0-76d2-492f-bb41-c809c62f8136_'
        }
    }
    

Past7days=()=>{
    for(var i=0;i<7;i++)
    {
    var date = new Date();
    date.setDate(date.getDate() - i);
    this.state.SevenDays=this.state.SevenDays.concat(date.getTime())
    this.setState({
        SevenDays:this.state.SevenDays
    })
    }
    console.log('array is',this.state.SevenDays);
}

GetThisMonth=()=>{
    var date= new Date()
    var today= date.getDate()
    for(var i=0;i<today;i++)
    {
        var date = new Date();
    date.setDate(date.getDate() - i);
    this.state.thisMonth=this.state.thisMonth.concat(date.getTime())
    this.setState({
        thisMonth:this.state.thisMonth
    })
    }
    console.log('thisMonth is',this.state.thisMonth);
}
GetSixMonths=()=>{
    var count=30*6;
    for(i=0;i<count;i++)
    {
        var date = new Date();
        date.setDate(date.getDate() - i);
        this.state.sixmonths=this.state.sixmonths.concat(date.getTime())
        this.setState({
            sixmonths:this.state.sixmonths
        })
    }
    console.log('six months',this.state.sixmonths);
    console.log('size is',this.state.sixmonths.length);
}
GetThisYear=()=>{
    var date= new Date()
    console.log(date);
}
GetThisDay=()=>{
const d = new Date('2021-07-02');
d.setUTCHours(0,0,0,0);
console.log(d.getTime());
this.setState({
info:this.state.subcode+d.getTime()
})
console.log(this.state.info);
    firestore()
    .collection('attendence')
    .doc(this.state.info)
    .get()
    .then(querySnapshot => {
        this.state.data=querySnapshot.data().attendenceList
        this.setState({
            data:this.state.data
        })
    })
}
    render() {
        return(
        <View>
            <Text>Hi selection broo</Text>
            <Button title="Choose Date" onPress={()=>this.GetThisDay()}/>
            <Button title="Last 7 days" onPress={()=>this.Past7days()}/>
            <Button title="This Month" onPress={()=>this.GetThisMonth()}/>
            <Button title="Last 6 months" onPress={()=>this.GetSixMonths()}/>
            <Button title="This Year" onPress={()=>this.GetThisYear()}/>
            {
                Object.values(this.state.data).map(i=>{
                    console.log('in map present',i.totalPresent);
                    console.log('in map absent',i.totalAbsent);
                })
            }
        </View>
        )
    }
}
// import React, { Component } from 'react'
// import { Text, View,Button, TouchableOpacity } from 'react-native'
// import firestore from '@react-native-firebase/firestore';
// import store from '../redux'
// import Attendance from '../attendence';
// // import { Button, View, TouchableOpacity, Text } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import RadioForm from "react-native-simple-radio-button";
// var ring = [
//   { label: " ", value: 0 },
// ];
// class Report extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {    
//     sectionUid:'',
//     data:[],
//     SevenDays:[],
//     thisMonth:[],
//     SixMonths:[],
//     totalPresent:0,
//     totalAbsent:0,
//     totalPresent7:0,
//     totalAbsent7:0,
//     totalPresentMon:0,
//     totalAbsentMon:0,
//     totalPresent6Mon:0,
//     totalAbsent6Mon:0,
//     totalPresentYear:0,
//     totalAbsentYear:0,
//     SevenEachAvgPresent:[],
//     SevenEachAvgAbsent:[],
//     MonthEachAvgPresent:[],
//     MonthEachAvgAbsent:[],
//     SixMonthEachAvgPresent:[],
//     SixMonthEachAvgAbsent:[],
//     YearEachAvgPresent:[],
//     YearEachAvgAbsent:[],
//     Present:0,
//     Absent:0,
//     Year:[],
//     textPresent:0,
//     textAbsent:0,
//     isDatePickerVisible:false
//     }
//   }
//   componentDidMount=()=>{
//     this.state.data=this.props.props.route.params
//     this.setState({data:this.state.data})
//     firestore().collection('Schools').doc(store.getState().authdetails.SchoolID).collection('classes').doc(this.props.props.route.params.class).get()
//     .then(l=>{  
//       console.log("response is",l.data().sections[this.props.props.route.params.section])
//       this.state.sectionUid=l.data().sections[this.props.props.route.params.section];
//       this.setState({sectionUid:this.state.sectionUid})
    
//       console.log(this.state.sectionUid,"i am form attendence.js")
//     // var details={
//     //     sectionUid:this.state.sectionUid,
//     //   }
//     })
//   }
//   showDatePicker = () => {
//     this.setState({
//       setDatePickerVisibility:true
//     })
    
// };
// hideDatePicker = () => {
//   this.setState({
//     setDatePickerVisibility:false
//   })
//   // setDatePickerVisibility(false);
// };
// handleConfirm = (date) => {
//   console.warn("A date has been picked: ", date);
  
// // date.setUTCHours(0,0,0,0);
// // console.log(date.getTime());
//  this.hideDatePicker();
// };
// // --------------------------------------GETTING CHOOSED DATE ATTENDANCE-----------------------------------------------------
// GetThisDay=(p)=>{
// const d = new Date();
// d.setUTCHours(0,0,0,0);
// console.log(d.getTime());
// this.state.totalPresent=0,
// this.state.totalAbsent=0
//     firestore()
//     .collection('attendence')
//     .doc(this.state.sectionUid+'_'+d.getTime())
//     .get()
//     .then(querySnapshot=> {
//       if(querySnapshot.exists) {
//         console.log("Document Exist",querySnapshot);
//         console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList.length);
//       Object.values(querySnapshot.data().attendenceList).map(i=>{
//         this.state.totalAbsent= this.state.totalAbsent+i.totalAbsent,
//         this.state.totalPresent=this.state.totalPresent+i.totalPresent
//       })
//     this.state.textAbsent=this.state.totalAbsent/(querySnapshot.data().attendenceList.length)
//     this.state.textPresent=this.state.totalPresent/(querySnapshot.data().attendenceList.length)
//     console.log('average this.state.totalAbsent',this.state.textAbsent);
//     console.log('average this.state.totalPresent',this.state.textPresent);
//        }
//       else
//     {
//       console.log("Document doesn't exists");
//     } })
//   }

// // -------------------------------------------------GETTING PAST 7 DAYS ATTENDANCE------------------------------------------
// Past7days=(p)=>{
// var date = new Date(p);
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// this.state.SevenDays=[]
// for(var i=1;i<=7;i++)
// {
//   date.setDate(date.getDate() - 1);
//   console.log('day is for i is',weekday[date.getDay()],i);
//   if(weekday[date.getDay()]=='Sunday')
//   {
//     console.log('this is sunday man',date.getDate());
//   }
//   else
//   {
//    date.setUTCHours(0,0,0,0);
//     this.state.SevenDays=this.state.SevenDays.concat(date.getTime())
//     this.setState({
//         SevenDays:this.state.SevenDays
//     })
//     console.log('array is',this.state.SevenDays); 
//   }
//   }
//   for(i=0;i<this.state.SevenDays.length;i++)
//   {
//     this.state.SevenEachAvgAbsent=[],
//     this.state.SevenEachAvgPresent=[]
//     firestore()
//     .collection('attendence')
//     .doc(this.state.sectionUid+'_'+this.state.SevenDays[i])
//     .get()
//     .then(querySnapshot => {
//       if(querySnapshot.exists) {
//         // console.log("Document Exist",querySnapshot);
//       this.state.Absent=0,
//       this.state.Present=0,
//       this.state.totalPresent7=0,
//       this.state.totalAbsent7=0,
//       console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList);
//       Object.values(querySnapshot.data().attendenceList).map(j=>{
//         // console.log('in map Absent',j.totalAbsent);
//         // console.log('in map Present',j.totalPresent);
//         this.state.Absent=this.state.Absent+j.totalAbsent,
//         this.state.Present= this.state.Present+j.totalPresent
//         // console.log('in map this.state.Absent',this.state.Absent);
//         // console.log('in map this.state.Present',this.state.Present); 
//       })  
//     this.state.Absent=this.state.Absent/(querySnapshot.data().attendenceList.length)
//     this.state.Present=this.state.Present/(querySnapshot.data().attendenceList.length)
//     // console.log('average this.state.Absent',this.state.Absent);
//     // console.log('average this.state.Present',this.state.Present);
//     this.state.SevenEachAvgAbsent=this.state.SevenEachAvgAbsent.concat(this.state.Absent),
//     this.state.SevenEachAvgPresent=this.state.SevenEachAvgPresent.concat(this.state.Present)
//     console.log('all averagesof absent array is',this.state.SevenEachAvgAbsent);
//     console.log('all averagesof present array is',this.state.SevenEachAvgPresent);
//     for(var k=0;k<this.state.SevenEachAvgAbsent.length;k++)
//     {
//       console.log('for total avg',k);
//       this.state.totalAbsent7=this.state.totalAbsent7+this.state.SevenEachAvgAbsent[k]
//       this.state.totalPresent7=this.state.totalPresent7+this.state.SevenEachAvgPresent[k]
//       // console.log('this.state.SevenEachAvgAbsent[k]',this.state.SevenEachAvgAbsent);
//       // console.log('this.state.totalAbsent',this.state.totalAbsent7);
//       // console.log('this.state.SevenEachAvgPresent[k]',this.state.SevenEachAvgPresent);
//       // console.log('this.state.totalPresent',this.state.totalPresent7);
//       this.state.textPresent=this.state.totalPresent7/(this.state.SevenEachAvgAbsent.length);
//       this.state.textAbsent=this.state.totalAbsent7/(this.state.SevenEachAvgAbsent.length)
//       console.log('total average of week is present:',this.state.textPresent,'absent: ',this.state.textAbsent);
//     }
//   }
//   else{
//     console.log("Documnet doesn't exists");
//   }
//     })
//   }
//  } 

// //  --------------------------------------------------------GETTING THIS MONTH ATTENDANCE--------------------------------------------------

// GetThisMonth=(p)=>{
//   var date= new Date(p)
//   var today= date.getDate()
//   console.log('today is',today);
//   this.state.thisMonth=[]
//   this.state.MonthEachAvgAbsent=[],
//   this.state.MonthEachAvgPresent=[]
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
//   for(var i=0;i<today-1;i++)
//   {
//       // var date = new Date(p);
//       date.setDate(date.getDate() - 1);
//       console.log('date is',date.getDate());
//       if(weekday[date.getDay()]=='Sunday')
//       {
//         console.log('this is sunday man',date.getDate());
//       }
//       else
//       {
//       date.setUTCHours(0,0,0,0);
//   this.state.thisMonth=this.state.thisMonth.concat(date.getTime())
//   this.setState({
//       thisMonth:this.state.thisMonth
//   })
//   }
//   console.log('thisMonth is',this.state.thisMonth);
// }
//   // 
//   for(i=0;i<this.state.thisMonth.length;i++)
//   {
//     firestore()
//     .collection('attendence')
//     .doc(this.state.sectionUid+'_'+this.state.thisMonth[i])
//     .get()
//     .then(querySnapshot=>{
//       if(querySnapshot.exists) {
//         console.log("Document Exist",querySnapshot);
//         this.state.Absent=0,
//         this.state.Present=0,
//         this.state.totalPresentMon=0,
//         this.state.totalAbsentMon=0
//         console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList)
//         Object.values(querySnapshot.data().attendenceList).map(j=>{
//           // console.log('in map Absent',j.totalAbsent);
//           // console.log('in map Present',j.totalPresent);
//           this.state.Absent=this.state.Absent+j.totalAbsent,
//           this.state.Present= this.state.Present+j.totalPresent
//           // console.log('in map this.state.Absent',this.state.Absent);
//           // console.log('in map this.state.Present',this.state.Present); 
//         })  
//       this.state.Absent=this.state.Absent/(querySnapshot.data().attendenceList.length)
//       this.state.Present=this.state.Present/(querySnapshot.data().attendenceList.length)
//       // console.log('average this.state.Absent',this.state.Absent);
//       // console.log('average this.state.Present',this.state.Present);
//       this.state.MonthEachAvgAbsent=this.state.MonthEachAvgAbsent.concat(this.state.Absent),
//       this.state.MonthEachAvgPresent=this.state.MonthEachAvgPresent.concat(this.state.Present)
//       // console.log('all averagesof absent array is',this.state.MonthEachAvgAbsent);
//       // console.log('all averagesof present array is',this.state.MonthEachAvgPresent);
//       for(var k=0;k<this.state.MonthEachAvgAbsent.length;k++)
//       {
//         // console.log('for total avg',k);
//         this.state.totalAbsentMon=this.state.totalAbsentMon+this.state.MonthEachAvgAbsent[k]
//         this.state.totalPresentMon=this.state.totalPresentMon+this.state.MonthEachAvgPresent[k]
//         // console.log('this.state.MonthEachAvgAbsent[k]',this.state.MonthEachAvgAbsent[k]);
//         console.log('this.state.totalAbsent',this.state.totalAbsentMon);
//         // console.log('this.state.MonthEachAvgPresent[k]',this.state.MonthEachAvgPresent[k]);
//         console.log('this.state.totalPresent',this.state.totalPresentMon);
//         this.state.textPresent=this.state.totalPresentMon/(this.state.MonthEachAvgAbsent.length);
//         this.state.textAbsent=this.state.totalAbsentMon/(this.state.MonthEachAvgAbsent.length)
//         console.log('total average of month is present:',this.state.textPresent,'absent: ',this.state.textAbsent);
//       }
//     }
//    else{
//     console.log("Document Doesn't Exist");
//    }  
//     })
//   }
// }
// // ------------------------------------------------------------GETTING THIS 6 MONTHS ATTENDANCE-----------------------------------------------------
// GetSixMonths=(p)=>{
//   var date= new Date(p)
//   this.state.SixMonthEachAvgAbsent=[],
//   this.state.SixMonthEachAvgPresent=[],
//   this.state.SixMonths=[],
//   // var today=date.getDate()
//   // var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   // var mon=monthNames[date.getMonth()]
//   // var year=date.getFullYear()
//   console.log('today is',date);
//   var  d = new Date(date.getFullYear(), date.getMonth() - 6, date.getDate());
//   // var thatday=d.getDate()
//   // var thatmon=monthNames[d.getMonth()]
//   // var Year=d.getFullYear()
//   console.log('that day is',d);
//   var datechange=date
//   var weekday = new Array(7);
//   weekday[0] = "Sunday";
//   weekday[1] = "Monday";
//   weekday[2] = "Tuesday";
//   weekday[3] = "Wednesday";
//   weekday[4] = "Thursday";
//   weekday[5] = "Friday";
//   weekday[6] = "Saturday";
//   // console.log('change date is',datechange);
//   // if(datechange==date)
//   // {
//   //   console.log('both dates are equal broo');
//   // }
//   // if(datechange>d)
//   // {
//   //   console.log('datechange is forwarded brooo');
//   // }
//   while(datechange>=d)
//   {
//     datechange.setDate(datechange.getDate() - 1);
//     if(weekday[date.getDay()]=='Sunday')
//       {
//         console.log('this is sunday man',date.getDate());
//       }
//       else
//       {
//     datechange.setUTCHours(0,0,0,0);
//     this.state.SixMonths=this.state.SixMonths.concat(datechange.getTime())
//       }
//   }
//   console.log('dates array is',this.state.SixMonths);
//   console.log('length is',this.state.SixMonths.length);
//   var x=0;
//   for(var i=0;i<this.state.SixMonths.length;i++)
//   {
//     x=x+1;
//     // console.log(x)
//     firestore()
//     .collection('attendence')
//     .doc(this.state.sectionUid+'_'+this.state.SixMonths[i])
//     .get()
//     .then(querySnapshot=>{
//       if(querySnapshot.exists) {
//         console.log("Document Exist",querySnapshot);
//         this.state.Absent=0,
//         this.state.Present=0,
//         this.state.totalAbsent6Mon=0,
//         this.state.totalPresent6Mon=0
//         console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList)
//         Object.values(querySnapshot.data().attendenceList).map(j=>{
//           // console.log('in map Absent',j.totalAbsent);
//           // console.log('in map Present',j.totalPresent);
//           this.state.Absent=this.state.Absent+j.totalAbsent,
//           this.state.Present= this.state.Present+j.totalPresent
//           // console.log('in map this.state.Absent',this.state.Absent);
//           // console.log('in map this.state.Present',this.state.Present); 
//         }) 
//         this.state.Absent=this.state.Absent/(querySnapshot.data().attendenceList.length)
//         this.state.Present=this.state.Present/(querySnapshot.data().attendenceList.length)
//         // console.log('average this.state.Absent',this.state.Absent);
//         // console.log('average this.state.Present',this.state.Present);
//         this.state.SixMonthEachAvgAbsent=this.state.SixMonthEachAvgAbsent.concat(this.state.Absent),
//         this.state.SixMonthEachAvgPresent=this.state.SixMonthEachAvgPresent.concat(this.state.Present)
//       console.log('all averagesof absent array is',this.state.SixMonthEachAvgAbsent);
//       console.log('all averagesof present array is',this.state.SixMonthEachAvgPresent);
//       for(var k=0;k<this.state.SixMonthEachAvgAbsent.length;k++)
//       {
//         // console.log('for total avg',k);
//         this.state.totalAbsent6Mon=this.state.totalAbsent6Mon+this.state.SixMonthEachAvgAbsent[k]
//         this.state.totalPresent6Mon=this.state.totalPresent6Mon+this.state.SixMonthEachAvgPresent[k]
//         // console.log('this.state.MonthEachAvgAbsent[k]',this.state.MonthEachAvgAbsent[k]);
//         console.log('this.state.totalAbsent',this.state.totalAbsent6Mon);
//         // console.log('this.state.MonthEachAvgPresent[k]',this.state.MonthEachAvgPresent[k]);
//         console.log('this.state.totalPresent',this.state.totalPresent6Mon);
//         this.state.textPresent=this.state.totalPresent6Mon/(this.state.SixMonthEachAvgAbsent.length);
//         this.state.textAbsent=this.state.totalAbsent6Mon/(this.state.SixMonthEachAvgAbsent.length)
//         console.log('total average of month is present:',this.state.textPresent,'absent: ',this.state.textAbsent);
        
//       }
//       }
//       else{
//         // console.log("Document doesn't exist");
//       }
//     })
//   }
//   }
// // -------------------------------------------------GETTING THIS YEAR ATTENDANCE------------------------------------------------------------------
// GetThisYear=(p)=>{
//   var weekday = new Array(7);
//   weekday[0] = "Sunday";
//   weekday[1] = "Monday";
//   weekday[2] = "Tuesday";
//   weekday[3] = "Wednesday";
//   weekday[4] = "Thursday";
//   weekday[5] = "Friday";
//   weekday[6] = "Saturday";
//   var date= new Date(p)
//   console.log('today is',date);
//   var  d = new Date(date.getFullYear()-1, date.getMonth(), date.getDate());
//   console.log('that day is',d);
//   var datechange=date
//   while(datechange>=d)
//   {
//     datechange.setDate(datechange.getDate() - 1);
//     if(weekday[date.getDay()]=='Sunday')
//       {
//         console.log('this is sunday man',date.getDate());
//       }
//       else
//       {
//     datechange.setUTCHours(0,0,0,0);
//     this.state.Year=this.state.Year.concat(datechange.getTime())
//       }
//   }
//   console.log('dates array is',this.state.Year);
//   console.log('length is',this.state.Year.length);
//   for(var i=0;i<this.state.Year.length;i++)
//   {
//     firestore()
//     .collection('attendence')
//     .doc(this.state.sectionUid+'_'+this.state.Year[i])
//     .get()
//     .then(querySnapshot=>{
//       if(querySnapshot.exists) {
//         // console.log("Document Exist",querySnapshot);
//         this.state.Absent=0,
//         this.state.Present=0,
//         this.state.totalAbsentYear=0,
//         this.state.totalPresentYear=0
//         console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList)
//         Object.values(querySnapshot.data().attendenceList).map(j=>{
//           console.log('in map Absent',j.totalAbsent);
//           console.log('in map Present',j.totalPresent);
//           this.state.Absent=this.state.Absent+j.totalAbsent,
//           this.state.Present= this.state.Present+j.totalPresent
//           console.log('in map this.state.Absent',this.state.Absent);
//           console.log('in map this.state.Present',this.state.Present); 
//         }) 
//         this.state.Absent=this.state.Absent/(querySnapshot.data().attendenceList.length)
//         this.state.Present=this.state.Present/(querySnapshot.data().attendenceList.length)
//         // console.log('average this.state.Absent',this.state.Absent);
//         // console.log('average this.state.Present',this.state.Present);
//         this.state.YearEachAvgAbsent=this.state.YearEachAvgAbsent.concat(this.state.Absent),
//         this.state.YearEachAvgPresent=this.state.YearEachAvgPresent.concat(this.state.Present)
//       console.log('all averagesof absent array is',this.state.YearEachAvgAbsent);
//       console.log('all averagesof present array is',this.state.YearEachAvgPresent);
//       for(var k=0;k<this.state.YearEachAvgAbsent.length;k++)
//       {
//         // console.log('for total avg',k);
//         this.state.totalAbsentYear=this.state.totalAbsentYear+this.state.YearEachAvgAbsent[k]
//         this.state.totalPresentYear=this.state.totalPresentYear+this.state.YearEachAvgPresent[k]
//         // console.log('this.state.MonthEachAvgAbsent[k]',this.state.MonthEachAvgAbsent[k]);
//         console.log('this.state.totalAbsent',this.state.totalAbsentYear);
//         // console.log('this.state.MonthEachAvgPresent[k]',this.state.MonthEachAvgPresent[k]);
//         console.log('this.state.totalPresent',this.state.totalPresentYear);
//         this.state.textPresent=this.state.totalPresentYear/(this.state.YearEachAvgAbsent.length);
//         this.state.textAbsent=this.state.totalAbsentYear/(this.state.YearEachAvgAbsent.length)
//         console.log('total average of month is present:',this.state.textPresent,'absent: ',this.state.textAbsent);
//       }
//       }
//       else{

//       }
//     })
//     }
// }


// // console.log();
// render() {
//   console.log('props is',this.props.props.route.params);
//     return (
//       <View>
//          {/* return ( */}
//      <View>
//        <TouchableOpacity >
//      <Attendance props={this.props.props}/>
//      </TouchableOpacity>
//      </View>
//         {/* <Text>Heyyyyyyyyyy, This is Reports page!!!!!</Text> */}
//         {/* <Button title="Choose Date" onPress={()=>this.GetThisDay('2021-07-06')}/> */}
//             {/* <Button title="Last 7 days" onPress={()=>this.Past7days('2021-07-06')}/> */}
//             {/* <Button title="This Month" onPress={()=>this.GetThisMonth('2021-07-06')}/> */}
//             {/* <Button title="Last 6 months" onPress={()=>this.GetSixMonths('2021-07-07')}/> */}
//             {/* <Button title="This Year" onPress={()=>this.GetThisYear('2021-07-07')}/> */}
//             {/* <View>
//               <Text>Total Present :{this.state.textPresent}</Text>
//               <Text>Total Absent :{this.state.textAbsent}</Text>
//             </View> */}
//             {/* <View> */}
//             {/* <TouchableOpacity style={{ width: 440, height: 30 }} 
//             // onPress={showDatePicker}
//             >
//                 <Text style={{ fontSize: 18, marginLeft: 13, marginTop: 10 }}> Choose Date</Text>
//                  <RadioForm
//                                    radio_props={ring}
//                                    initial={1}
//                                    onPress={(value)=>{}}
                                   
//                                    buttonSize={15}
//                                    buttonInnerSize={30}
//                                    selectedButtonColor={'#E1E8ED'}
//                                    selectedLabelColor={'#E1E8ED'}
//                                    style={{marginLeft:315,marginTop:-15}}
//                                    disable={false}
//                                    ></RadioForm> 
//             </TouchableOpacity> */}
//             {/* <View>
//             <DateTimePickerModal
//                 isVisible={
//                 // true
//                   this.state.isDatePickerVisible
//                 }
//                 mode="date"
//                 onConfirm={this.handleConfirm}
//                 onCancel={this.hideDatePicker}
//             />
//             </View> */}
//         {/* </View> */}
//       </View>
//     )
//   }
// // // =======
// // import React from 'react';
// // import { Text, TouchableOpacity, View } from 'react-native';
// // import Attendance from '../attendence';

// // const Report = () => {
// //   return (
// //     <View>
// //       <TouchableOpacity >
// //     <Attendance/>
// //     </TouchableOpacity>
// //     </View>
// //   );
// }

// export default Report ;