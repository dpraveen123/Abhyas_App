import React from 'react';
import {View} from 'react-native';
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
  export default function Fil(){
      
          return(
              <View>
            <Svg width="70" height="20" viewBox="0 0 70 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M3 14.1665H11.3333" stroke="#1F85FF" stroke-width="2" stroke-linecap="round"/>
            <Path d="M8.83331 5.8335H17.1666" stroke="#1F85FF" stroke-width="2" stroke-linecap="round"/>
            <Circle cx="14.6666" cy="14.1668" r="2.33333" stroke="#1F85FF" stroke-width="2"/>
            <Path d="M7.83335 5.83333C7.83335 7.122 6.78868 8.16667 5.50002 8.16667C4.21136 8.16667 3.16669 7.122 3.16669 5.83333C3.16669 4.54467 4.21136 3.5 5.50002 3.5C6.78868 3.5 7.83335 4.54467 7.83335 5.83333Z" stroke="#1F85FF" stroke-width="2"/>
            <Path d="M32.2109 10.6797H27.6328V15.5H25.6562V4.125H32.8828V5.71875H27.6328V9.10156H32.2109V10.6797ZM36.2891 15.5H34.3906V7.04688H36.2891V15.5ZM34.2734 4.85156C34.2734 4.5599 34.3646 4.31771 34.5469 4.125C34.7344 3.93229 35 3.83594 35.3438 3.83594C35.6875 3.83594 35.9531 3.93229 36.1406 4.125C36.3281 4.31771 36.4219 4.5599 36.4219 4.85156C36.4219 5.13802 36.3281 5.3776 36.1406 5.57031C35.9531 5.75781 35.6875 5.85156 35.3438 5.85156C35 5.85156 34.7344 5.75781 34.5469 5.57031C34.3646 5.3776 34.2734 5.13802 34.2734 4.85156ZM40.3828 15.5H38.4844V3.5H40.3828V15.5ZM44.8359 4.99219V7.04688H46.3281V8.45312H44.8359V13.1719C44.8359 13.4948 44.8984 13.7292 45.0234 13.875C45.1536 14.0156 45.3828 14.0859 45.7109 14.0859C45.9297 14.0859 46.151 14.0599 46.375 14.0078V15.4766C45.9427 15.5964 45.526 15.6562 45.125 15.6562C43.6667 15.6562 42.9375 14.8516 42.9375 13.2422V8.45312H41.5469V7.04688H42.9375V4.99219H44.8359ZM51.5078 15.6562C50.3047 15.6562 49.3281 15.2786 48.5781 14.5234C47.8333 13.763 47.4609 12.7526 47.4609 11.4922V11.2578C47.4609 10.4141 47.6224 9.66146 47.9453 9C48.2734 8.33333 48.7318 7.8151 49.3203 7.44531C49.9089 7.07552 50.5651 6.89062 51.2891 6.89062C52.4401 6.89062 53.3281 7.25781 53.9531 7.99219C54.5833 8.72656 54.8984 9.76562 54.8984 11.1094V11.875H49.375C49.4323 12.5729 49.6641 13.125 50.0703 13.5312C50.4818 13.9375 50.9974 14.1406 51.6172 14.1406C52.487 14.1406 53.1953 13.7891 53.7422 13.0859L54.7656 14.0625C54.4271 14.5677 53.974 14.9609 53.4062 15.2422C52.8438 15.5182 52.2109 15.6562 51.5078 15.6562ZM51.2812 8.41406C50.7604 8.41406 50.3385 8.59635 50.0156 8.96094C49.6979 9.32552 49.4948 9.83333 49.4062 10.4844H53.0234V10.3438C52.9818 9.70833 52.8125 9.22917 52.5156 8.90625C52.2188 8.57812 51.8073 8.41406 51.2812 8.41406ZM60.8047 8.78125C60.5547 8.73958 60.2969 8.71875 60.0312 8.71875C59.1615 8.71875 58.5755 9.05208 58.2734 9.71875V15.5H56.375V7.04688H58.1875L58.2344 7.99219C58.6927 7.25781 59.3281 6.89062 60.1406 6.89062C60.4115 6.89062 60.6354 6.92708 60.8125 7L60.8047 8.78125ZM66.7422 13.2031C66.7422 12.8646 66.6016 12.6068 66.3203 12.4297C66.0443 12.2526 65.5833 12.0964 64.9375 11.9609C64.2917 11.8255 63.7526 11.6536 63.3203 11.4453C62.3724 10.987 61.8984 10.3229 61.8984 9.45312C61.8984 8.72396 62.2057 8.11458 62.8203 7.625C63.4349 7.13542 64.2161 6.89062 65.1641 6.89062C66.1745 6.89062 66.9896 7.14062 67.6094 7.64062C68.2344 8.14062 68.5469 8.78906 68.5469 9.58594H66.6484C66.6484 9.22135 66.513 8.91927 66.2422 8.67969C65.9714 8.4349 65.612 8.3125 65.1641 8.3125C64.7474 8.3125 64.4062 8.40885 64.1406 8.60156C63.8802 8.79427 63.75 9.05208 63.75 9.375C63.75 9.66667 63.8724 9.89323 64.1172 10.0547C64.362 10.2161 64.8568 10.3802 65.6016 10.5469C66.3464 10.7083 66.9297 10.9036 67.3516 11.1328C67.7786 11.3568 68.0938 11.6276 68.2969 11.9453C68.5052 12.263 68.6094 12.6484 68.6094 13.1016C68.6094 13.862 68.2943 14.4792 67.6641 14.9531C67.0339 15.4219 66.2083 15.6562 65.1875 15.6562C64.4948 15.6562 63.8776 15.5312 63.3359 15.2812C62.7943 15.0312 62.3724 14.6875 62.0703 14.25C61.7682 13.8125 61.6172 13.3411 61.6172 12.8359H63.4609C63.487 13.2839 63.6562 13.6302 63.9688 13.875C64.2812 14.1146 64.6953 14.2344 65.2109 14.2344C65.7109 14.2344 66.0911 14.1406 66.3516 13.9531C66.612 13.7604 66.7422 13.5104 66.7422 13.2031Z" fill="#1F85FF"/>
            </Svg>
            



          </View>
          



              
          )
      }
  
