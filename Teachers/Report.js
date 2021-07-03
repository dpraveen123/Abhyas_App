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
    info:''
    // document
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
GetThisDay=()=>{
const d = new Date('2021-07-02');
d.setUTCHours(0,0,0,0);
console.log(d.getTime());
this.setState({
info:this.state.sectionUid+'_'+d.getTime()
})
console.log('info is',this.state.info);
    firestore()
    .collection('attendence')
    .doc(this.state.info)
    .get()
    .then(querySnapshot => {
      console.log('querySnapshot.data().attendenceList',querySnapshot.data().attendenceList);
        // this.state.data=querySnapshot.data().attendenceList
        // this.setState({
        //     data:this.state.data
        // })
    })
    // console.log('data is'+this.state.data);
  }
  render() {
    // console.log('props is ',this.props.props);
    return (
      <View>
        <Text>Heyyyyyyyyyy, This is Reports page!!!!!</Text>
        <Button title="Choose Date" onPress={()=>this.GetThisDay()}/>
            <Button title="Last 7 days" onPress={()=>this.Past7days()}/>
            <Button title="This Month" onPress={()=>this.GetThisMonth()}/>
            <Button title="Last 6 months" onPress={()=>this.GetSixMonths()}/>
            <Button title="This Year" onPress={()=>this.GetThisYear()}/>
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

// const Report = () => {
//   return (
//     <Text>Heyyyyyyyyyy, This is Reports page!!!!!</Text>
//   );
// }

export default Report ;