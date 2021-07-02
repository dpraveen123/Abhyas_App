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
             data:[]
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
    // componentDidMount=()=>{
//         const y = new Date('2021-07-02')
// console.log(y.getTime())

        // firestore()
        // .collection('attendence')
        // // .doc('3797a3ad-10f6-47fe-b1d9-d1cb44b2a9e9_1624838400000')
        // .get()
        // .then(querySnapshot => {
        //     console.log(querySnapshot.size);
        //     querySnapshot.forEach(documentSnapshot => {
        //         // console.log(documentSnapshot.data().attendenceList,'is the data');
        //       this.state.List=this.state.List.concat(documentSnapshot.data().attendenceList)
        //           this.setState({
        //               List:this.state.List,
                      
        //           })
        //           console.log((this.state.List),'is List')
        //         //   this.setState({
        //         //       data:Object.values(this.state.List)
        //         //   })
        //         //   console.log(this.state.data,'is data');
        //     });
        //   });  
    // }
    render() {
        return(
        <View>
            <Text>Hi selection broo</Text>
            <Button title="Choose Date" onPress={()=>console.log('Choose Date clicked')}/>
            <Button title="Last 7 days" onPress={()=>this.Past7days()}/>
            <Button title="This Month" onPress={()=>this.GetThisMonth()}/>
            <Button title="Last 6 months" onPress={()=>this.GetSixMonths()}/>
            <Button title="This Year" onPress={()=>this.GetThisYear()}/>
        </View>
        )
    }
}
