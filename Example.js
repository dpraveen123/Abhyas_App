import React, { useState } from "react";
import { Button, View, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RadioForm from "react-native-simple-radio-button";
var ring = [
    { label: " ", value: 0 },


];
const Example = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
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
                                   selectedButtonColor={'#E1E8ED'}
                                   selectedLabelColor={'#E1E8ED'}
                                   style={{marginLeft:300,marginTop:-15}}
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

export default Example;