import {StyleSheet} from 'react-native'
export default StyleSheet.create({

//   ..................................card StyleSheet........................................
cardContainerStyle:{borderRadius:8,elevation:3},
cardStylings:{flexDirection:'row',height:70},
classNamesContainer:{marginLeft:16},
className:{fontSize:20,lineHeight:28},
sectionName:{color:'#AAB8C2',fontSize:14,lineHeight:28,marginTop:0},
dropdownContainer:{justifyContent:'center',marginLeft:80},
dropdown:{width:10,height:10},
thinLineContainer:{justifyContent:'center',marginLeft:14,width:1,height:'100%',borderWidth:0.5,borderColor:'#E1E8ED'},
dotsContainer:{justifyContent:'center',marginLeft:14},
dotsImageStylings:{width:10,height:20},

// ..........................................StyleSheet.................................
    container: {
        flex: 2,
        paddingTop: 1,
      },
      Menu:{
       marginLeft:250,
        marginBottom:70,
        elevation:5,
    
      },
    
        submitText:{
        paddingTop:10,
        paddingBottom:10,
        color:'#fff',
        textAlign:'center',
        backgroundColor:"#1e90ff",
        borderRadius: 20,
        borderWidth: 1,
        fontWeight:'bold',
        borderColor: '#fff',
    
    },
    
    footer: {
      // 
      position: 'absolute',
      flex:0.1,
      left: 0,
      right: 0,
      bottom: -20,
      
      flexDirection:'row',
      height:80,
      alignItems:'center',
      marginLeft:5,
      
    },
    modalview:{
       
        backgroundColor:'white',
            height:550,
            width:357,
            // marginTop:80,
            marginLeft:-17,
            borderTopLeftRadius:16,
            borderTopRightRadius:16,
            paddingTop:20
     
    },
    modal:{
      marginLeft:30,
      fontWeight:'600',
      fontSize:20,
    
    
    },
    gradient:{
      width:64,
      height:64,
      borderRadius:4,
      justifyContent:'center',
      marginLeft:-20
    },
    name:{
      color:'white',
      fontSize:32,
      paddingLeft:25
    },
    button:{
      backgroundColor:"#1F85FF",
      width:152,
      height:48,
      borderRadius:40,
      justifyContent:'center',
      
    },
    button1:{
      backgroundColor:'#1F85FF',
      paddingBottom:8,
      borderRadius: 4,
      width:308,
      height:40 
    
    },
    gradient1:{
      width:64,
      height:64,
      borderRadius:4,
      justifyContent:'center',
      marginLeft:-1
    },
    buttonText:{
      color:'white',
      alignSelf:'center',
      fontSize:16,
      fontFamily:"Roboto",
      fontWeight: "bold",
      paddingLeft:9,
      paddingTop:10
      
    },
    Class:{
      color:'white',
      fontFamily:'Roboto',
      fontWeight:'500',
      fontSize:16,
      marginLeft:16
    },
    name:{
      color:'white',
      fontSize:32,
      paddingLeft:25,
      fontWeight:"500",
      fontFamily:"Roboto"
    
    }
})