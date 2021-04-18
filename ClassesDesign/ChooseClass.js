import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Button,
    Image,
    Picker
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
var i=0;
import Page from './NoSectionsAdded'
export default class ChooseClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             button:true,
             color:'rgba(29, 161, 242, 0.5)',
             addSection:false,
             addAnotherSectionTitle:false,
             addAnotherSection:false,
             m:0,
             n:[]
             
        }
    }
    
onValueChange=()=>{
    this.setState({
        button:false,
        color:'#1F85FF',
        addSection:true,
        addAnotherSectionTitle:true,
    })
} 
AddSection=()=>{
    console.log(this.state.addSection);
    if(this.state.addSection)
    {
    return(
        <View>
          <Text style={styles.ChooseClass}>Add sections</Text>
          <TextInput style={styles.InputStyle}
                placeholder="Enter section name"  
          ></TextInput>
                 
        </View> 
    )
    }  
    else{
        <View>
            <Text></Text>
        </View>
    }
} 
AddAnotherSection=()=>{
    this.state.m=this.state.m+1;
    this.state.n=this.state.n.concat(this.state.m)
    this.setState({n:this.state.n})
    console.log("m is",this.state.m)
    this.setState({
        addAnotherSection:true,m:this.state.m
    })
    // this.AnotherSection();
}
AddAnotherSectionTitle=()=>{
    if(this.state.addAnotherSectionTitle)
    {
        return(
           <View>
             <TouchableOpacity
             onPress={()=>
                // console.log('another section added')
              {
                this.AddAnotherSection();
               
              }
            }
             >
               <Text style={styles.aText} 
               >Add another section</Text>    
             </TouchableOpacity>  
           </View> 
        )
    }
    else{
        return(
            <View>

            </View>
        )
    }
}

// AnotherSection=()=>{
//     {console.log('another guy added',this.state.m);}
//     if(this.state.addAnotherSection)
//     {
//         console.log(" m length s",this.state.m)
//         var i=0;
//         this.state.n.map(l=>{
//             console.log("l is ",l)
//             return(
//             <View>
//                  <View>
//                 {/* <Text style={{backgroundColor:'black'}}>hello</Text> */}
//                   <TextInput 
//                   style={styles.InputStyle}
//                         placeholder="Enter section name"  
//                   ></TextInput> 
//             </View>
//             </View>
//             )
//         })
        
// //    }
// }
//     else{
//         <View>
//             <Text></Text>
//         </View>
//     }
// }
    render() {
        return (
            <View>
                 <View 
                    style={styles.PopUp}>  
                 <Text  style={styles.AddClass}>Add Classes</Text>
                 <Text style={styles.ChooseClass}>Choose class</Text>
                 <TouchableOpacity 
                style={{
                    position:'absolute',
                    width:328,
                    height:36,
                    opacity:50,
                    backgroundColor:this.state.color,
                    borderRadius:4,
                    marginLeft:16,
                    marginTop:480
                }}
                  disabled={this.state.button}>
                    <Text style={styles.buttonTxt}>Add Class</Text>
                 </TouchableOpacity>
                 <RNPickerSelect
                 placeholder={{label:'Select class'}}
                 onValueChange={(value) =>
                   this.onValueChange()
                 }
                 items={[
                { label:"1st Class" ,value:"1st Class" },
                { label:"2nd Class" ,value:"2nd Class" },
                { label:"3rd Class" ,value:"3rd Class" },
                { label:"4th Class" ,value:"4th Class" },
                { label:"5th Class" ,value:"5th Class" },
                { label:"6th Class" ,value:"6th Class" },
                { label:"7th Class" ,value:"7th Class" },
                { label:"8th Class" ,value:"8th Class" },
                { label:"9th Class" ,value:"9th Class" },
                { label:"10th Class",value:"10th Class" },
                ]}
                />
                <Text>
                    {this.AddSection()}
                </Text>
                <Text>
                {/* {this.AddAnotherSection()} */}
                   {
                    this.state.n.map(l=>{
            console.log("l is ",l)
            return(
            <View>
                 <View>
                {/* <Text style={{backgroundColor:'black'}}>hello</Text> */}
                  <TextInput 
                  style={styles.InputStyle}
                        placeholder="Enter section name"  
                  ></TextInput> 
            </View>
            </View>
            )
        })
                   }
                </Text>
                <Text>
                    {this.AddAnotherSectionTitle()}
                </Text>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    Page:{
        backgroundColor:'#E5E5E5',
    },
    PopUp:{
        backgroundColor:'white',
        height:540,
        width:357,
        marginTop:88,
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
        marginTop:8,
        marginLeft:148,
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
})