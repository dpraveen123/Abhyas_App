import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity,Image,Dimensions,ScrollView,SafeAreaView,AppRegistry,
    TextInput,Button,Alert,title,TouchableHighlight} from 'react-native'
    import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
    import Edit from './assets/edit';
class Testing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
               l:[1,2,3],
               b:false,
               m:'',
         }
    }
    content=(k)=>{
        this.setState({b:!this.state.b,m:k})
    }
    render() { 
        return (  
            <View>
                <Text>hloooo</Text>
               <View>
                   {
                       this.state.l.map(k=>{
                         return(
                             <View>
                            <View style={{width:300,height:100,borderWidth:1,borderColor:'red',backgroundColor:'whitesmoke',marginTop:1
                            ,marginLeft:30}}>
                    <Text>i am card 1</Text>
                    <TouchableOpacity 
                  onPress={()=>{
                      this.content(k);
                      
                      console.log("click 1")}}
                    
                    >
                        <Text>click 1</Text>
                    </TouchableOpacity>
                  <TouchableOpacity style={styles.Menu}
                  onPress={()=>{console.log("click 2")}}
                  >
                       <Text>click 2</Text>
                  </TouchableOpacity>

                </View>
                <Text>
                  {
                         this.state.b===true && this.state.m===k?<View style={{height:100}}>
                          <Text>
                              here are the sections
                          </Text>
                         </View>:''
                   }
                  </Text>
                  </View>
                         )
                       })
                   }
               </View>
               
            </View>
        );
    }
}
 
export default Testing;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 1,
        elevation:5,
        backgroundColor:'white'
        // position:"absolute"
        
      },
      header: {
    //   paddingVertical: 8,
    //     paddingTop:10,
    //     paddingBottom:10,
    //     marginTop:5,
    // position:'absolute',
    // left:100,
      },
    
       appButtonContainer: {
      
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 5,
    
        
      },
      Menu:{
        marginLeft:250,
        //  marginBottom:50,
         paddingTop:20,
         // marginLeft:20,
         elevation:5,
     //     height:300,
     // width:300,
     // position:'absolute'
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
})