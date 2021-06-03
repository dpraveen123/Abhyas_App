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
    // Filter
} from 'react-native-svg';
function Timetablesvg(){
    return(
<Svg width="344" height="177" viewBox="0 0 344 177" fill="none" xmlns="http://www.w3.org/2000/svg">
<G filter="url(#filter0_d)">
<Rect x="8" y="4.5" width="328" height="160" rx="8" fill="url(#paint0_linear)"/>
<Rect x="8.5" y="5" width="327" height="159" rx="7.5" stroke="#E1E8ED"/>
</G>
<Defs>
<Filter id="filter0_d" x="0" y="0.5" width="344" height="176" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</Filter>
<LinearGradient id="paint0_linear" x1="331.5" y1="84.5" x2="144.089" y2="240.641" gradientUnits="userSpaceOnUse">
<Stop stop-color="#4860DC"/>
<Stop offset="0.9999" stop-color="#38A8FA"/>
</LinearGradient>
</Defs>
</Svg>

    )
}
export default Timetablesvg