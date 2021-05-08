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
    Filter,
    feOffset,
    feFlood,
    feColorMatrix,
    feGaussianBlur,
    feBlend
} from 'react-native-svg';
function Rectangler(){
    return(
        <Svg width="345" height="177" viewBox="0 0 345 177" fill="none" xmlns="http://www.w3.org/2000/svg">
<G filter="url(#filter0_d)">
<Rect x="8.74292" y="4.14014" width="328" height="160" rx="8" fill="url(#paint0_linear)"/>
</G>
<Defs>
<Filter id="filter0_d" x="0.74292" y="0.140137" width="344" height="176" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</Filter>
<LinearGradient id="paint0_linear" x1="332.243" y1="84.1401" x2="144.832" y2="240.281" gradientUnits="userSpaceOnUse">
<Stop stop-color="#4860DC"/>
<Stop offset="0.9999" stop-color="#38A8FA"/>
</LinearGradient>
</Defs>
</Svg>

    )
}
export default Rectangler