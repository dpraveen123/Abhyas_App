import React, { useState } from 'react';
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
import OtpInputs from 'react-native-otp-textinput'
import OtpSvg from './otpSvg';
// import Svgpage from './Svg';
const Translator = (props) => {
    const [code, setCode] = useState('');
    return (
        <View>
{/* 
            <View style={{ width: 45, height: 45, borderRadius: 45 / 2, backgroundColor: '#E1E8ED', marginTop: 50, marginLeft: 24 }} />
            <OtpSvg></OtpSvg>
            <View>
                <Text style={{ fontSize: 16, marginTop: -18, marginLeft: 78 }}>
                    Telangana ZP High School
          </Text>
            </View> */}
            <View style={{flexDirection:'row',marginLeft:24,marginTop:50,height:40,alignItems:'center'}}>
                <View style={{width:40,height:40,borderRadius:20,backgroundColor:'#E1E8ED',justifyContent:'center',alignItems:'center'  }}>
            <OtpSvg></OtpSvg>
                </View>
                <Text style={{marginLeft:8,fontSize:16,fontWeight:'bold'}}>Telangana ZP High School</Text>
            </View>
            <View>
                <Text style={{ fontSize: 24, fontFamily: "roboto", marginTop: 47.75, marginLeft: 24 }}>Teacher Login</Text>
                <Text style={{ marginTop: 6, fontSize: 14, lineHeight: 20, color: "#657786", marginLeft: 24 }}>Enter the OTP send to <Text style={{ color: "black" }}>+91-8932456123</Text></Text>
            </View>
            <Text style={{ fontSize: 14, color: '#657786', fontFamily: "roboto", marginTop: 44, marginLeft: 24 }}>Enter One Time Password(OTP)</Text>
            <View style={{  width: '100%',}}>
       <View style={{width:'80%',marginLeft:17}}>
       <OtpInputs
                    // value={code}
                    tintColor="#1DA1F2"
                    offTintColor="#BBBCBE"
                    handleTextChange={setCode}
                    inputCount={6}
                    inputCellLength={1}
                    containerStyle={50}
                    width={40}
                ></OtpInputs>
       </View>


            </View>

            <TouchableOpacity style={{
                backgroundColor: '#1DA1F2',
                width: 312,
                height: 40,
                borderRadius: 4,
                // marginTop: 20,
                marginLeft: 22,
                textAlign: 'center',
                justifyContent: 'center',
                marginTop:32
            }}
                onPress={() => props.onSubmit(code)

                }>
                <View
                >

                    <Text style={{ color: 'white', paddingLeft: 125 }} >Confirm</Text>
                </View>
            </TouchableOpacity>

            {/* <View style={{ width: 312, height: 40, marginTop: 20, marginLeft: 38 }}>
                <Button title="Confirm" ></Button>
                <Button title="Confirm" onPress={() => props.onSubmit(code)} />
            </View> */}
            <View>
                <Text style={{ fontSize: 14, color: "#657786", marginTop: 24, marginLeft: 85 }}>Didn't receive OTP?<Text style={{ color: "#1DA1F2" }}>Resend OTP</Text></Text>
            </View>
        </View>
    );
}

export default Translator

