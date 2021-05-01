//Implementinf flat list compnent

import React from 'react';
import {
   StyleSheet,
    View, Text,TouchableOpacity,
    Image,Dimensions,ScrollView,
    SafeAreaView,AppRegistry,
    TextInput,Button,
    Alert,title,
    TouchableHighligh}
     from 'react-native';

     class New extends React.Component {
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
       goToLoad =() => {
         this.setState({isLoading : true});
       };
       selectionHandler =() =>{

       }

       render()
       
       {
        const{isLoading,dummyData} =this.state;
         return(
           <View style={{flex:1}}>
             <ScrollView contentContainerStyle={{flex:1}}>
               <View>
            {
              dummyData.map((item,index) =>
              {
                return(
                  <View
                  // onPress={} 
                  style={{
                    paddingVertical:13,
                    paddingHorizontal:70,
                    // borderRadius:42,
                    // justifyContent:"center",
                    // alignItems:"center",borderColor:"black",
                    // borderBottomWidth:1
                    flexDirection:"row"
                  }}>
                    <Text >{item.name}</Text>
                    <View style={{flexDirection:"row",paddingLeft:130,flex:1}}>
                      <TouchableOpacity >
                    <Text >Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{paddingLeft:5}}>Delete</Text>
                    </TouchableOpacity>
                    </View>
     </View> 
                  // </TouchableOpacity>
                )
              })
            }
            

              
               
                  

                

  
            
             </View>
             </ScrollView>
           </View>

         );
       }




     }


     export default New;


