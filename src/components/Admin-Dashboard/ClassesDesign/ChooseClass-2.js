import React,{useState} from 'react'
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
// const addSection=0
export default function ChooseClass2 (props) {
    // const [State, setState] = useState(
    //     {
    //         button:true,
    //         addSection:false,
    //         color:'rgba(29, 161, 242, 0.5)'
    //     })
    const [color, setcolor] = useState('rgba(29, 161, 242, 0.5)')
    const [addSection, setaddSection] = useState(false)
    const [button, setbutton] = useState(true)
    const onValueChange=()=>{
        // button=false
        setbutton(false)
        console.log({button});
        setcolor('#1F85FF')
        console.log({color});
        setaddSection(true)
        {console.log({addSection});}
    }
// {console.log(State.button);}   
// {console.log(State.addSection);}
// {console.log(State.color);}
        return (
            <View >
                 <View 
                style={styles.PopUp}
                >   
                 <Text  style={styles.AddClass}>Add Classes</Text>
                 <TouchableOpacity 
                //  style={styles.button}
                style={{
                    position:'absolute',
                    width:328,
                    height:36,
                    opacity:50,
                    backgroundColor:color,
                    // backgroundColor:State.color,
                    borderRadius:4,
                    marginLeft:16,
                    marginTop:480
                }}
                  disabled={button}>
                    <Text style={styles.buttonTxt}>Add Class</Text>
                 </TouchableOpacity>
                <Text style={styles.ChooseClass}>Choose class</Text>
                <View   
                style={styles.InputStyle}
                >    
                <RNPickerSelect
                 placeholder={{label:'Select class'}}
                 onValueChange={(value) =>
                    onValueChange()
                    // setState(
                    // {
                    //     button:false,
                    //     addSection:true,
                    //     color:'#1F85FF'
                    // })
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
                </View>
                {/* <View>
      <Image src="https://www.figma.com/file/bycIN6fw4MAmeyRsGXOInI/Project-Abhyas?node-id=717%3A718"/>
  </View> */}
  {/*  */}
                <AddSection 
                // {...props}
                />
                <AnotherSection/>
                </View>
                
            </View>
        )
    }
const AddSection=(props)=>{
    console.log(props);
    return(
        <View>
         <Text style={styles.ChooseClass}>Add sections</Text>
                <TextInput style={styles.InputStyle}
                placeholder="Enter section name"  
                >
                </TextInput>
        </View> 
    )
    // if({...props})
    // {
        // console.log(props);
        // return(
        //     <Text>sss</Text>
        // )
    // }
    // else{
        // console.log(props.State.addSection);
    //     return(
    //         <Text>noo</Text>
    //     )
    // }
}
function AnotherSection(){
    return(
        <View>
            {/* <AnothersectionInput/> */}
                <TouchableOpacity>
                <Text style={styles.aText}>Add another section</Text>    
                </TouchableOpacity>  
        </View>
    )
}
function AnothersectionInput(){
    return(
        <View>
                <TextInput style={styles.InputStyle}
                placeholder="Enter section name"  
                >
                </TextInput>
        </View>
    )
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
    picker:{
        // paddingTop:10
        // paddingBottom:150
        // marginBottom:20
    //    paddingLeft:12
    }
})
//   {/* <Text style={styles.ChooseClass}>Add sections</Text>
//                 <TextInput style={styles.InputStyle}
//                 placeholder="Enter section name"  
//                 >
//                 </TextInput> */}
//                 <View style={{
//                     /* Group 310 */
              
//               position: 'absolute',
//               width: 80,
//               height: 80,
//               left: 138.22,
//               top: 104,
              
              
              
//               /* Ellipse 35 */
              
//               position: 'absolute',
//               width: 80,
//               height: 80,
//               left: 138.22,
//               top: 104,
              
//               /* Grey3 */
//               background: '#E1E8ED',
              
              
//               /* user 1 */
              
//               position: 'absolute',
//               width: 48,
//               height: 48,
//               left: 154.22,
//               top: 120,
              
              
              
//               /* Vector */
              
//               position: 'absolute',
//               left: 25.2,
//               right: 26.63,
//               top: 0,
//               bottom: 51.83,
              
//               background: '#AAB8C2',
              
              
//               /* Vector */
              
//               position: 'absolute',
//               left: 8.2,
//               right: 8.37,
//               top: 48.3,
//               bottom: 0,
              
//               background: '#AAB8C2'
              
//                 }}></View>