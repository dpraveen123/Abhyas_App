import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    Page:{
        backgroundColor:'#E5E5E5',
    },
    PopUp:{
        backgroundColor:'white',
        height:540,
        width:357,
        marginTop:-88,
        marginLeft:-17,
        borderTopLeftRadius:16,
        borderTopRightRadius:16
    },
    AddClass:{
        fontFamily:'Roboto',
        fontWeight:'500',
        marginTop:16,
        fontSize:20,
        marginLeft:16,
    },
    ChooseClass:{
        marginTop:16,
        marginLeft:16,
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight:'500'
    },
    InputStyle:{
        marginLeft:16,
        marginTop:12,
        borderWidth:2,
        width:328,
        height:40,
        borderColor:'#E1E8ED',
        borderRadius:4
    },
    button:{
        position:'absolute',
        width:328,
        height:36,
        opacity:50,
        backgroundColor: 'rgba(29, 161, 242, 0.5)',
        borderRadius:4,
        marginLeft:16,
        marginTop:480
    },
    buttonTxt:{
        color:'white',
        // marginTop:8,
        // marginLeft:148,
        textAlign:'center',
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight:'500'
    },
    aText:{
      color:'#1F85FF',
      fontFamily:'Roboto',
      fontSize:14,
      fontWeight:'500',
      marginLeft:16,
      marginTop:15
    },
    // .........................................................no section addedd stylings.......................................
     nsaContainer:{backgroundColor:"#000000aa",flex:1},
    nsaInnerContainer:{backgroundColor:"#ffffff",margin:30,width:340,height:230.25,borderRadius:8,marginTop:208.75,marginLeft:22,marginRight:16,display:'flex',justifyContent:'center'},
     nsaHeader:{textAlign:'center',fontSize:20,marginTop:19.33},
           nsaQn:{color:"#657786",textAlign:'center',marginTop:8},
     nsaFirstBtn:{width:136,height:42,borderRadius:8,backgroundColor:"#e1e8e8",marginTop:24,marginLeft:20},
      nsaSecondBtn:{width:136,height:42,borderRadius:8,backgroundColor:"#1f85ff",marginTop:24,marginLeft:20},
      nsaFirstBtnText:{fontSize:16,color:"#657786",marginTop:9,marginLeft:20},
      nsaSecondBtnText:{fontSize:16,color:"white",marginTop:10,marginLeft:35.5},
})