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
    ActivityIndicator,
    Button
} from 'react-native';
import Home from './Bulb'
var Loader = 0
export default function LandingPage(props) {
    const titl = "send OTP"
    const [text, setText] = useState('+91-');
    const [button, setButton] = useState(true);
    const [loader, setLoader] = useState(false);
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
    // const Loader = false
    onLoader = () => {
        Loader = 1
        console.log(Loader);
    }
    return (
        <ScrollView>

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



            <View >
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
                    onPress={() => {
                        setLoader(true)
                        props.onSubmit(text)
                    }
                    }>
                    <View>

                        {
                            loader === false ? <Text style={styles.otp} >send OTP</Text>
                                :
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <ActivityIndicator
                                        color="white"
                                        size="small"
                                    /><Text style={{ color: 'white' }} >Sending OTP</Text>
                                </View>

                        }

                    </View>
                </TouchableOpacity>
            </View>



        </ScrollView>



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