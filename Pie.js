import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ToastAndroid,

  
} from 'react-native';

  

import {
  Header,
  LearnMoreLinks,   
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    
   
  } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import SwipeButton from 'rn-swipe-button';

  export default function Pie(){
      return(
     <View>
         <TouchableOpacity style={{flexDirection:'row',alignItems:'flex-end'}}>
             <Text>Today</Text>
             <Svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M10.6666 1L6.02451 5.64212L1.3824 1" stroke="#14171A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

         </TouchableOpacity>
         <View style={{marginTop:230,position:"absolute",paddingLeft:10}}>
       <SwipeButton
          disabled={false}
          swipeSuccessThreshold={70}
          height={40}
          width={300}
          title="Swipe and Let's go >>"
          
          
         
          onSwipeSuccess={() => {
            alert('Submitted Successfully!');
          }}
          
          railFillBackgroundColor="#e688a1" 
          railFillBorderColor="#e688ff" 
          thumbIconBackgroundColor="#2B57EE"
          thumbIconBorderColor="#CCDDEE" 
          railBackgroundColor="white" 
          railBorderColor="#bbeaff"
        />
        </View>
     </View>
      );
  };