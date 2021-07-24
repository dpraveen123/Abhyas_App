// import React, { useState } from "react";
// import { View, Switch, StyleSheet } from "react-native";

// const Switchbutton = (props) => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => {setIsEnabled(previousState => !previousState)
//     props.checkingswitchbutton({value:isEnabled})
//   console.log('./././././',isEnabled);};
// console.log('props in function broo',props);
//   return (
//     <View style={{marginRight:40,marginTop:-20}}>
//       <Switch
//         trackColor={{ false: "#767577", true: "#81b0ff" }}
//         thumbColor={isEnabled ? "#1F85FF" : "#939290"}
//         ios_backgroundColor="##939290"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//       {/* {props.checkingswitchbutton({value:isEnabled})} */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
   
//   }
// });

// export default Switchbutton;
import React, { Component } from 'react'
import { View, Switch, StyleSheet } from "react-native";

 class Switchbutton extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isEnabled:false
    }
  }
  
  render() {
    return (
      <View>
        <View style={{marginRight:40,marginTop:-20}}>
       <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#1F85FF" : "#939290"}
        ios_backgroundColor="##939290"
        onValueChange={()=>{
          this.state.isEnabled=!this.state.isEnabled
          this.setState({
            isEnabled:this.state.isEnabled
          })
          console.log('checkcheck',this.state.isEnabled);
          this.props.checkingswitchbutton({value:this.state.isEnabled})
        }}
        value={this.state.isEnabled}
      />
       {/* {props.checkingswitchbutton({value:isEnabled})} */}
    </View>
      </View>
    )
  }
}
export default Switchbutton