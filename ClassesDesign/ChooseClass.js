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
    Picker,
    Modal
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import AfterClassPage from './AfterClassPage';
var i=0;
import Page from './NoSectionsAdded'
import functions from '@react-native-firebase/functions';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import store from '../redux'
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
             n:[],
             pickervalue:'',
             value:false,
             noSectionAdded:[],
             show:false,
             visibility:false
        }
    }
    componentDidMount=()=>{
        console.log(store.getState()," i am from choose class bro")
    }
onValueChange=(value1)=>{
    console.log(value1," is picker value")
    
   if(value1!=0){
    this.setState({
        pickervalue:value1,
        button:false,
        color:'#1F85FF',
        addSection:true,
        addAnotherSectionTitle:true,
       
        
    })
   }
} 
AddSection=()=>{
    // console.log(this.state.addSection);
    if(this.state.addSection)
    {
    return(
        <View>
          <Text style={styles.ChooseClass}>Add sections</Text>
          <TextInput style={styles.InputStyle}
              onChangeText={(value)=>{
              console.log('value is',value)
              this.state.value=true
              this.state.show=false
              console.log('this is show in addsection',this.state.show);
              console.log('this.state.value page Addsection',this.state.value);
              this.state.noSectionAdded[0]=value
              console.log('this.state.noSectionAdded',this.state.noSectionAdded[0],this.state.noSectionAdded);
          }}
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
    // console.log("n is",this.state.n)
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
NoSectionsAdded=()=>{
    console.log(this.state.noSectionAdded);
    if(this.state.noSectionAdded[this.state.l]!='')
    {
    return(
        <>
        {console.log(this.state.noSectionAdded)}
    <Page/>
    </>
    )
    }
    else{
      return(
          <View></View>
      )
    }
    
}
page=()=>{
    console.log('hi this.page');
    if(!this.state.value)
    {
        console.log('this is page true');
        return(
            <Page/>
        )
    }
    else{
        console.log('this is page false');
        return(
            <View></View>
        )
    }
}
// ..........................Addingclass to firestore................................./
uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
ShowPage=()=>{
   if (!this.state.value) 
   {
       this.setState({
           show:true
           
        })
   }
   else{
       var sectionuuids={
       }
    //    console.log(this.state.no)
       this.state.noSectionAdded.map((i,l)=>{
           console.log(i,l)
           sectionuuids[i]=this.uuidv4()
       })
       console.log("uuids are",sectionuuids,"lenght is",Object.keys(sectionuuids)[0],sectionuuids[Object.keys(sectionuuids)[0]])
       this.setState({show:false})
       var details={
           className:this.state.pickervalue,
           sections:sectionuuids,
           uid:store.getState().authdetails.uuid,
       }
       console.log(details,"these are the details")
       functions()
      .httpsCallable('addingClass')(details)
      .then(response => {
        console.log("sucsesfully added a new class bro",response.data)
      });
   }

}  
afterClassPage=()=>{

}
render() {
        return (
            <View>
                 
                 <View 
                    style={styles.PopUp}>  
                 <Text  style={styles.AddClass}>Add Classes</Text>
                 <Text style={styles.ChooseClass}>Choose class</Text>
                 {/* <Text>
                    {this.page()}
                </Text> */}
                 {console.log('checking page',this.state.value)}
                 {/* <Text>
                    {this.NoSectionsAdded()}
                </Text> */}
                 <TouchableOpacity  
                style={{
                    position:'absolute',
                    width:328,
                    height:40,
                    opacity:50,
                    backgroundColor:this.state.color,
                    borderRadius:4,
                    marginLeft:16,
                    marginTop:480,
                    justifyContent:'center',
                    textAlign:'center'
                }}
                  disabled={this.state.button}>
                    <Text style={styles.buttonTxt} 
                    onPress={()=>this.ShowPage()}
                    // onPress={()=>{
                        //  console.log('this.state.value add class',this.state.value);
                        // console.log('displaying the no sevtion added value',this.state.noSectionAdded);
                    // }}
                    >Add Class</Text>
                 </TouchableOpacity>
                 <View   style={{borderWidth:1,borderColor:'#E1E8ED',width:328,height:40,marginLeft:16,borderRadius:4}}>
                 
                <Picker  onValueChange={(value1) =>{this.onValueChange(value1)}}>
                    <Picker.Item label="Select class" value="0"/>
                    <Picker.Item label="1st class" value="1st class"/>
                    <Picker.Item label="2nd class" value="2nd class"/>
                    <Picker.Item label="3rd class" value="3rd class"/>
                    <Picker.Item label="4th class" value="4th class"/>
                    <Picker.Item label="5th class" value="5th class"/>
                    <Picker.Item label="6th class" value="6th class"/>
                    <Picker.Item label="7th class" value="7th class"/>
                    <Picker.Item label="8th class" value="8th class"/>
                    <Picker.Item label="9th class" value="9th class"/>
                    <Picker.Item label="10th class" value="10th class"/>
                </Picker>
                </View>
                <Text>
                    {this.AddSection()}
                </Text>
               
                <Text>
                {/* {this.AddAnotherSection()} */}
                   {
                    this.state.n.map(l=>{
            // console.log("l is ",l)
            return(
            <View>
                 <View>
                {/* <Text style={{backgroundColor:'black'}}>hello</Text> */}
                  <TextInput 
                  style={styles.InputStyle}
                        placeholder="Enter section name"
                        value={this.state.noSectionAdded}
                        onChangeText={(value)=>{
                            console.log(value);
                            this.state.value=true,
                            this.state.show=false
                            console.log('this is show in addanothersection',this.state.show);
                            console.log('this.state.value page addanothersection',this.state.value);
                           this.state.noSectionAdded[l]=value
                           console.log( this.state.noSectionAdded[l],l,this.state.noSectionAdded)
                            // console.log('this.state.noSectionAdded',this.state.noSectionAdded[this.state.l]);
                        }}  
                  ></TextInput> 
            </View>
            
            </View>
            )
        })
                   }
                </Text>
                {/* --------------------------------------After AddClass Page---------------------------------------------------- */}
                  {/* <View 
                  
                //   visible=false
                  >
                  <AfterClassPage 
                  style={{visibility: 'hidden' }}
                  />
                  </View> */}
                <Text>
                    {this.AddAnotherSectionTitle()}
                </Text>
                
                </View>
                
{/* ---------------------------------Modal for no sections added popup---------------------------- */}
               <Modal
                 transparent={true}
                 visible={this.state.show}
                 >
                    <View style={{backgroundColor:"#000000aa",flex:1}}>
                        <View style={{backgroundColor:"#ffffff",margin:30,width:340,height:230.25,borderRadius:8,marginTop:208.75,marginLeft:22,marginRight:16}}>
                            <View style={{marginTop:24.25,marginLeft:147.33}}>
                            {/* <Info/> */}
                            </View>
                            {/* <Image source={Info} style={{marginTop:24.25,marginLeft:147.33}}></Image> */}
                            <Text style={{textAlign:'center',fontSize:20,marginTop:19.33}}>No Sections Added!</Text>
                            <Text style={{color:"#657786",textAlign:'center',marginTop:8}}>create class without section?</Text>
                            <View>
                                <View  style={{ flexDirection: "row" }}>
                                 <TouchableOpacity style={{width:136,height:42,borderRadius:8,backgroundColor:"#e1e8e8",marginTop:24,marginLeft:20}}>
                                     <Text style={{fontSize:16,color:"#657786",marginTop:9,marginLeft:20}} onPress={()=>{this.setState({show:false})}}>Add Sections</Text>
                                     </TouchableOpacity>  
                                     <TouchableOpacity style={{width:136,height:42,borderRadius:8,backgroundColor:"#1f85ff",marginTop:24,marginLeft:20}}>
                                     <Text style={{fontSize:16,color:"white",marginTop:10,marginLeft:35.5}} onPress={()=>{this.setState({show:false})}}>Continue</Text>
                                     </TouchableOpacity>   
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
    
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
})
{/* <RNPickerSelect
                 placeholder={{label:'Select class'}}
                // value='hiii'
                style={{color:'black'}}
                 onValueChange={(value1) =>
                   {
                    
                       this.setState=({
                          pickervalue:value1
                       })
                       console.log('value1 is',value1);
                    //    console.log('selectedValue is',this.state.pickervalue)
                    this.onValueChange(value1)
                   }}
                //  selectedValue={selectedValue}
                 selectedValue={this.state.pickervalue}

                //  console.log()
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
                /> */}