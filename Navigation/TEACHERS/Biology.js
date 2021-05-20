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
export default function Biology(props)
{
    console.log(props.props)
    return(
        
<Svg width={props.props.width} height={props.props.height} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M37.4619 10.8659C37.0786 11.2492 36.68 11.5605 36.2601 11.8077L29.4419 4.9891C29.6891 4.56949 30 4.17093 30.3836 3.78732C31.1167 3.05429 31.1167 1.86135 30.3833 1.12801C29.6503 0.394981 28.4574 0.394676 27.724 1.12801C24.6723 4.17978 24.6277 7.86874 25.1618 11.1994C21.2845 10.4002 16.9983 10.0602 13.5767 13.4815C12.03 15.0285 11.1408 16.8452 10.8582 19.0361C10.8167 19.3574 11.0437 19.6516 11.3651 19.6931C11.6855 19.7346 11.9806 19.5076 12.0218 19.1862C12.2702 17.2624 13.0499 15.6678 14.4064 14.3113C17.5589 11.1588 21.5415 11.6126 25.3876 12.4467C25.5023 13.0213 25.604 13.4721 25.716 13.9674C21.8946 13.0982 18.1934 12.4839 15.4022 15.3153C9.16321 21.5632 19.7647 32.2221 12.7905 39.1963C12.515 39.4719 12.0664 39.4719 11.7908 39.1963C11.5149 38.9207 11.5149 38.4721 11.7908 38.1965C16.2131 33.7739 12.2617 27.4208 11.9519 21.3383C11.9351 21.0148 11.662 20.7652 11.3361 20.7823C11.0123 20.7988 10.7633 21.0746 10.7797 21.3981C10.8441 22.6597 11.0584 23.9241 11.2943 25.0666C7.96356 24.5329 4.2749 24.5774 1.22314 27.6289C0.488273 28.3635 0.487968 29.5533 1.22314 30.2882C1.958 31.0234 3.14758 31.0234 3.88275 30.2882C4.26605 29.9049 4.66461 29.5939 5.08423 29.3467L11.9028 36.165C11.6553 36.5849 11.3443 36.9835 10.961 37.3668C10.2277 38.0998 10.2277 39.293 10.961 40.0261C11.694 40.7594 12.887 40.7594 13.6203 40.0261C16.6721 36.9743 16.7166 33.2853 16.1826 29.9546C20.6082 30.8668 24.563 30.8772 27.7677 27.6725C31.1893 24.2509 30.8487 19.9641 30.0495 16.0868C31.1628 16.2638 32.2809 16.371 33.4067 16.3356C33.7305 16.3252 33.9847 16.0542 33.9746 15.7304C33.9643 15.4066 33.6939 15.1512 33.3698 15.1625C32.3181 15.1954 31.1698 15.0968 29.78 14.8518C29.6671 14.3565 29.5572 13.8899 29.4336 13.3534C32.6883 14.0086 35.7862 14.2011 38.2917 11.6957C38.5672 11.4201 39.0155 11.4201 39.2914 11.6957C39.5679 11.9718 39.5679 12.4192 39.2914 12.6954C38.1937 13.7934 36.9538 14.5063 35.5011 14.8747C35.1871 14.9543 34.997 15.2732 35.0766 15.5876C35.1563 15.9016 35.4755 16.0917 35.7895 16.0121C37.4527 15.5903 38.8697 14.777 40.1212 13.5252C40.4764 13.17 40.672 12.6979 40.672 12.1955C40.672 10.5253 38.6396 9.6882 37.4619 10.8659ZM3.05297 29.4584C2.77648 29.7349 2.3294 29.7349 2.05291 29.4584C1.77673 29.1822 1.77642 28.7352 2.05291 28.4587C3.95324 26.5583 6.18103 25.9867 8.39661 25.9867C9.46808 25.9867 10.5371 26.1204 11.5646 26.3023C11.6766 26.7949 11.7908 27.2792 11.911 27.801C8.65631 27.1455 5.55847 26.9529 3.05297 29.4584ZM6.23688 28.8395C7.82898 28.3503 9.73328 28.5374 12.1912 29.058C12.7121 31.5159 12.8992 33.4202 12.4097 35.0123L6.23688 28.8395ZM15.3345 25.915C14.8871 23.983 14.4913 22.1812 14.5087 20.5509L20.6983 26.7405C19.068 26.7579 17.2663 26.3624 15.3345 25.915ZM22.2034 26.5864L14.6628 19.0458C14.8493 18.1559 15.2176 17.3295 15.8408 16.5751L24.6738 25.4084C23.9197 26.0319 23.0936 26.4 22.2034 26.5864ZM25.5039 24.579L16.6705 15.7456C17.4246 15.1225 18.2511 14.7541 19.1409 14.5677L26.6815 22.1083C26.4951 22.9982 26.127 23.8246 25.5039 24.579ZM26.0102 15.2391C26.4575 17.1711 26.8531 18.9729 26.836 20.6031L20.6464 14.4136C22.2763 14.3962 24.0784 14.7917 26.0102 15.2391ZM26.9379 26.8428C23.7854 29.9952 19.8032 29.5414 15.9567 28.7074C15.874 28.2948 15.784 27.8697 15.6284 27.1867C19.4989 28.0671 23.1238 28.657 25.9381 25.8427C32.1357 19.6455 21.6196 8.892 28.5541 1.95779C28.8297 1.68221 29.278 1.68191 29.5539 1.95779C29.8294 2.23336 29.8294 2.68197 29.5539 2.95755C23.3209 9.19046 33.91 19.871 26.9379 26.8428ZM29.1535 12.096C28.6325 9.63816 28.4455 7.73386 28.935 6.14175L35.1078 12.3146C33.5157 12.8041 31.6114 12.617 29.1535 12.096Z" fill="white"/>
</Svg>
)}



