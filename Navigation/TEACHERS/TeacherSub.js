import React from 'react'
import { View, Text ,Image,Button,TouchableOpacity,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import Biology from '../Navigation/Icons/TEACHERS/Biology';
import Biology from './Biology';
import Physics from './Physics';
import Maths from './Maths';
import Social from './Social';
import Science from './Science';

import functions from '@react-native-firebase/functions';
import Chemistry from './Chemistry';
// import Physics from '../Navigation/Icons/Physics';
// import Maths from '../Navigation/Icons/Maths';
// import Social from '../Navigation/Icons/Social';
// import Science from '../Navigation/Icons/Science';
// import Chemistry from '../Navigation/Icons/Chemistry';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg'
import { ScrollView } from 'react-native-gesture-handler';
var test={}
//var Svgarray = [Svgpage]
class TeacherSub extends React.Component{
    constructor(props)
    {
        super(props);
          this.state={
            showComponent: true,
              subject:{},
              
                   dimensionBio:[
                    {
                     width:40,
                     height:40,
                    },
                    {
                        width:120,
                        height:120
                    }
                ],
                dimensionPhy:[
                    {
                     width:35,
                     height:37,
                    },
                    {
                        width:105,
                        height:113
                    }
                ],
                dimensionMath:[
                    {
                     width:40,
                     height:40,
                    },
                    {
                        width:120,
                        height:120
                    }
                ],
                dimensionSoc:[
                    {
                     width:40,
                     height:40,
                    },
                    {
                        width:120,
                        height:120
                    }
                ],
                dimensionSci:[
                    {
                     width:40,
                     height:40,
                    },
                    {
                        width:120,
                        height:122
                    }
                ],
                dimensionChem:[
                    {
                     width:33,
                     height:40,
                    },
                    {
                        width:99,
                        height:120
                    }
                ],
            value:[
               {
                   color1:'#9363F9',
                   color2:'#4A59DB',
                   subjectname:"biology",
                //    Svg:Svgpage
               },
               {
                   color1:"#57D5C3",
                   color2:"#3C83D7",
                   subjectname:"Physics"
               },
               
                {
                    color1:"#FF7B93",
                    color2:"#E0435E",
                    subjectname:"Mathematics"
                },
                {
                    color1:"#FF5B37",
                    color2:"#FF8660",
                    subjectname:"Social Studies"
                },
                {
                    color1:"#16BF74",
                    color2:"#36CC9C",
                    subjectname:"Science"
                },
                {
                    color1:"#BA7DFB",
                    color2:"#8738D9",
                    subjectname:"Chemistry"
                }
            ],
       }
  }
//   {console.log()}
// componentDidMount=()=>{
//     console.log('hii bro');
//     console.log(this.props.props,'function');
//     this.state.subject=this.props.props
//     // this.setState({
//     //     subject:this.state.subject
//     // })
//     console.log(this.state.subject,"subject");
//     functions()
//     .httpsCallable('getTeacherSubjects')(this.props.props)
//     .then((response) => {
//         this.setState({
//            subject:Object.keys(response.data)
//         })
       
//     //   console.log("sucsesfully getting Teacher details dudee to fire functions from teacher in teacherSub", response.data)
//       console.log("sucsesfully getting Teacher details dudee to fire functions from teacher in teacherSub",this.state.subject)
    
//     });
    
// }
// list=()=>{
//     return test.map((i)=>{
//         return(
//             <View>
//                 <Text>{test[i]}</Text>
//             </View>
//         )
//     })
// }
    render()
    {
        functions()
        .httpsCallable('getTeacherSubjects')(this.props.props)
        .then((response) => {
            test=Object.keys(response.data)
            console.log("sucsesfully getting Teacher details dudee to fire functions from teacher in teacherSub",test[0])
        });
        return(
            <View >
               
               <ScrollView>
                 
                   {}
                 
              {/* --------------------------------BIOLOGY----------------------      */}
                <View style={{display:this.state.showComponent ? 'flex' : 'none', flexDirection: 'row',marginTop:40}}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}}colors={['#9363F9','#4a59d8']} style={{width:328,height:80,marginLeft:10,borderRadius:8}}>
                    <View style={{paddingLeft:20,paddingTop:20}}>
                    <Biology props={this.state.dimensionBio[0]} />
                    </View>
                    <Text style={{color:'white',fontSize:20,marginLeft:80,marginTop:-30}}>Biology</Text>
                     <View style={{marginLeft:200,marginTop:-40,opacity:0.4}}>
                         <Biology props={this.state.dimensionBio[1]}/>
                     </View>
                    </LinearGradient>
                    </View>

{/* ----------------------------------PHYSICS--------------------------------------------- */}
                    <View style={{ display:this.state.showComponent ? 'flex' : 'none',flexDirection: 'row',marginTop:20}}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}}colors={['#57D5C3','#3C83D7']} style={{width:328,height:80,marginLeft:10,borderRadius:8}}>
                    <View style={{paddingLeft:20,paddingTop:20}}>
                    <Physics props={this.state.dimensionPhy[0]}/>
                    </View>
                    <Text style={{color:'white',fontSize:20,marginLeft:80,marginTop:-30}}>Physics</Text>
                     <View style={{marginLeft:210,marginTop:-40,opacity:0.5,fontSize:5}}>
                         <Physics props={this.state.dimensionPhy[1]}/>
                     </View>
                    </LinearGradient>
                    </View>

{/* ------------------------------------------------MATHS--------------------------------------------- */}

                    <View style={{ flexDirection: 'row',marginTop:20}}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}}colors={['#FF7B93','#E0435E']} style={{width:328,height:80,marginLeft:10,borderRadius:8}}>
                    <View style={{paddingLeft:20,paddingTop:20}}>
                    <Maths props={this.state.dimensionMath[0]}/>
                    </View>
                    <Text style={{color:'white',fontSize:20,marginLeft:80,marginTop:-30}}>Maths</Text>
                     <View style={{marginLeft:210,marginTop:-40,opacity:0.4,fontSize:5}}>
                         <Maths props={this.state.dimensionMath[1]}/>
                     </View>
                    </LinearGradient>
                    </View>
                    

{/* --------------------------------------------------------SOCIAL-------------------------------------------------------- */}

                    <View style={{ flexDirection: 'row',marginTop:20}}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}}colors={['#FF5B37','#FF8660']} style={{width:328,height:80,marginLeft:10,borderRadius:8}}>
                    <View style={{paddingLeft:20,paddingTop:20}}>
                    <Social props={this.state.dimensionSoc[0]}/>
                    </View>
                    <Text style={{color:'white',fontSize:20,marginLeft:80,marginTop:-30}}>Social</Text>
                     <View style={{marginLeft:210,marginTop:-40,opacity:0.4,fontSize:5}}>
                         <Social props={this.state.dimensionSoc[1]}/>
                     </View>
                    </LinearGradient>
                    </View>

{/* -----------------------------------------------------SCIENCE----------------------------------------------------- */}
                    <View style={{ flexDirection: 'row',marginTop:20}}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}}colors={['#16BF74','#36CC9C']} style={{width:328,height:80,marginLeft:10,borderRadius:8}}>
                    <View style={{paddingLeft:20,paddingTop:20}}>
                    <Science props={this.state.dimensionSci[0]}/>
                    </View>
                    <Text style={{color:'white',fontSize:20,marginLeft:80,marginTop:-30}}>Science</Text>
                     <View style={{marginLeft:210,marginTop:-40,opacity:0.4,fontSize:5}}>
                         <Science props={this.state.dimensionSci[1]}/>
                     </View>
                    </LinearGradient>
                    </View>

{/* -----------------------------------------------CHEMISTRY------------------------------------------------- */}
                    <View style={{ flexDirection: 'row',marginTop:20}}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}}colors={['#BA7DFB','#8738D9']} style={{width:328,height:80,marginLeft:10,borderRadius:8}}>
                    <View style={{paddingLeft:20,paddingTop:20}}>
                    <Chemistry props={this.state.dimensionChem[0]}/>
                    </View>
                    <Text style={{color:'white',fontSize:20,marginLeft:80,marginTop:-30}}>Chemistry</Text>
                     <View style={{marginLeft:210,marginTop:-40,opacity:0.4,fontSize:5}}>
                         <Chemistry props={this.state.dimensionChem[1]}/>
                     </View>
                    </LinearGradient>
                    </View>
                    </ScrollView>
                    <View style={styles.footer}>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>View/Edit Attendence</Text></TouchableOpacity>
         </View>
            </View>
            
        )
    }
}
export default TeacherSub;
const styles = StyleSheet.create(
{
button:{
    backgroundColor:'#1F85FF',
    padding:10,
    borderRadius: 4,
    width:240,
    height:40
  
  },
  buttonText:{
    color:'white',
    alignSelf:'center',
    fontSize:14,
    fontFamily:"Roboto",
    fontWeight: "bold"
    
  },
  footer: {
    backgroundColor:'#FFFFFF',
    height:56,
    alignItems:'center',
    justifyContent:'center',
    marginTop:75,
    opacity:100
    
    },
   }
)