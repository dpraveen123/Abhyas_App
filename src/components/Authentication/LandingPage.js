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
import firestore from '@react-native-firebase/firestore';
import styles from './LandingPageCss'
import AbhyasLandingPageLogo from '../../assets/Svg/AbhyasLandingPageLogo'
var Loader = 0
export default function LandingPage(props) {
    const titl = "send OTP"
    const [text, setText] = useState('+91-');
    const [button, setButton] = useState(true);
    const [loader, setLoader] = useState(false);
    const [isRegisterdno, setisRegisteredno] = useState(true);
    const [color, setcolor] = useState('rgba(29, 161, 242, 0.5)')

    const onChangeText = (text1) => {
        setisRegisteredno(true);
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

           
            <AbhyasLandingPageLogo />

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
                    alignItems: 'center',
                    justifyContent: 'center'
                }} disabled={button}
                    onPress={() => {
                        setLoader(true)
                        // console.log('+91'+text.substr(4,13))
                        var s="+91"+text.substr(4,13);
                        console.log("s is",s,typeof(s));
                      firestore().collection('Users').doc(s).get().then(l=>{

                        //   console.log("existed bro",l.data())
                          if(l.data()==undefined){
                            setLoader(false);
                          setisRegisteredno(false);
                          }else{
                            props.onSubmit(text)

                          }
                      }).catch(e=>{
                          console.log("this doc doesn't exist");
                        //   setLoader(false);
                      })
                    

                    }
                    }>
                    <View>

                        {
                            loader === false ? <Text style={styles.otp} >send OTP</Text>
                                :
                                <View style={styles.sendingOtpContainer}>
                                    <ActivityIndicator
                                        color="white"
                                        size="small"
                                    /><Text style={styles.sendingOtpColor} >Sending OTP</Text>
                                </View>

                        }

                    </View>
                </TouchableOpacity>
                <View>
                    {
                        isRegisterdno===false?<View style={styles.mobileNumberNotRegisteredContainer}>
                        <Text style={styles.mobileNumberNotRegisteredContainerTextStylings}>Mobile number not registered with us!</Text>
                        </View>:<View></View>
                    }
                </View>

            </View>


        </ScrollView>



    )
}


