import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,StyleSheet, ScrollView } from 'react-native'
import Timetablesvg from './TimetableSvg'
import LinearGradient from 'react-native-linear-gradient';
import Timetable from '../Images/Timetable.jpg'
import Continue from '../Images/Continue'
import {Card} from 'react-native-elements';
import Edit from '../assets/edit';
const IC_ARR_DOWN = require('../assets/dropup.png');
const IC_ARR_UP = require('../assets/dropdown.png');
import {
    MenuProvider,
    Menu,
    MenuTrigger,
    MenuOptions,
    MenuOption,
  } from 'react-native-popup-menu';
// import AllClasses from '../profile/Classes'
var data=[
    {
        id:1,
        class:'1st class',
        sections:['A','B','C'], 
        color1:"#9A56E1",
        color2:"#F879C7",
        
    },
    {
        id:2,
        class:'2nd class',
        sections:['A','B','C'],
        color1:"#F28436",
        color2:"#FEE468"
    },
    {
        id:3,
        class:'3rd class',
        sections:['A','B','C'],
        color1:"#3890FA",
        color2:"#57D5C3"
    },
    {
        id:4,
        class:'4th class',
        sections:['A','B','C'],
        color1:'#E0435E',
        color2:'#FF7B93'
    },
    {
        id:5,
        class:'5th class',
        sections:['A','B','C'],
        color1:'#9E37CA',
        color2:'#D92E9F'
    },
    {
        id:6,
        class:'6th class',
        sections:['A','B','C'],
        color1:'#126DD8',
        color2:'#50B8FF'
    },
    {
        id:7,
        class:'7th class',
        sections:['A','B','C'],
        color1:"#9A56E1",
        color2:"#F879C7"
    },
    {
        id:8,
        class:'8th class',
        sections:['A','B','C'],
        color1:"#9A56E1",
        color2:"#F879C7"
    },
    {
        id:9,
        class:'9th class',
        sections:['A','B','C'],
        color1:"#9A56E1",
        color2:"#F879C7"
    },
    {
        id:10,
        class:'10th class',
        sections:['A','B','C'],
        color1:"#9A56E1",
        color2:"#F879C7"
    },
    
    
]
class TeacherDashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            darray:[],
            darray1:[]
        }
    }
     componentDidMount=()=>{
         data.map((i,l)=>{
            // console.log("i and l are",i,l)
            this.state.darray[l]=false;
         })
         console.log(this.state.darray,"is darray yy")
     }
     openDrop=(i)=>{
        console.log(i,"drop clicked")
        this.state.darray[i]=!this.state.darray[i];
        // this.setState({darray:this.state.darray})
        this.state.darray1=this.state.darray;
        this.setState({darray1:this.state.darray1})
        console.log(this.state.darray1)
     }
    render(){
        console.log(this.props,'ckecking');
    return (
        <ScrollView 
        // style={{backgroundColor:'white'}}
        >
            {/* <Text>hi teachers dashboard</Text> */}
            {/* <Timetablesvg/> */}
            <View
            style={{marginTop:-20}}
            >
               <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#38A8FA','#4860DC']} 
                 style={styles.card}
               >
                <View style={{flexDirection:'row'}}>
                    <Image source={Timetable} 
                       style={styles.image}
                       />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.text}>Time table</Text>
                        <View style={styles.column}>
                          <Text style={styles.teachertext}>timetable of your teachers</Text>
                        </View>
                        <View style={{paddingLeft:30,paddingTop:30}}>
                        <TouchableOpacity style={styles.continue} 
              onPress={() => 
                // console.log(this.props.navigation.navigate,'ckecking')
            this.props.navigation.navigate('TeachersTimeTbl')}
                            // console.log('timetable was pressed')
                        // }
                            >
                            <View style={{flexDirection:'row'}}>
                              <Text style={{color:'#38A8FA',paddingLeft:15}}>
                                View Timetable
                              </Text>
                              <View style={{paddingLeft:5,paddingTop:3}}>
                                 <Continue />
                              </View>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
             </LinearGradient>
            <View style={{paddingTop:50,paddingLeft:15}}>
                <Text style={{fontWeight:'bold',fontSize:14}}>My Classes</Text>
            </View>
            <ScrollView>
            <View style={{marginTop:-10,height:1200}}>
                {/* <AllClasses/> */}
         {
             data.map((l,i)=>{
                 return(
                   <View style={{borderRadius:15}}>
                   <Card
                   containerStyle={{borderRadius:8}}
                   >
              <View style={{height:70}}>
                  {/* <Text>hlooo</Text> */}
                 <View style={{flexDirection:'row'}}>
                 {/* <TouchableOpacity 
                 onPress={()=>this.props.navigation.navigate('1st Class')
                }
                 > */}
                     <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={[l.color1,l.color2]}  style={{width:64,height:64,alignItems:'center',justifyContent:'center'}}>
                         <Text style={styles.number}>{l.id}</Text>
                     </LinearGradient>
                 {/* </TouchableOpacity> */}
               <View style={{marginLeft:16}}>
                   <Text style={{fontSize:20,lineHeight:28}}>{l.class}</Text>
                   <Text style={{color:'#AAB8C2',fontSize:14,lineHeight:28,marginTop:0}}>{l.sections.length} Sections</Text>
               </View>
                <TouchableOpacity style={{justifyContent:'center',marginLeft:80}}
                onPress={()=>{
                    this.openDrop(i)
                }}
                >
                <View >
                    <Image source={
                        
                        this.state.darray1[i]===true?IC_ARR_DOWN:IC_ARR_UP
                    } style={{width:10,height:10}}></Image>
                </View>
                </TouchableOpacity>
                <View style={{justifyContent:'center',marginLeft:14,width:1,height:'100%',borderWidth:0.5,borderColor:'#E1E8ED'}}>
               {/* <Text>hlo</Text> */}
                </View>
                <View style={{justifyContent:'center',marginLeft:14}}>
               {/* <Text>hlo</Text> */}
               <Edit/>
                </View>
                 </View>
           
              </View>
              
          </Card>
         
              <View style={{marginLeft:15,width:'91.5%',backgroundColor:'white'}}>
                  {
                      l.sections.map(k=>{
                          return(
                        <View>
                             {
                                 this.state.darray1[i]===true?<View>
                                 <View style={{marginTop:12,marginLeft:10}}>
                                 <TouchableOpacity 
                                  onPress={()=>this.props.navigation.navigate('1st Class',{l,k})}>
                                     <Text style={{fontSize:16,fontWeight:'400',height:30}}>Section {k}</Text>
                                 </TouchableOpacity>
                         </View>
                                 </View>:<View>
                                 </View>
                             }
                         </View>
                           )
                      })
                  }
              </View>
                   </View>
                 )
             })
         }
            </View>
            </ScrollView>
            </View>
            <View>
            </View>
        </ScrollView>
    )
}
}
const styles=StyleSheet.create({
    card:{
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
    image:{
        // opacity:0.5
        // background:'none'
        // marginLeft:-0
    },
    text:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:30,
        // paddingTop:-150,
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
    number:{
        color:'white',
        fontSize:32
    }
})
export default TeacherDashboard