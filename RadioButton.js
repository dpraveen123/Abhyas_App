import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import {circles} from './circle.png';
import {circle2} from './circle2.png';
import Example  from './Example';
import RBSheet from 'react-native-raw-bottom-sheet'
export default class RadioButton extends Component {
	constructor(props)
    {
        super(props);
        this.state={
            data:['Last 7 days','This Month','Last 6 Mon','This    Year'],
            checked:null
        }
    }
    componentDidMount=()=>{
        console.log("radio button props is",this.props)
    }
	render() {
		const { PROP } = this.props;
		const { value } = this.state;

		return (
			<View>
                <View>
                {
                    this.state.data.map((data,key)=>{
                        return(
                            
                            <View>
                                {this.state.checked==key?
                               
                                  <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginTop:28,marginLeft:18}} onPress={()=>{
                                      this.props.close(data)
                                    // console.log("props is",this.props)
                                  }} >
                                  {/* onPress={()=>
                                  {this.setState({checked:key})
                                  this.RBSheet.close(key)
                                  
                                  }} */}
                                      <Text style={{fontSize:18}}>{data}</Text>
                                      <View style=
                                      {{
                                        width: 24,
                                        height: 24,
                                        borderRadius: 15,
                                        borderColor:'#1F85FF',
                                        borderWidth:8,
                                        marginLeft:205
                                      }}
                                      >
                                      </View>
                                  </TouchableOpacity>
                                  
                                  :
                                  <TouchableOpacity  style={{flexDirection:'row',alignItems:'center',marginTop:28,marginLeft:18}} onPress={()=>{this.props.close(data)}}>
                                      <Text style={{fontSize:18}}>{data}</Text>
                                      
                                      <View style=
                                      {{
                                        height: 24,
                                        width: 24,
                                        borderRadius: 15,
                                        borderWidth: 2,
                                        borderColor: '#E1E8ED',
                                        alignItems: 'center',
                                        marginLeft:205
                                      }}
                                      >
                                      </View>
                                  </TouchableOpacity>
                                }
                            </View>
                            
                        )
                    })
                }
            </View>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	
});