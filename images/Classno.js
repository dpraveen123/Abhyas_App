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
export default function Classno() {
  return (
    <View style={{borderColor: 'black'}}>
      <Svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <G filter="url(#filter0_d)">
          <Rect x="4" y="2" width="64" height="64" rx="4" fill="#17BF63" />
          <Rect
            x="4"
            y="2"
            width="64"
            height="64"
            rx="4"
            fill="url(#paint0_linear)"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_d"
            x="0"
            y="0"
            width="72"
            height="72"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <FeFlood flood-opacity="0" result="BackgroundImageFix" />
            <FeColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <FeOffset dy="2" />
            <FeGaussianBlur stdDeviation="2" />
            <FeColorMatrix
              type="matrix"
              values="0 0 0 0 0.0784314 0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0.2 0"
            />
            <FeBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <FeBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </Filter>
          <LinearGradient
            id="paint0_linear"
            x1="59"
            y1="7"
            x2="15"
            y2="66"
            gradientUnits="userSpaceOnUse">
            <Stop stop-color="#F879C7" />
            <Stop offset="1" stop-color="#9A56E1" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
}
