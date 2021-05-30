import React, {useRef} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import StudentMenu from './StudentMenu';


const Sheet = () => {
  const refRBSheet = useRef();
  var Height = (273.5/640)*100;
  var HeightInPercentage = Height+"%";
  console.log(Height);
  console.log(HeightInPercentage);
  return (
    
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => refRBSheet.current.open()}>
        <Text style={{color: '#fff'}}>click me to open sheet</Text>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          container:{
            borderTopLeftRadius:16,
            borderTopRightRadius:16,
            height:HeightInPercentage,

          },
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#E1E8ED",
            width:87,
            height:5.5,
            
          }
        }}
       
      >
          <StudentMenu/>
      </RBSheet>
    </View>
  );
};

export default Sheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(20, 23, 26, 0.5)',
  },
  btn: {
    width: 200,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
