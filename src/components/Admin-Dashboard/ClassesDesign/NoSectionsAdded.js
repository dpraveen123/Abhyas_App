import React, { Component } from 'react'
import {View,Text,Modal, Button,Image,TouchableOpacity} from 'react-native'
import Info from '../Navigation/Icons/Info'
class Page extends Component {
    constructor(){
      super();
      this.state={
          show:false
      }
    }

    render() {
        return (
            <View style={{flex:1}}>
                {/* <Text style={{color:"white",fontSize:30,marginLeft:95}}>Normalscreen</Text> */}
                <View style={{marginTop:8,marginLeft:92}}>
                <Button title="show popup" onPress={()=>{this.setState({show:true})}}></Button></View>
                <Modal
                 transparent={true}
                 visible={this.state.show}
                 >
                    <View style={{backgroundColor:"#000000aa",flex:1}}>
                        <View style={{backgroundColor:"#ffffff",margin:30,width:340,height:230.25,borderRadius:8,marginTop:208.75,marginLeft:22,marginRight:16}}>
                            <View style={{marginTop:24.25,marginLeft:147.33}}>
                            <Info/>
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

export default Page