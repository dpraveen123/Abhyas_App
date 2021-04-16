import React from 'react'
// import LinearGradient from 'react-native-linear-gradient';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';
export default function menu(){
    return(
        <View 
        // style={styles.menu}
        >
            <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0)">
            <Path d="M19.9095 3.8335H1.57627C1.11602 3.8335 0.74292 4.20659 0.74292 4.6668C0.74292 5.127 1.11602 5.50015 1.57627 5.50015H19.9096C20.3698 5.50015 20.7429 5.12705 20.7429 4.6668C20.7429 4.20654 20.3698 3.8335 19.9095 3.8335Z" fill="black"/>
            <Path d="M19.9095 9.6665H1.57627C1.11602 9.6665 0.74292 10.0396 0.74292 10.4998C0.74292 10.9601 1.11602 11.3332 1.57627 11.3332H19.9096C20.3698 11.3332 20.7429 10.9601 20.7429 10.4998C20.7429 10.0396 20.3698 9.6665 19.9095 9.6665Z" fill="black"/>
            <Path d="M13.5207 15.5H1.29848C0.99165 15.5 0.74292 15.8731 0.74292 16.3334C0.74292 16.7936 0.99165 17.1667 1.29848 17.1667H13.5207C13.8275 17.1667 14.0763 16.7936 14.0763 16.3334C14.0763 15.8731 13.8275 15.5 13.5207 15.5Z" fill="black"/>
            </G>
            <Defs>
            <ClipPath id="clip0">
            <Rect width="20" height="20" fill="white" transform="translate(0.74292 0.5)"/>
            </ClipPath>
            </Defs>
            </Svg>
            
        </View>
       
    )
}
    const styles=StyleSheet.create({
        menu:{
            paddingLeft:42,
            marginTop:15.33,
        }
    })

