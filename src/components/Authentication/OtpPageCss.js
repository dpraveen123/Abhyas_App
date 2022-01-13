import {StyleSheet} from 'react-native'

export default StyleSheet.create({
container:{flexDirection:'row',marginLeft:24,marginTop:50,height:40,alignItems:'center'},

bgForIcon:{width:40,height:40,borderRadius:20,backgroundColor:'#E1E8ED',justifyContent:'center',alignItems:'center'  },
headingStyles:{marginLeft:8,fontSize:16,fontWeight:'bold'},
teacherLoginTextStyles:{ fontSize: 24, fontFamily: "roboto", marginTop: 47.75, marginLeft: 24 },
enterOtpText:{ marginTop: 6, fontSize: 14, lineHeight: 20, color: "#657786", marginLeft: 24 },
mainOtp:{ fontSize: 14, color: '#657786', fontFamily: "roboto", marginTop: 44, marginLeft: 24 },
inputContainer:{  width: '100%'},
inputInnerContainer:{width:'80%',marginLeft:17},
buttonContainer:{
    backgroundColor: '#1DA1F2',
    width: 312,
    height: 40,
    borderRadius: 4,
    // marginTop: 20,
    marginLeft: 22,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop:32
},
buttonText:{ color: 'white', paddingLeft: 125 },
didNotReceive:{ fontSize: 14, color: "#657786", marginTop: 24, marginLeft: 85 }
});