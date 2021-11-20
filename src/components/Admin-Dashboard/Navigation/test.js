import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Pie from 'react-native-pie'
 
export default function Test (){
    return (
      <View style={styles.container}>
          <View
            style={{
              paddingVertical: 15,
              flexDirection: 'row',
              width: 350,
              justifyContent: 'space-between',
            }}
          >
           <TouchableOpacity>
           <Pie
              radius={80}
              sections={[
                {
                  percentage: 80,
                  color: '#1F85FF',
                },
                {
                  percentage: 20,
                  color: '#EE2C4F',
                },
               
              ]}
              strokeCap={'butt'}
            /> 
           </TouchableOpacity>
            
           

    
            
          </View>
        </View>
    )
  
}
 
const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', height: 1050 },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
})