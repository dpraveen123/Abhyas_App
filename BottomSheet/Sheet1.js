import * as React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
 
export default function Sheet1() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'pink',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );
 
  const sheetRef = React.useRef(null);
  fs = new Animated.Value(1)
 
  return (
    <>
    <View
    style={{flex:1,backgroundColor:'papayawhip',alignItems:'center',}}>
        <TouchableOpacity style={{backgroundColor:'pink'}}
        // onPress={()=>console.log('pressed')}
        onPress={() => sheetRef.current.snapTo(0)}
        >
            <Text>Open Bottom Sheet</Text>
        </TouchableOpacity>
    </View>
      {/* <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      > */}
         {/* <TouchableOpacity style={{backgroundColor:'black'}}>
            <Text>
            Open Bottom Sheet
            </Text>
          <TouchableOpacity/>  */}
        {/* <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        /> */}
      {/* </View> */}
      <BottomSheet
        ref={sheetRef}
        snapPoints={[300,450,0]}
        initialSnap={1}
        callbackNode={fs}
        borderRadius={10}
        enabledGestureInteraction={true}
        renderContent={renderContent}
      />
    </>
   
  );
}