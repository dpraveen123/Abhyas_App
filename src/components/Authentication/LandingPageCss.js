import {StyleSheet} from 'react-native'
export default StyleSheet.create({

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
        // paddingLeft: 125
    },
    number: {

        fontFamily: 'Roboto'
    },
     sendingOtpContainer:{ flexDirection: 'row', justifyContent: 'center' },
     sendingOtpColor:{ color: 'white' },
     mobileNumberNotRegisteredContainer:{width:'100%',alignItems:'center'},
     mobileNumberNotRegisteredContainerTextStylings:{marginTop:24,color:'red',fontSize:14,}
    });