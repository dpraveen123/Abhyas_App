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
import OtpPageSchoolLogo from '../../assets/Svg/otpPageSchoolLogo';
import styles from './OtpPageCss'
// import Svgpage from './Svg';
const Translator = (props) => {
    const [code, setCode] = useState('');
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.bgForIcon}>
            <OtpPageSchoolLogo></OtpPageSchoolLogo>
                </View>
                <Text style={styles.headingStyles}>Telangana ZP High School</Text>
            </View>
            <View>
                <Text style={styles.teacherLoginTextStyles}>Teacher Login</Text>
                <Text style={styles.enterOtpText}>Enter the OTP send to <Text style={{ color: "black" }}>+91-8932456123</Text></Text>
            </View>
            <Text style={styles.mainOtp}>Enter One Time Password(OTP)</Text>
            <View style={styles.inputContainer}>
       <View style={styles.inputInnerContainer}>
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

            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => props.onSubmit(code)

                }>
                <View
                >

                    <Text style={styles.buttonText} >Confirm</Text>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.didNotReceive}>Didn't receive OTP?<Text style={{ color: "#1DA1F2" }}>Resend OTP</Text></Text>
            </View>
        </View>
    );
}

export default Translator

