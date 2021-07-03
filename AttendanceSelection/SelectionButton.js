import React, { Component } from 'react'
import { Text, View,Button} from 'react-native'
import firestore from '@react-native-firebase/firestore';

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
