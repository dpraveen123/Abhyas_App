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
    ActivityIndicator,
    Modal
} from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker';
var i=0;
import Page from './NoSectionsAdded'
import functions from '@react-native-firebase/functions';
import store from '../../../../redux'
import styles from './AddNewClassCss'
export default class AddNewClass extends Component {
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
             visibility:false,
             add:0
        }
    }
    componentDidMount=()=>{
        // console.log(store.getState()," i am from choose class bro")
        console.log("okk i get it",this.props)
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
       add:0,
        
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
       this.setState({add:1})
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
        // console.log("sucsesfully added a new class bro",response.data)
        alert("sucsefully added your class")
        this.props.props.loadData()

        this.props.props.modal();
      });
      this.props.props.loadData()

   }
   this.props.props.loadData()

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
                 {/* {console.log('checking page',this.state.value)} */}
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
                    marginTop:440,
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
                    >{this.state.add===0?<Text>Add Class</Text>:<View style={{flexDirection:'row'}}><ActivityIndicator color='white'/><Text style={{color:'white'}}>Adding Class...</Text></View>}</Text>
                 </TouchableOpacity>
                 <View   style={{borderWidth:1,borderColor:'#E1E8ED',width:328,height:40,marginLeft:16,borderRadius:4}}>
                 
                <SelectPicker  onValueChange={(value1) =>{this.onValueChange(value1)}}
                style={{ height: 50, width: '100%' }}
                selectedValue={this.state.pickervalue}
                >
                    <SelectPicker.Item label="Select class" value="0"/>
                    {
                        this.props.props.class.map((l,l1)=>{
                            return(
                            <SelectPicker.Item label={l} value={l} key={l1}/>
                            )
                        })
                    }
                </SelectPicker>
                </View>
                <Text>
                    {this.AddSection()}
                </Text>
               
                <Text>
                {/* {this.AddAnotherSection()} */}
                   {
                    this.state.n.map((l,l1)=>{
            // console.log("l is ",l)
            return(
            <View key={l1}>
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
                    <View style={styles.nsaContainer}>
                        <View style={styles.nsaInnerContainer}>
                         <View>
                         <Text style={styles.nsaHeader}>No Sections Added!</Text>
                            <Text style={styles.nsaQn}>create class without section?</Text>
                            <View>
                                <View  style={{ flexDirection: "row" }}>
                                 <TouchableOpacity style={styles.nsaFirstBtn}>
                                     <Text style={styles.nsaFirstBtnText} onPress={()=>{this.setState({show:false})}}>Add Sections</Text>
                                     </TouchableOpacity>  
                                     <TouchableOpacity style={styles.nsaSecondBtn}>
                                     <Text style={styles.nsaSecondBtnText} onPress={()=>{this.setState({show:false})}}>Continue</Text>
                                     </TouchableOpacity>   
                                </View>
                            </View>
                         </View>
                        </View>
                    </View>
                </Modal>
    
            </View>
        )
    }
}

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