import React, { useState } from "react";
import { View,  StyleSheet,Text } from "react-native";
import {Picker} from '@react-native-picker/picker';

const Pick = () => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={styles.container}>
    {/* <Text>hlooooooo</Text> */}
      <Picker
         mode="dropdown"
        selectedValue={selectedValue}
        style={{ height: 50, width:15,paddingLeft:1}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
      
                    <Picker.Item  label="Section:A" value="section A"/>
                    <Picker.Item label="Section:B" value="section B" />
                    <Picker.Item label="Section:C" value="section C"/>
                    
                
       </Picker>

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:2,
    paddingTop: 30,
    paddingLeft:10,
    paddingTop:1,

    
  }
});

export default Pick;

// // import React, { Component } from "react";
// // import {View,Icon} from 'react-native';
// //  import {Picker} from '@react-native-picker/picker';


// // export default class Pick extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       selected: "key1"
// //     };
// //   }
// //   onValueChange(value= string) {
// //     this.setState({
// //       selected: value
// //     });
// //   }
// //   render() {
// //     return (
// //             <View>
// //             <Picker
// //               mode="dropdown"
// //               Icon={<Icon name="arrow-down" />}
// //               style={{ height: 50, width:15}}
// //               selectedValue={this.state.selected}
// //               onValueChange={this.onValueChange.bind(this)}
// //             >
// //               <Picker.Item label="Wallet" value="key0" />
// //               <Picker.Item label="ATM Card" value="key1" />
// //               <Picker.Item label="Debit Card" value="key2" />
// //               <Picker.Item label="Credit Card" value="key3" />
// //               <Picker.Item label="Net Banking" value="key4" />
// //             </Picker>
// //             </View>
          
// //     );
// //   }
// // }

// import React, { Component } from "react";
// import { Container, Header, Content, Icon, Picker, Form } from "native-base";

// export default class PickerWithIcon extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selected: "key1"
//     };
//   }
//   onValueChange(value =string) {
//     this.setState({
//       selected: value
//     });
//   }
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content>
//           <Form>
//             <Picker
//               mode="dropdown"
//               iosHeader="Select your SIM"
//               iosIcon={<Icon name="arrow-down" />}
//               style={{ width: undefined }}
//               selectedValue={this.state.selected}
//               onValueChange={this.onValueChange.bind(this)}
//             >
//               <Picker.Item label="Wallet" value="key0" />
//               <Picker.Item label="ATM Card" value="key1" />
//               <Picker.Item label="Debit Card" value="key2" />
//               <Picker.Item label="Credit Card" value="key3" />
//               <Picker.Item label="Net Banking" value="key4" />
//             </Picker>
//           </Form>
//         </Content>
//       </Container>
//     );
//   }
// }