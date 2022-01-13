import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    card:{
      width: 328,
          height: 160,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 15,
          marginTop: 24.15,
          elevation:10
  },
  text:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    paddingLeft:30,
  },
  column:{
    marginLeft:30,
    width:130,
    paddingTop:10
  },
  teachertext:{
    color:'white',
  },
  continue:{
    backgroundColor:'white',
    width:148,
    height:36,
    justifyContent:'center',
    borderRadius:120,
  },

  AdminDashboardText:{ fontSize: 16,fontWeight:'bold',marginLeft: 16, marginTop: 20  },
  cardContainer:{ flexDirection: "row" },
  classesCard:{ width: "43.09%", height: 130, backgroundColor: "white", borderRadius: 4, elevation: 5, justifyContent: "center", alignItems: "center", borderRadius: 5, marginLeft: 7, marginTop: 12, borderWidth: 1, borderColor: "#E1E8ED", shadowColor: "black",marginLeft:'4.39%' },
teachersCard:{ width: "43.09%", height: 130, backgroundColor: "white", borderRadius: 4, elevation: 5, justifyContent: "center", alignItems: "center", marginLeft: 8, borderWidth: 1, borderColor: "#E1E8ED", shadowColor: "black", marginTop: 12, marginLeft: 8, marginRight: 16,marginLeft:'4.09%' },
reportsCard:{ width: "43.09%", height: 130, backgroundColor: "white", borderRadius: 4, marginTop:15,elevation: 5, justifyContent: "center", alignItems: "center", borderRadius: 5, marginLeft: 7, borderWidth: 1, borderColor: "#E1E8ED", shadowColor: "black",marginLeft:'4.39%' } ,
studentsCard:{
    width: "43.09%",
    height: 130,
    backgroundColor: "white",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    borderWidth: 1,
    borderColor: "#E1E8ED",
    shadowColor: "black",
    elevation: 5,
    marginTop: 15,
    marginLeft:'4.09%',
    // marginLeft: 8,
    marginRight: 16
  },
  cardText:{ fontSize: 14,fontWeight:'bold',marginTop:8 }

})