import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Platform, StyleSheet, Text, View, ScrollView, Image,Card ,Dimensions} from 'react-native';
// import DropDownItem from '../react-native-drop-down-item';
// import New from './new';
// var com=require('../react-native-drop-down-item/index.js')
// console.log(com.default,"where is these bri")
var x=0;
const IC_ARR_DOWN = require('../../../../assets/dropup.png');
const IC_ARR_UP = require('../../../../assets/dropdown.png');

export default class App extends Component {

    constructor(props){
        super(props);
        this.state={
          isLoading:false,
          dummyData:[
            {name:"Section 1"},
            {name:"Section 2"},
            {name:"Section 3"}
          ],
        };
      }


  render() {
    const{isLoading,dummyData} =this.state;
    // console.log(this.props.onPress,"these ra eth props bro")
    return (
      <View style={styles.container}>
    
        <ScrollView >
        
                  <DropDownItem
                    contentVisible={false}
                    invisibleImage={
                      IC_ARR_UP
                    }
                    visibleImage={IC_ARR_DOWN}
                    header={
                      <View style={styles.header}>
                      
                    </View>
                    }
                    >

             <View>
            {
              dummyData.map((item,index) =>
              {

                {/* x=x+1;
                console.log("hlooooo",x) */}
                return(
                  <View
                  // onPress={} 
                  style={{
                    paddingVertical:1,
                    paddingHorizontal:1,
                    flexDirection:"row"
                  }}>


                    <TouchableOpacity style={styles.appButtonContainer}>
                    <Text style={{fontSize:15,fontWeight:"bold"}} >{item.name}</Text>
                    </TouchableOpacity>
                   
                  
                  </View> 
                 
                )
              })
            }
             </View>



            </DropDownItem>

             
              
          <View />
        </ScrollView>
      </View>
    );
  }
}



const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    elevation:5,
    // position:"absolute"
    
  },
  header: {
    paddingVertical: 8,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
  },

   appButtonContainer: {
  
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 5,

    
  },
});