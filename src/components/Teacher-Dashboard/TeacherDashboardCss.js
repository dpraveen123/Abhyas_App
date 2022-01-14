import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'

export default  StyleSheet.create({
    card: {
        width: 328,
        height: 160,
        // background: linear-gradient(247.88deg, #4860DC 15.42, #38A8FA 84.24),
        // backgroundColor: "#4860DC",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
        borderWidth: 1,
        borderColor: "#4860DC",
        shadowColor: "black",
        marginTop: 45.15,
        marginRight: 18
    },
    image: {
        // opacity:0.5
        // background:'none'
        // marginLeft:-0
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 30,
        // paddingTop:-150,
    },
    column: {
        marginLeft: 30,
        width: 130,
        paddingTop: 10
    },
    teachertext: {
        color: 'white',
    },
    continue: {
        backgroundColor: 'white',
        width: 148,
        height: 36,
        justifyContent: 'center',
        borderRadius: 120,
    },
    gradient1:{
        width:64,
        height:64,
        borderRadius:4,
        justifyContent:'center',
        marginLeft:-1
      },
      name:{
        color:'white',
        fontSize:32,
        paddingLeft:25
      },
})