import React, { useState } from "react";
import { Button, View, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RadioForm from "react-native-simple-radio-button";
import Example from "./Example";
var ring = [
    { label: " ", value: 0 },

];
const Example1 = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {

        setDatePickerVisibility(true);
        console.log("coming");
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View>
            <TouchableOpacity style={{ width: 440, height: 30 }} onPress={showDatePicker}>
                <Text style={{ fontSize: 18, marginLeft: 18, marginTop: 10 }}> Choose Date</Text>
                 <RadioForm
                                   radio_props={ring}
                                   initial={1}
                                   onPress={(value)=>{}}

                                   buttonSize={15}
                                   buttonInnerSize={30}
                                   selectedButtonColor={'#1F85FF'}
                                   selectedLabelColor={'#1F85FF'}
                                   style={{marginLeft:310,marginTop:-15}}
                                   disable={false}
                                   ></RadioForm>
            </TouchableOpacity>
            <View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            </View>
        </View>
    );
};

export default Example1;


// import React, {Component} from 'react';
// import {Button, View} from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// export default class Example1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDateTimePickerVisible: false,
//     };
//   }

//   showDateTimePicker = () => {
//     console.log("hello open ");
//     this.state.isDateTimePickerVisible = true
//     console.log("hii",this.state.isDateTimePickerVisible);
//     this.setState({isDateTimePickerVisible: this.state.isDateTimePickerVisible});
//   };

//   hideDateTimePicker = () => {
//     this.setState({isDateTimePickerVisible: false});
//   };

//   handleDatePicked = date => {
//     console.log('A date has been picked: ', date);
//     this.hideDateTimePicker();
//   };

//   render() {
//     return (
//       <View>

//         <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
//         <DateTimePickerModal
//           isVisible={this.state.isDateTimePickerVisible}
//           onConfirm={this.handleDatePicked}
//           onCancel={this.hideDateTimePicker}
//         />
//           </View>
      
//     );
//   }
// }

// import React, { useState } from "react";
// import { Button, View } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const Example = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date) => {
//     console.warn("A date has been picked: ", date);
//     hideDatePicker();
//   };

//   return (
//     <View>
//       <Button title="Show Date Picker" onPress={showDatePicker} />
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//     </View>
//   );
// };

// export default Example;
//export default Example1;
