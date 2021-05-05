import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,Image,Dimensions,ScrollView,SafeAreaView,AppRegistry,
  TextInput,Button,Alert,title,TouchableHighlight} from 'react-native';
import {Card} from'react-native-elements';
import {Picker} from '@react-native-picker/picker';
// import Drop from '../assets/dropdown';
import Classno from '../Images/Classno'
import Edit from '../assets/edit';
import Arr from '../assets/line';
import Pick from './Picker';
import Editpick from './Editpick';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
// import Dropdown from '../profile/drop';
class AllClasses extends React.Component {
 
 constructor(props) {
   super(props)
   console.log(props);
   this.state = {
  // navigation:this.props, 
  artists: [
    {
      image: Classno,
      id: 1,
      name: "1st Class ",
     section:"4 sections",
     color1:"#9A56E1",
     color2:"#F879C7"
    },
    {
      image: Classno,
      id: 2,
      name: "2nd Class ",
     section:"4 sections",
     color1:"#F28436",
     color2:"#FEE468"
    },
    {
      image: Classno,
      id: 3,
      name: "3rd Class",
     section:"4 sections",
     color1:"#3890FA",
     color2:"#57D5C3"
    },
    {
        image: Classno,
        id: 4,
      name: "4th Class ",
     section:"4 sections",
     color1:'#E0435E',
     color2:'#FF7B93'
      },
      {
        image: Classno,
        id: 5,
      name: "5th Class ",
     section:"4 sections",
     color1:'#9E37CA',
     color2:'#D92E9F'
      },
      {
        image: Classno,
        id: 6,
      name: "6th Class",
     section:"4 sections",
     color1:'#126DD8',
     color2:'#50B8FF'
      },
      {
        image: Classno,
        id: 7,
      name: "7th Class ",
     section:"4 sections",
     color1:"#9A56E1",
     color2:"#F879C7"
      },
      {
        image: Classno,
        id: 8,
      name: "8th Class ",
     section:"4 sections ",
     color1:"#9A56E1",
     color2:"#F879C7"
      },
      {
        image: Classno,
        id: 9,
        name: "9th Class ",
       section:"4 sections",
       color1:"#9A56E1",
       color2:"#F879C7"
      },
      {
        image: Classno,
        id: 10,
        name: "10th Class ",
       section:"4 sections",
       color1:"#9A56E1",
       color2:"#F879C7"
      },
     
  ],
  }
}
  render() {
    
 console.log(this.props,'...............');
     return (
      <SafeAreaView style={{backgroundColor:'white',position:"relative" }}>
       <ScrollView style={{height:330}}>
       <View style={{ borderRadius:80, paddingTop:20,paddingLeft:10}}>
       <View style={{flexDirection:'row'}}>    
          <View
               style={{
                 backgroundColor: "white",
                 borderRadius: 20,
                 flex: 1,
                 width:300,heigth:45,marginLeft:-10}}>
                {this.state.artists.map(artist =>  (
                  <View styles={{flexDirection:'row'}}>
                   
                     <View 
      style={styles.card}
      > 
       <Card>
       <View key={artist.id} style={{flexDirection: "row" ,flex:1}} >        
       <View style={{flexDirection:'row',borderRadius:20}}>

       <View style={{flexDirection: "column",paddingLeft: 0,paddingTop:1,}}>
                  
                      </View>
                      <View
                        style={{
                          flexDirection: "column",
                          paddingLeft: 13,
                          paddingTop: 7,
                          fontWeight:"bold",
                        }}>
                          <View style={{flexDirection:'row'}}>
                          <View>
                          {/* rgba(248, 121, 199, 1) */}
                          <TouchableOpacity 
                          onPress={() => {
                            console.log(this.props.props.navigation.navigate);
                            this.props.props.navigation.navigate('1st Class')
                          }
                          }
                          // onPress={()=> this.props.navigation('1st Class')}
                          >
                            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={[artist.color1,artist.color2]} style={styles.gradient}>
                              <Text style={styles.name}>{artist.id}</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                            {/* <Text>Rectangle</Text> */}
                          </View>
                          <View style={{flexDirection:'column',marginLeft:20}}>
                        <Text style={{ fontSize: 20,fontFamily:"Roboto",lineHeight:28 }} >{artist.name}</Text>
                        <Text style={{ fontSize: 14, color: "#A7A7A7" }}>{artist.section} </Text>
                        </View>
                      </View>

                                  
                     </View>
                     <View style={{ paddingLeft:250,paddingTop:22,position:'absolute',flexDirection:'row', justifyContent: 'space-between'}}>
                  <View style={{ paddingLeft:250,paddingTop:1,position:'absolute',flexDirection:'row',position:'absolute',justifyContent: 'space-between'}}>
                      <Pick />
                    </View>                  
                      <View style={{ paddingLeft:270,position:'absolute',flexDirection:'row', justifyContent: 'space-between'}}>
                      <Arr />
                      </View>
                      <View style={{marginLeft:30,marginTop:-10}}>
                      <Editpick/>  
                      </View> 
                  </View>
                  </View>
              </View>
       </Card>
      </View>       
       </View> ))}
       
                </View>
                </View>
                </View>
                </ScrollView>
                <View style={{position:'absolute', marginTop: 600, marginLeft: 125}}>
                <TouchableHighlight style={styles.submit} onPress={() => Alert.alert("Adding new class")} underlayColor='#fff'>
                  <Text style={styles.submitText}> + Add new Class </Text>
                 </TouchableHighlight>
               </View>
                </SafeAreaView>
    );
  }
}
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  card: {
    // borderRadius:20
    // width:358,
    marginTop:-10
    // borderRadius:8
    // height:80
  },
  submit:{
    width: 140,
     height:80 ,
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

}
});
export default AllClasses;

{/* <View style={{ paddingLeft:280,paddingTop:10,position:'absolute',flexDirection:'row', justifyContent: 'space-between'}}>
                     <Editpick 
                    //  style={{paddingTop:100}}
                     />
                     </View> */}
