import React from 'react'
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
export default function Abhyas(){
    return(
        <Svg width="77" height="24" viewBox="0 0 77 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M8.01878 3.61687L5.21078 11.3689H10.9228L8.11478 3.61687H8.01878ZM2.78678 18.0889H0.338781L6.81878 0.904867H9.31478L15.7948 18.0889H13.3468L11.6908 13.4329H4.46678L2.78678 18.0889ZM23.642 18.4729C22.778 18.4729 21.986 18.2889 21.266 17.9209C20.562 17.5529 20.018 17.0649 19.634 16.4569H19.538V18.0889H17.426V0.904867H19.634V6.32887L19.538 7.96087H19.634C20.018 7.35287 20.562 6.86487 21.266 6.49687C21.986 6.12887 22.778 5.94487 23.642 5.94487C25.194 5.94487 26.506 6.55287 27.578 7.76887C28.682 9.00087 29.234 10.4809 29.234 12.2089C29.234 13.9529 28.682 15.4329 27.578 16.6489C26.506 17.8649 25.194 18.4729 23.642 18.4729ZM23.282 16.4569C24.338 16.4569 25.226 16.0569 25.946 15.2569C26.666 14.4729 27.026 13.4569 27.026 12.2089C27.026 10.9769 26.666 9.96087 25.946 9.16087C25.226 8.36087 24.338 7.96087 23.282 7.96087C22.21 7.96087 21.314 8.36087 20.594 9.16087C19.89 9.96087 19.538 10.9769 19.538 12.2089C19.538 13.4569 19.89 14.4809 20.594 15.2809C21.314 16.0649 22.21 16.4569 23.282 16.4569ZM31.137 0.904867H33.345V6.32887L33.249 7.96087H33.345C33.681 7.38487 34.193 6.90487 34.881 6.52087C35.585 6.13687 36.313 5.94487 37.065 5.94487C38.505 5.94487 39.609 6.36087 40.377 7.19287C41.161 8.00887 41.553 9.17687 41.553 10.6969V18.0889H39.345V11.1289C39.345 9.01687 38.409 7.96087 36.537 7.96087C35.641 7.96087 34.881 8.33687 34.257 9.08887C33.649 9.82487 33.345 10.6889 33.345 11.6809V18.0889H31.137V0.904867ZM54.4224 6.32887L47.0544 23.2729H44.7744L47.5104 17.3449L42.6624 6.32887H45.0624L48.5664 14.7769H48.6144L52.0224 6.32887H54.4224ZM56.8622 14.4889C56.8622 15.0649 57.1022 15.5449 57.5822 15.9289C58.0782 16.3129 58.6542 16.5049 59.3102 16.5049C60.2382 16.5049 61.0622 16.1609 61.7822 15.4729C62.5182 14.7849 62.8862 13.9769 62.8862 13.0489C62.1982 12.5049 61.2382 12.2329 60.0062 12.2329C59.1102 12.2329 58.3582 12.4489 57.7502 12.8809C57.1582 13.3129 56.8622 13.8489 56.8622 14.4889ZM59.7182 5.94487C61.3502 5.94487 62.6382 6.38487 63.5822 7.26487C64.5262 8.12887 64.9982 9.32087 64.9982 10.8409V18.0889H62.8862V16.4569H62.7902C61.8782 17.8009 60.6622 18.4729 59.1422 18.4729C57.8462 18.4729 56.7582 18.0889 55.8782 17.3209C55.0142 16.5529 54.5822 15.5929 54.5822 14.4409C54.5822 13.2249 55.0382 12.2569 55.9502 11.5369C56.8782 10.8169 58.1102 10.4569 59.6462 10.4569C60.9582 10.4569 62.0382 10.6969 62.8862 11.1769V10.6729C62.8862 9.90487 62.5822 9.25687 61.9742 8.72887C61.3662 8.18487 60.6542 7.91287 59.8382 7.91287C58.6062 7.91287 57.6302 8.43287 56.9102 9.47287L54.9662 8.24887C56.0382 6.71287 57.6222 5.94487 59.7182 5.94487ZM76.3713 14.8249C76.3713 15.8489 75.9233 16.7129 75.0273 17.4169C74.1313 18.1209 73.0033 18.4729 71.6433 18.4729C70.4593 18.4729 69.4193 18.1689 68.5233 17.5609C67.6273 16.9369 66.9873 16.1209 66.6033 15.1129L68.5713 14.2729C68.8593 14.9769 69.2753 15.5289 69.8193 15.9289C70.3793 16.3129 70.9873 16.5049 71.6433 16.5049C72.3473 16.5049 72.9313 16.3529 73.3953 16.0489C73.8753 15.7449 74.1153 15.3849 74.1153 14.9689C74.1153 14.2169 73.5393 13.6649 72.3873 13.3129L70.3713 12.8089C68.0833 12.2329 66.9393 11.1289 66.9393 9.49687C66.9393 8.42487 67.3713 7.56887 68.2353 6.92887C69.1153 6.27287 70.2353 5.94487 71.5953 5.94487C72.6353 5.94487 73.5713 6.19287 74.4033 6.68887C75.2513 7.18487 75.8433 7.84887 76.1793 8.68087L74.2113 9.49687C73.9873 9.00087 73.6193 8.61687 73.1073 8.34487C72.6113 8.05687 72.0513 7.91287 71.4273 7.91287C70.8513 7.91287 70.3313 8.05687 69.8673 8.34487C69.4193 8.63287 69.1953 8.98487 69.1953 9.40087C69.1953 10.0729 69.8273 10.5529 71.0913 10.8409L72.8673 11.2969C75.2033 11.8729 76.3713 13.0489 76.3713 14.8249Z" fill="url(#paint0_linear)"/>
        <Defs>
        <LinearGradient id="paint0_linear" x1="77" y1="-3.23345" x2="56.8285" y2="46.9372" gradientUnits="userSpaceOnUse">
        <Stop stopColor="#4860DC"/>
        <Stop offset="0.9999" stopColor="#38A8FA"/>
        </LinearGradient>
        </Defs>
        </Svg>
    )
}
