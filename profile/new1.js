import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Platform, StyleSheet, Text, View, ScrollView, Image,Card ,Dimensions} from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import New from './new';


const IC_ARR_DOWN = require('../assets/dropup.png');
const IC_ARR_UP = require('../assets/dropdown.png');


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
    return (
      <View style={styles.container}>
        <ScrollView >
        
                  <DropDownItem
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View style={styles.header}>
                    </View>
                    }>

                       <View>
            {
              dummyData.map((item,index) =>
              {
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