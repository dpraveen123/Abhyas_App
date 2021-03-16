import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
import Home from './Bulb'
export default function LandingPage(props) {
    const titl = "send OTP"
    const [text, setText] = useState('+91-');
    const [button, setButton] = useState(true);
    const [color, setcolor] = useState('rgba(29, 161, 242, 0.5)')
    const onChangeText = (text1) => {
        console.log(`hi text ${text1}`);
        if (text1.length < 4) {
            console.log('hiii text' + text1.length);
            setText('+91-')
            setButton(true)
            console.log(text);
        }
        if (text1.length <= 14 && text1.length > 3) {
            console.log(`${text1}`);
            setButton(true)
            setText(text1);

            setcolor('rgba(29, 161, 242, 0.5)')
            //   console.log(color);
        }
        if (text1.length == 14) {
            setButton(false)
            setcolor('#1DA1F2')
            console.log(color);
        }
    };
    return (
        <View>
            {/* <Text>
                hi pap's
            </Text> */}
            <Home />
            <Text style={styles.text}>
                Enter your Mobile number
            </Text>
            <TextInput
                underlineColorAndroid='#AAB8C2'
                style={styles.TextInputStyle}
                keyboardType={'phone-pad'}
                onChangeText={text => onChangeText(text)}
                value={text}
                maxLength={14}
            />

            <TouchableOpacity style={{
                backgroundColor: color,
                width: 312,
                height: 40,
                borderRadius: 4,
                marginTop: 240,
                marginLeft: 22,
                textAlign: 'center',
                justifyContent: 'center'
            }} disabled={button}
                onPress={() => props.onSubmit(text)}>
                <View

                //    color={text.length < 14 ? 'rgba(29, 161, 242, 0.5)' : '#1DA1F2'}
                //    style={{backgroundColor:{color}}}
                >

                    <Text style={styles.otp}>send OTP</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        color: '#657786',
        left: 22.62,
        top: 310,
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Roboto'
    },
    TextInputStyle: {
        position: 'absolute',
        width: 312,
        height: 50,
        left: 22.62,
        top: 332,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20
    },
    button: {
        backgroundColor: 'rgba(29, 161, 242, 0.5)',
        // backgroundColor:${(props)=>}
        width: 312,
        height: 40,
        borderRadius: 4,
        marginTop: 240,
        marginLeft: 22,
        textAlign: 'center',
        justifyContent: 'center'
    },
    otp: {
        color: 'white',
        paddingLeft: 125
    },
    number: {

        fontFamily: 'Roboto'
    }
})