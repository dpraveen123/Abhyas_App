import React, { useRef, Component, useState } from 'react'
import { TouchableOpacity, Image, Button, Modal } from 'react-native'
import { View, Text } from 'react-native'
import img1 from '../Today/Arrow.png'
import RBSheet from 'react-native-raw-bottom-sheet'
import RadioForm, { RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { valueToNode } from '@babel/types'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { values } from 'lodash'
import { Value } from 'react-native-reanimated'
import { Calendar } from 'react-native-calendars'
import LinearGradient from 'react-native-linear-gradient'
import Example from './Example'
import DateTimePicker from 'react-native-modal-datetime-picker'
import RadioButton from './RadioButton'
var ring = [
    { label: " ", value: 0 },


];

export default class Today extends Component {
    constructor(props){
        super(props)
    }
    closeSheet=(x)=>{
        this.RBSheet.close();
        console.log("parameter is",x)
    }
    render() {
        console.log('props from today is',this.props)
        return (

            <View style={{ width: 410, height: 848, backgroundColor: 'white' }}>
                {/* <View style={{ width: 115, height: 32, borderColor: '#E1E8ED', borderRadius: 4, marginTop: 197, marginLeft: 16, borderWidth: 1 }}>
                    <Text style={{ marginTop: 8, marginLeft: 8, fontSize: 14 }}>Today</Text> */}
                <View>
                    <TouchableOpacity style={{ width: 115, height: 32, borderWidth: 1, borderColor: '#E1E8ED', borderRadius: 4, marginTop: 197, marginLeft: 16, }} onPress={() => this.RBSheet.open()}>
                        <Text style={{ marginTop: 8, marginLeft: 8, fontSize: 14 }}>Today</Text>
                        <Image source={img1} style={{ marginTop: -10, marginLeft: 90 }}></Image>
                    </TouchableOpacity>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={370}
                        openDuration={250}
                        customStyles={{
                            container: {
                                borderRadius: 20
                            }
                        }}
                    >
                        <View>
                            <View style={{ width: 87, height: 6, backgroundColor: '#E1E8ED', borderRadius: 3, marginLeft: 150, marginTop: 8 }}></View>
                            <Text style={{ marginTop: 14, marginLeft: 120.5, fontSize: 20 }}>Select Time Period</Text>
                            <View style={{ width: 400, borderWidth: 1, borderColor: '#E1E8ED', marginTop: 14 }}></View>
                        </View>
                        <View>
                            <Example close={"hello world"}></Example>
                        </View>
                        <View>
                           <RadioButton close={"hello world"}/>
                        </View>
                    </RBSheet>
                </View>
                {/* </View> */}
            </View>
        )
    }
}
