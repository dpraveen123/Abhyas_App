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

const styles = StyleSheet.create({
    bulb: {
        top: 88,
        left: 75.5
    },
})
export default function Home() {
    return (
        <View>
            <Svg style={styles.bulb} width="211" height="170" viewBox="0 0 211 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M44.5376 105.056L38.9216 120.56H50.3456L44.7296 105.056H44.5376ZM34.0736 134H29.1776L42.1376 99.632H47.1296L60.0896 134H55.1936L51.8816 124.688H37.4336L34.0736 134ZM75.7841 134.768C74.0561 134.768 72.4721 134.4 71.0321 133.664C69.6241 132.928 68.5361 131.952 67.7681 130.736H67.5761V134H63.3521V99.632H67.7681V110.48L67.5761 113.744H67.7681C68.5361 112.528 69.6241 111.552 71.0321 110.816C72.4721 110.08 74.0561 109.712 75.7841 109.712C78.8881 109.712 81.5121 110.928 83.6561 113.36C85.8641 115.824 86.9681 118.784 86.9681 122.24C86.9681 125.728 85.8641 128.688 83.6561 131.12C81.5121 133.552 78.8881 134.768 75.7841 134.768ZM75.0641 130.736C77.1761 130.736 78.9521 129.936 80.3921 128.336C81.8321 126.768 82.5521 124.736 82.5521 122.24C82.5521 119.776 81.8321 117.744 80.3921 116.144C78.9521 114.544 77.1761 113.744 75.0641 113.744C72.9201 113.744 71.1281 114.544 69.6881 116.144C68.2801 117.744 67.5761 119.776 67.5761 122.24C67.5761 124.736 68.2801 126.784 69.6881 128.384C71.1281 129.952 72.9201 130.736 75.0641 130.736ZM90.7739 99.632H95.1899V110.48L94.9979 113.744H95.1899C95.8619 112.592 96.8859 111.632 98.2619 110.864C99.6699 110.096 101.126 109.712 102.63 109.712C105.51 109.712 107.718 110.544 109.254 112.208C110.822 113.84 111.606 116.176 111.606 119.216V134H107.19V120.08C107.19 115.856 105.318 113.744 101.574 113.744C99.7819 113.744 98.2619 114.496 97.0139 116C95.7979 117.472 95.1899 119.2 95.1899 121.184V134H90.7739V99.632ZM137.345 110.48L122.609 144.368H118.049L123.521 132.512L113.825 110.48H118.625L125.633 127.376H125.729L132.545 110.48H137.345ZM142.224 126.8C142.224 127.952 142.704 128.912 143.664 129.68C144.656 130.448 145.808 130.832 147.12 130.832C148.976 130.832 150.624 130.144 152.064 128.768C153.536 127.392 154.272 125.776 154.272 123.92C152.896 122.832 150.976 122.288 148.512 122.288C146.72 122.288 145.216 122.72 144 123.584C142.816 124.448 142.224 125.52 142.224 126.8ZM147.936 109.712C151.2 109.712 153.776 110.592 155.664 112.352C157.552 114.08 158.496 116.464 158.496 119.504V134H154.272V130.736H154.08C152.256 133.424 149.824 134.768 146.784 134.768C144.192 134.768 142.016 134 140.256 132.464C138.528 130.928 137.664 129.008 137.664 126.704C137.664 124.272 138.576 122.336 140.4 120.896C142.256 119.456 144.72 118.736 147.792 118.736C150.416 118.736 152.576 119.216 154.272 120.176V119.168C154.272 117.632 153.664 116.336 152.448 115.28C151.232 114.192 149.808 113.648 148.176 113.648C145.712 113.648 143.76 114.688 142.32 116.768L138.432 114.32C140.576 111.248 143.744 109.712 147.936 109.712ZM181.243 127.472C181.243 129.52 180.347 131.248 178.555 132.656C176.763 134.064 174.507 134.768 171.787 134.768C169.419 134.768 167.339 134.16 165.547 132.944C163.755 131.696 162.475 130.064 161.707 128.048L165.643 126.368C166.219 127.776 167.051 128.88 168.139 129.68C169.259 130.448 170.475 130.832 171.787 130.832C173.195 130.832 174.363 130.528 175.291 129.92C176.251 129.312 176.731 128.592 176.731 127.76C176.731 126.256 175.579 125.152 173.275 124.448L169.243 123.44C164.667 122.288 162.379 120.08 162.379 116.816C162.379 114.672 163.243 112.96 164.971 111.68C166.731 110.368 168.971 109.712 171.691 109.712C173.771 109.712 175.643 110.208 177.307 111.2C179.003 112.192 180.187 113.52 180.859 115.184L176.923 116.816C176.475 115.824 175.739 115.056 174.715 114.512C173.723 113.936 172.603 113.648 171.355 113.648C170.203 113.648 169.163 113.936 168.235 114.512C167.339 115.088 166.891 115.792 166.891 116.624C166.891 117.968 168.155 118.928 170.683 119.504L174.235 120.416C178.907 121.568 181.243 123.92 181.243 127.472Z" fill="url(#paint0_linear)" />
                <Path d="M103.247 73.4375H102.594C102.086 73.4414 101.597 73.2441 101.234 72.8887C100.871 72.5333 100.663 72.0486 100.656 71.5406V71.2891C100.663 70.7793 100.87 70.2927 101.232 69.9344C101.595 69.5762 102.084 69.3752 102.594 69.375H101.761C101.512 69.3754 101.265 69.3264 101.035 69.2308C100.805 69.1352 100.596 68.9949 100.421 68.8181C100.245 68.6412 100.107 68.4313 100.013 68.2005C99.9195 67.9696 99.8725 67.7225 99.875 67.4734V67.2219C99.8725 66.9724 99.9194 66.7249 100.013 66.4937C100.107 66.2624 100.245 66.052 100.42 65.8745C100.596 65.697 100.804 65.556 101.035 65.4595C101.265 65.3631 101.511 65.3131 101.761 65.3125H100.928C99.8734 65.3125 99.0938 64.4594 99.0938 63.4062V63.1547C99.0938 62.1016 99.8734 61.25 100.928 61.25H96.2406C95.1859 61.25 94.4062 62.1016 94.4062 63.1547V63.4062C94.4062 64.4594 95.1859 65.3125 96.2406 65.3125H97.0734C96.824 65.3131 96.5771 65.3631 96.347 65.4595C96.1169 65.556 95.9082 65.697 95.7329 65.8745C95.5576 66.052 95.4192 66.2624 95.3256 66.4937C95.2319 66.7249 95.185 66.9724 95.1875 67.2219V67.4734C95.185 67.7225 95.232 67.9696 95.3257 68.2005C95.4194 68.4313 95.5579 68.6412 95.7333 68.8181C95.9088 68.9949 96.1175 69.1352 96.3476 69.2308C96.5776 69.3264 96.8243 69.3754 97.0734 69.375H97.9062C97.3965 69.3752 96.9074 69.5762 96.5447 69.9344C96.1821 70.2927 95.9752 70.7793 95.9688 71.2891V71.5406C95.9756 72.0486 96.1832 72.5333 96.5462 72.8887C96.9093 73.2441 97.3982 73.4414 97.9062 73.4375H98.5594C98.6898 74.7701 99.3136 76.0057 100.308 76.9019C101.303 77.7981 102.597 78.2901 103.936 78.2812H107.064C107.325 78.2792 107.586 78.2583 107.844 78.2187C106.655 78.0465 105.557 77.4829 104.725 76.6169C103.892 75.751 103.372 74.6322 103.247 73.4375Z" fill="white" />
                <Path d="M119.241 36.1382C119.118 36.0469 118.974 35.9873 118.823 35.9646C118.671 35.9418 118.516 35.9566 118.372 36.0075L111.237 38.5232C108.917 39.341 107.116 41.455 106.419 44.1783C106.092 45.5144 105.861 46.872 105.725 48.2408C105.194 48.9276 104.742 49.6731 104.38 50.4627C104.022 49.1251 103.562 47.8172 103.003 46.5506L103.051 44.9366C103.27 37.6517 98.473 31.5071 92.3575 31.2389C92.2212 31.233 92.0852 31.2568 91.959 31.3088C91.8329 31.3608 91.7196 31.4398 91.6271 31.5401C91.5346 31.6404 91.4651 31.7597 91.4235 31.8897C91.3819 32.0197 91.3692 32.1571 91.3862 32.2925L92.1126 38.0699C92.4122 40.8224 93.6559 43.1706 95.7094 44.8608C97.3352 46.1626 99.2656 47.0295 101.319 47.3799C102.09 49.1415 102.656 50.9859 103.006 52.8767C103.134 53.5652 103.254 54.6256 103.355 55.7986C103.35 56.3416 103.39 56.8841 103.476 57.4203C103.567 58.8324 103.623 60.2409 103.623 61.2484C103.623 61.4971 103.722 61.7355 103.898 61.9114C104.074 62.0872 104.312 62.1859 104.561 62.1859C104.809 62.1859 105.048 62.0872 105.224 61.9114C105.399 61.7355 105.498 61.4971 105.498 61.2484C105.498 59.9542 105.397 57.7055 105.227 55.686C105.239 54.3656 105.466 52.865 105.765 52.0297C106.099 51.0938 106.577 50.2155 107.181 49.4266L107.908 49.4719C108.387 49.5366 108.87 49.5694 109.354 49.57C111.479 49.5969 113.543 48.8626 115.174 47.5C117.807 45.3 119.427 41.4481 119.62 36.9321C119.627 36.7788 119.596 36.6263 119.53 36.4879C119.464 36.3495 119.365 36.2294 119.241 36.1382ZM93.9748 37.8499L93.3956 33.2432C97.4525 34.0314 100.599 38.0588 101.109 43.0342C100.959 42.8019 100.806 42.5716 100.649 42.3455L97.9601 38.4817C97.8899 38.3805 97.8004 38.2942 97.6967 38.2276C97.5931 38.161 97.4773 38.1155 97.356 38.0937C97.2348 38.0718 97.1104 38.0741 96.99 38.1004C96.8697 38.1267 96.7557 38.1764 96.6545 38.2468C96.5534 38.3172 96.4671 38.4068 96.4007 38.5105C96.3342 38.6143 96.2888 38.7301 96.2671 38.8514C96.2455 38.9726 96.2479 39.097 96.2743 39.2173C96.3007 39.3377 96.3506 39.4516 96.4211 39.5527L99.1094 43.4166C99.5039 43.9836 99.873 44.5741 100.219 45.1822C97.2431 44.2424 94.4226 41.9641 93.9748 37.8499ZM113.972 46.0608C112.55 47.2491 110.839 47.7914 108.879 47.6799L113.58 43.3816C113.763 43.2138 113.873 42.9799 113.884 42.7315C113.895 42.483 113.807 42.2404 113.639 42.0569C113.471 41.8734 113.237 41.7641 112.989 41.753C112.74 41.7419 112.498 41.83 112.314 41.9978L107.939 45.9989C108.029 45.5157 108.128 45.0635 108.236 44.6424C108.778 42.5267 110.133 40.9 111.861 40.2908L117.635 38.2555C117.234 41.6236 115.934 44.4219 113.972 46.0608Z" fill="url(#paint1_linear)" stroke="url(#paint2_linear)" stroke-width="0.4" />
                <Path d="M105.5 9.96875C105.749 9.96875 105.987 9.86998 106.163 9.69416C106.339 9.51835 106.438 9.27989 106.438 9.03125V1.71875C106.438 1.47011 106.339 1.23165 106.163 1.05584C105.987 0.880022 105.749 0.78125 105.5 0.78125C105.251 0.78125 105.013 0.880022 104.837 1.05584C104.661 1.23165 104.562 1.47011 104.562 1.71875V9.03125C104.562 9.27989 104.661 9.51835 104.837 9.69416C105.013 9.86998 105.251 9.96875 105.5 9.96875Z" fill="url(#paint3_linear)" stroke="url(#paint4_linear)" />
                <Path d="M140.341 35.6227H133.029C132.78 35.6227 132.542 35.7215 132.366 35.8973C132.19 36.0731 132.091 36.3115 132.091 36.5602C132.091 36.8088 132.19 37.0473 132.366 37.2231C132.542 37.3989 132.78 37.4977 133.029 37.4977H140.341C140.59 37.4977 140.829 37.3989 141.004 37.2231C141.18 37.0473 141.279 36.8088 141.279 36.5602C141.279 36.3115 141.18 36.0731 141.004 35.8973C140.829 35.7215 140.59 35.6227 140.341 35.6227Z" fill="url(#paint5_linear)" stroke="url(#paint6_linear)" />
                <Path d="M77.9705 35.6227H70.658C70.4094 35.6227 70.1709 35.7215 69.9951 35.8973C69.8193 36.0731 69.7205 36.3115 69.7205 36.5602C69.7205 36.8088 69.8193 37.0473 69.9951 37.2231C70.1709 37.3989 70.4094 37.4977 70.658 37.4977H77.9705C78.2192 37.4977 78.4576 37.3989 78.6334 37.2231C78.8092 37.0473 78.908 36.8088 78.908 36.5602C78.908 36.3115 78.8092 36.0731 78.6334 35.8973C78.4576 35.7215 78.2192 35.6227 77.9705 35.6227Z" fill="url(#paint7_linear)" stroke="url(#paint8_linear)" />
                <Path d="M131.871 10.1898C131.783 10.1027 131.68 10.0337 131.566 9.98654C131.453 9.93942 131.331 9.91516 131.208 9.91516C131.084 9.91516 130.963 9.93942 130.849 9.98654C130.735 10.0337 130.632 10.1027 130.545 10.1898L124.839 15.8954C124.663 16.0712 124.564 16.3097 124.564 16.5583C124.564 16.807 124.663 17.0455 124.839 17.2213C125.015 17.3971 125.253 17.4959 125.502 17.4959C125.75 17.4959 125.989 17.3972 126.165 17.2214L131.871 11.5156C132.046 11.3398 132.145 11.1013 132.145 10.8527C132.145 10.6041 132.046 10.3656 131.871 10.1898Z" fill="url(#paint9_linear)" stroke="url(#paint10_linear)" />
                <Path d="M86.1612 17.2214C86.2483 17.1344 86.3174 17.031 86.3645 16.9173C86.4116 16.8035 86.4359 16.6816 86.4359 16.5584C86.4359 16.4353 86.4116 16.3134 86.3645 16.1996C86.3174 16.0859 86.2483 15.9825 86.1612 15.8955L80.4556 10.1899C80.2798 10.014 80.0413 9.91524 79.7927 9.91522C79.544 9.91521 79.3056 10.014 79.1297 10.1898C78.9539 10.3656 78.8551 10.604 78.8551 10.8527C78.8551 11.1013 78.9538 11.3398 79.1297 11.5156L84.8354 17.2213C85.0113 17.3971 85.2497 17.4958 85.4983 17.4958C85.747 17.4958 85.9854 17.3971 86.1612 17.2213V17.2214Z" fill="url(#paint11_linear)" stroke="url(#paint12_linear)" />
                <Path d="M91.2529 29.7332C91.4777 29.8394 91.7354 29.8519 91.9695 29.768C92.2035 29.6841 92.3946 29.5107 92.5008 29.2859C93.3789 27.4366 94.6397 25.7948 96.1998 24.4692C97.7598 23.1436 99.5837 22.1644 101.551 21.5965C101.79 21.5286 101.992 21.3684 102.113 21.1512C102.234 20.934 102.264 20.6777 102.196 20.4385C102.128 20.1993 101.968 19.9969 101.751 19.8758C101.534 19.7547 101.277 19.7248 101.038 19.7928C98.814 20.4338 96.7515 21.5403 94.9873 23.0389C93.2232 24.5375 91.7978 26.394 90.8055 28.4853C90.6994 28.7101 90.6869 28.9679 90.7707 29.2019C90.8546 29.4359 91.0281 29.6271 91.2529 29.7332Z" fill="url(#paint13_linear)" stroke="url(#paint14_linear)" stroke-width="0.8" />
                <Path d="M104.552 21.0795C104.57 21.0795 104.59 21.0795 104.609 21.0778C104.949 21.0573 105.293 21.0483 105.639 21.0517H105.68C105.929 21.0517 106.167 20.9529 106.343 20.7771C106.519 20.6013 106.617 20.3629 106.617 20.1142C106.617 19.8656 106.519 19.6271 106.343 19.4513C106.167 19.2755 105.929 19.1767 105.68 19.1767H105.652C105.268 19.1728 104.879 19.183 104.496 19.2061C104.253 19.2208 104.025 19.3297 103.861 19.5096C103.696 19.6894 103.609 19.9262 103.616 20.1698C103.623 20.4133 103.725 20.6445 103.9 20.8142C104.074 20.984 104.308 21.0793 104.552 21.0795Z" fill="url(#paint15_linear)" stroke="url(#paint16_linear)" stroke-width="0.8" />
                <Path d="M125.637 34.8824C125.539 31.1944 124.43 27.6041 122.432 24.503C120.433 21.4019 117.621 18.9091 114.303 17.2965C110.985 15.6839 107.288 15.0134 103.614 15.3581C99.9413 15.7028 96.4333 17.0495 93.473 19.2513C93.3716 19.3241 93.2856 19.4164 93.2203 19.5228C93.155 19.6292 93.1116 19.7477 93.0927 19.8711C93.0737 19.9945 93.0797 20.1205 93.1101 20.2416C93.1405 20.3627 93.1948 20.4765 93.2699 20.5764C93.3449 20.6762 93.4391 20.76 93.547 20.823C93.6548 20.8859 93.7742 20.9266 93.898 20.9428C94.0218 20.959 94.1476 20.9502 94.268 20.9171C94.3884 20.884 94.501 20.8271 94.5991 20.7499C98.3475 17.9633 103.021 16.7181 107.659 17.2702C112.296 17.8222 116.547 20.1296 119.536 23.7181C122.526 27.3067 124.027 31.904 123.733 36.5653C123.438 41.2266 121.369 45.598 117.951 48.7813C116.465 50.1566 115.277 51.8223 114.46 53.6753C113.644 55.5284 113.217 57.5293 113.205 59.5541V60.3093H97.7949V59.5541C97.7997 57.5489 97.3891 55.5644 96.5889 53.7256C95.7888 51.8869 94.6165 50.2339 93.1459 48.8707C90.1327 46.101 88.1353 42.4009 87.4729 38.3621C86.8106 34.3234 87.5216 30.1791 89.4923 26.5921C89.5916 26.414 89.6303 26.2084 89.6025 26.0063C89.5746 25.8043 89.4818 25.6168 89.3379 25.4722H89.3371C89.2346 25.3695 89.1097 25.292 88.9721 25.2458C88.8346 25.1995 88.6882 25.1859 88.5445 25.2058C88.4007 25.2258 88.2636 25.2788 88.1439 25.3608C88.0241 25.4428 87.9251 25.5514 87.8544 25.6782C85.6786 29.6338 84.8924 34.2049 85.6218 38.6602C86.3512 43.1155 88.5539 47.1973 91.8776 50.2526C93.1572 51.4399 94.1769 52.8795 94.8727 54.4805C95.5684 56.0815 95.925 57.8093 95.9199 59.5549V60.3282C95.2256 60.4075 94.5847 60.7392 94.1191 61.2603C93.6535 61.7814 93.3957 62.4555 93.3948 63.1543V63.4058C93.3949 63.8693 93.5083 64.3257 93.7251 64.7353C93.9419 65.1449 94.2555 65.4953 94.6387 65.756C94.37 66.1977 94.2277 66.7046 94.2274 67.2216V67.4733C94.2276 67.9368 94.341 68.3931 94.5579 68.8027C94.7747 69.2123 95.0883 69.5626 95.4715 69.8233C95.2028 70.2651 95.0606 70.7721 95.0604 71.2891V71.5407C95.0615 72.2716 95.3439 72.9741 95.8488 73.5026C96.3538 74.0311 97.0427 74.3451 97.7729 74.3794C98.108 75.7609 98.8981 76.9894 100.016 77.8672C101.134 78.745 102.515 79.2211 103.937 79.2188H107.064C108.485 79.2211 109.866 78.7451 110.984 77.8674C112.102 76.9896 112.892 75.7612 113.227 74.3799C113.957 74.3455 114.646 74.0316 115.151 73.5031C115.656 72.9746 115.939 72.2721 115.94 71.5412V71.2896C115.94 70.7726 115.797 70.2655 115.529 69.8238C115.912 69.5631 116.225 69.2127 116.442 68.8032C116.659 68.3936 116.773 67.9372 116.773 67.4738V67.2221C116.772 66.7051 116.63 66.1981 116.361 65.7565C116.745 65.4957 117.058 65.1453 117.275 64.7357C117.492 64.3261 117.605 63.8697 117.605 63.4063V63.1547C117.605 62.4559 117.347 61.7817 116.881 61.2605C116.416 60.7393 115.775 60.4075 115.08 60.3282V59.5391C115.093 57.774 115.468 56.0303 116.182 54.4158C116.895 52.8013 117.932 51.3503 119.229 50.1527C121.317 48.2058 122.968 45.8378 124.072 43.2054C125.177 40.573 125.71 37.7362 125.637 34.8824ZM107.064 77.3438H103.937C103.016 77.3453 102.117 77.0619 101.364 76.5325C100.611 76.003 100.039 75.2535 99.729 74.3866H111.271C110.961 75.2535 110.39 76.003 109.636 76.5325C108.883 77.0619 107.984 77.3453 107.064 77.3438ZM114.065 71.5412C114.064 71.7984 113.962 72.0451 113.78 72.227C113.598 72.4089 113.352 72.5113 113.094 72.5116H97.9063C97.6491 72.5113 97.4024 72.4089 97.2205 72.227C97.0386 72.0451 96.9363 71.7984 96.936 71.5412V71.2896C96.9363 71.0323 97.0386 70.7857 97.2205 70.6037C97.4024 70.4218 97.6491 70.3195 97.9063 70.3191H113.094C113.351 70.3195 113.598 70.4218 113.78 70.6037C113.962 70.7857 114.064 71.0323 114.064 71.2896L114.065 71.5412ZM114.898 67.4738C114.897 67.7311 114.795 67.9777 114.613 68.1596C114.431 68.3415 114.185 68.4438 113.927 68.4441H97.0729C96.8156 68.4438 96.569 68.3415 96.387 68.1596C96.2051 67.9777 96.1027 67.7311 96.1024 67.4738V67.2221C96.1027 66.9648 96.2051 66.7182 96.387 66.5363C96.569 66.3544 96.8156 66.2521 97.0729 66.2518H113.927C114.185 66.2521 114.431 66.3544 114.613 66.5363C114.795 66.7182 114.897 66.9648 114.898 67.2221V67.4738ZM115.73 63.1547V63.4063C115.73 63.6636 115.628 63.9102 115.446 64.0922C115.264 64.2741 115.017 64.3764 114.76 64.3768H96.2401C95.9828 64.3764 95.7362 64.2741 95.5543 64.0922C95.3724 63.9102 95.27 63.6636 95.2698 63.4063V63.1547C95.27 62.8975 95.3724 62.6508 95.5543 62.4689C95.7362 62.287 95.9828 62.1846 96.2401 62.1843H114.76C115.017 62.1846 115.264 62.287 115.446 62.4689C115.628 62.6508 115.73 62.8975 115.73 63.1547Z" fill="url(#paint17_linear)" stroke="url(#paint18_linear)" />
                <Path d="M3.82 157.97L2.65 161.2H5.03L3.86 157.97H3.82ZM1.64 164H0.62L3.32 156.84H4.36L7.06 164H6.04L5.35 162.06H2.34L1.64 164ZM13.2716 164.16C12.2116 164.16 11.325 163.803 10.6116 163.09C9.90497 162.377 9.55164 161.487 9.55164 160.42C9.55164 159.353 9.90497 158.467 10.6116 157.76C11.3183 157.04 12.205 156.68 13.2716 156.68C14.3516 156.68 15.2283 157.07 15.9016 157.85L15.2416 158.49C14.7283 157.87 14.0716 157.56 13.2716 157.56C12.4783 157.56 11.815 157.827 11.2816 158.36C10.755 158.887 10.4916 159.573 10.4916 160.42C10.4916 161.267 10.755 161.953 11.2816 162.48C11.815 163.013 12.4783 163.28 13.2716 163.28C14.105 163.28 14.8283 162.93 15.4416 162.23L16.1116 162.88C15.7716 163.287 15.355 163.603 14.8616 163.83C14.3683 164.05 13.8383 164.16 13.2716 164.16ZM24.0991 160.42C24.0991 161.48 23.7458 162.367 23.0391 163.08C22.3258 163.8 21.4525 164.16 20.4191 164.16C19.3791 164.16 18.5058 163.8 17.7991 163.08C17.0925 162.367 16.7391 161.48 16.7391 160.42C16.7391 159.36 17.0925 158.473 17.7991 157.76C18.5058 157.04 19.3791 156.68 20.4191 156.68C21.4591 156.68 22.3325 157.043 23.0391 157.77C23.7458 158.483 24.0991 159.367 24.0991 160.42ZM17.6791 160.42C17.6791 161.247 17.9391 161.93 18.4591 162.47C18.9858 163.01 19.6391 163.28 20.4191 163.28C21.1991 163.28 21.8491 163.01 22.3691 162.47C22.8958 161.937 23.1591 161.253 23.1591 160.42C23.1591 159.587 22.8958 158.903 22.3691 158.37C21.8491 157.83 21.1991 157.56 20.4191 157.56C19.6391 157.56 18.9858 157.83 18.4591 158.37C17.9391 158.91 17.6791 159.593 17.6791 160.42ZM26.1048 164H25.1848V156.84H26.1048L28.5948 161.2H28.6348L31.1248 156.84H32.0448V164H31.1248V159.75L31.1648 158.55H31.1248L28.8848 162.48H28.3448L26.1048 158.55H26.0648L26.1048 159.75V164ZM34.4056 161.1V164H33.4856V156.84H35.9256C36.5456 156.84 37.0723 157.047 37.5056 157.46C37.9456 157.873 38.1656 158.377 38.1656 158.97C38.1656 159.577 37.9456 160.083 37.5056 160.49C37.079 160.897 36.5523 161.1 35.9256 161.1H34.4056ZM34.4056 157.72V160.22H35.9456C36.3123 160.22 36.6156 160.097 36.8556 159.85C37.1023 159.603 37.2256 159.31 37.2256 158.97C37.2256 158.637 37.1023 158.347 36.8556 158.1C36.6156 157.847 36.3123 157.72 35.9456 157.72H34.4056ZM43.1502 164H39.1302V156.84H40.0502V163.12H43.1502V164ZM48.2906 156.84V157.72H45.0306V159.99H47.9706V160.85H45.0306V163.12H48.2906V164H44.1106V156.84H48.2906ZM51.9705 157.72V164H51.0505V157.72H49.0505V156.84H53.9705V157.72H51.9705ZM59.1109 156.84V157.72H55.8509V159.99H58.7909V160.85H55.8509V163.12H59.1109V164H54.9309V156.84H59.1109ZM66.6654 162.09C66.6654 162.717 66.4354 163.22 65.9754 163.6C65.5087 163.973 64.9421 164.16 64.2754 164.16C63.6821 164.16 63.1587 163.987 62.7054 163.64C62.2521 163.293 61.9387 162.82 61.7654 162.22L62.6454 161.86C62.7054 162.073 62.7887 162.267 62.8954 162.44C63.0021 162.613 63.1254 162.763 63.2654 162.89C63.4121 163.01 63.5721 163.107 63.7454 163.18C63.9187 163.247 64.1021 163.28 64.2954 163.28C64.7154 163.28 65.0587 163.173 65.3254 162.96C65.5921 162.74 65.7254 162.45 65.7254 162.09C65.7254 161.79 65.6154 161.533 65.3954 161.32C65.1887 161.113 64.8021 160.913 64.2354 160.72C63.6621 160.513 63.3054 160.373 63.1654 160.3C62.4054 159.913 62.0254 159.343 62.0254 158.59C62.0254 158.063 62.2354 157.613 62.6554 157.24C63.0821 156.867 63.6054 156.68 64.2254 156.68C64.7721 156.68 65.2454 156.82 65.6454 157.1C66.0454 157.373 66.3121 157.717 66.4454 158.13L65.5854 158.49C65.5054 158.223 65.3454 158.003 65.1054 157.83C64.8721 157.65 64.5854 157.56 64.2454 157.56C63.8854 157.56 63.5821 157.66 63.3354 157.86C63.0887 158.047 62.9654 158.29 62.9654 158.59C62.9654 158.837 63.0621 159.05 63.2554 159.23C63.4687 159.41 63.9321 159.623 64.6454 159.87C65.3721 160.117 65.8887 160.42 66.1954 160.78C66.5087 161.133 66.6654 161.57 66.6654 162.09ZM71.1427 164.16C70.0827 164.16 69.1961 163.803 68.4827 163.09C67.7761 162.377 67.4227 161.487 67.4227 160.42C67.4227 159.353 67.7761 158.467 68.4827 157.76C69.1894 157.04 70.0761 156.68 71.1427 156.68C72.2227 156.68 73.0994 157.07 73.7727 157.85L73.1127 158.49C72.5994 157.87 71.9427 157.56 71.1427 157.56C70.3494 157.56 69.6861 157.827 69.1527 158.36C68.6261 158.887 68.3627 159.573 68.3627 160.42C68.3627 161.267 68.6261 161.953 69.1527 162.48C69.6861 163.013 70.3494 163.28 71.1427 163.28C71.9761 163.28 72.6994 162.93 73.3127 162.23L73.9827 162.88C73.6427 163.287 73.2261 163.603 72.7327 163.83C72.2394 164.05 71.7094 164.16 71.1427 164.16ZM75.9779 164H75.0579V156.84H75.9779V159.91H79.5579V156.84H80.4779V164H79.5579V160.77H75.9779V164ZM88.8257 160.42C88.8257 161.48 88.4724 162.367 87.7657 163.08C87.0524 163.8 86.179 164.16 85.1457 164.16C84.1057 164.16 83.2324 163.8 82.5257 163.08C81.819 162.367 81.4657 161.48 81.4657 160.42C81.4657 159.36 81.819 158.473 82.5257 157.76C83.2324 157.04 84.1057 156.68 85.1457 156.68C86.1857 156.68 87.059 157.043 87.7657 157.77C88.4724 158.483 88.8257 159.367 88.8257 160.42ZM82.4057 160.42C82.4057 161.247 82.6657 161.93 83.1857 162.47C83.7124 163.01 84.3657 163.28 85.1457 163.28C85.9257 163.28 86.5757 163.01 87.0957 162.47C87.6224 161.937 87.8857 161.253 87.8857 160.42C87.8857 159.587 87.6224 158.903 87.0957 158.37C86.5757 157.83 85.9257 157.56 85.1457 157.56C84.3657 157.56 83.7124 157.83 83.1857 158.37C82.6657 158.91 82.4057 159.593 82.4057 160.42ZM96.8238 160.42C96.8238 161.48 96.4704 162.367 95.7638 163.08C95.0504 163.8 94.1771 164.16 93.1438 164.16C92.1038 164.16 91.2304 163.8 90.5238 163.08C89.8171 162.367 89.4638 161.48 89.4638 160.42C89.4638 159.36 89.8171 158.473 90.5238 157.76C91.2304 157.04 92.1038 156.68 93.1438 156.68C94.1838 156.68 95.0571 157.043 95.7638 157.77C96.4704 158.483 96.8238 159.367 96.8238 160.42ZM90.4038 160.42C90.4038 161.247 90.6638 161.93 91.1838 162.47C91.7104 163.01 92.3638 163.28 93.1438 163.28C93.9238 163.28 94.5738 163.01 95.0938 162.47C95.6204 161.937 95.8838 161.253 95.8838 160.42C95.8838 159.587 95.6204 158.903 95.0938 158.37C94.5738 157.83 93.9238 157.56 93.1438 157.56C92.3638 157.56 91.7104 157.83 91.1838 158.37C90.6638 158.91 90.4038 159.593 90.4038 160.42ZM101.929 164H97.9095V156.84H98.8295V163.12H101.929V164ZM106.007 164H105.087V156.84H106.007L108.497 161.2H108.537L111.027 156.84H111.947V164H111.027V159.75L111.067 158.55H111.027L108.787 162.48H108.247L106.007 158.55H105.967L106.007 159.75V164ZM115.988 157.97L114.818 161.2H117.198L116.028 157.97H115.988ZM113.808 164H112.788L115.488 156.84H116.528L119.228 164H118.208L117.518 162.06H114.508L113.808 164ZM120.988 164H120.068V156.84H121.188L124.668 162.41H124.708L124.668 161.03V156.84H125.588V164H124.628L120.988 158.16H120.948L120.988 159.54V164ZM129.631 157.97L128.461 161.2H130.841L129.671 157.97H129.631ZM127.451 164H126.431L129.131 156.84H130.171L132.871 164H131.851L131.161 162.06H128.151L127.451 164ZM140.405 160.71C140.405 161.71 140.108 162.507 139.515 163.1C138.848 163.807 137.972 164.16 136.885 164.16C135.845 164.16 134.965 163.8 134.245 163.08C133.525 162.36 133.165 161.473 133.165 160.42C133.165 159.367 133.525 158.48 134.245 157.76C134.965 157.04 135.845 156.68 136.885 156.68C137.412 156.68 137.908 156.773 138.375 156.96C138.842 157.147 139.225 157.41 139.525 157.75L138.865 158.41C138.645 158.143 138.358 157.937 138.005 157.79C137.658 157.637 137.285 157.56 136.885 157.56C136.105 157.56 135.445 157.83 134.905 158.37C134.372 158.917 134.105 159.6 134.105 160.42C134.105 161.24 134.372 161.923 134.905 162.47C135.445 163.01 136.105 163.28 136.885 163.28C137.598 163.28 138.192 163.08 138.665 162.68C139.138 162.28 139.412 161.73 139.485 161.03H136.885V160.17H140.355C140.388 160.357 140.405 160.537 140.405 160.71ZM145.703 156.84V157.72H142.443V159.99H145.383V160.85H142.443V163.12H145.703V164H141.523V156.84H145.703ZM147.863 164H146.943V156.84H147.863L150.353 161.2H150.393L152.883 156.84H153.803V164H152.883V159.75L152.923 158.55H152.883L150.643 162.48H150.103L147.863 158.55H147.823L147.863 159.75V164ZM159.423 156.84V157.72H156.163V159.99H159.103V160.85H156.163V163.12H159.423V164H155.243V156.84H159.423ZM161.583 164H160.663V156.84H161.783L165.263 162.41H165.303L165.263 161.03V156.84H166.183V164H165.223L161.583 158.16H161.543L161.583 159.54V164ZM170.066 157.72V164H169.146V157.72H167.146V156.84H172.066V157.72H170.066ZM179.341 162.09C179.341 162.717 179.111 163.22 178.651 163.6C178.185 163.973 177.618 164.16 176.951 164.16C176.358 164.16 175.835 163.987 175.381 163.64C174.928 163.293 174.615 162.82 174.441 162.22L175.321 161.86C175.381 162.073 175.465 162.267 175.571 162.44C175.678 162.613 175.801 162.763 175.941 162.89C176.088 163.01 176.248 163.107 176.421 163.18C176.595 163.247 176.778 163.28 176.971 163.28C177.391 163.28 177.735 163.173 178.001 162.96C178.268 162.74 178.401 162.45 178.401 162.09C178.401 161.79 178.291 161.533 178.071 161.32C177.865 161.113 177.478 160.913 176.911 160.72C176.338 160.513 175.981 160.373 175.841 160.3C175.081 159.913 174.701 159.343 174.701 158.59C174.701 158.063 174.911 157.613 175.331 157.24C175.758 156.867 176.281 156.68 176.901 156.68C177.448 156.68 177.921 156.82 178.321 157.1C178.721 157.373 178.988 157.717 179.121 158.13L178.261 158.49C178.181 158.223 178.021 158.003 177.781 157.83C177.548 157.65 177.261 157.56 176.921 157.56C176.561 157.56 176.258 157.66 176.011 157.86C175.765 158.047 175.641 158.29 175.641 158.59C175.641 158.837 175.738 159.05 175.931 159.23C176.145 159.41 176.608 159.623 177.321 159.87C178.048 160.117 178.565 160.42 178.871 160.78C179.185 161.133 179.341 161.57 179.341 162.09ZM182.876 160.67V164H181.956V160.67L179.546 156.84H180.626L182.396 159.75H182.436L184.166 156.84H185.246L182.876 160.67ZM190.357 162.09C190.357 162.717 190.127 163.22 189.667 163.6C189.2 163.973 188.633 164.16 187.967 164.16C187.373 164.16 186.85 163.987 186.397 163.64C185.943 163.293 185.63 162.82 185.457 162.22L186.337 161.86C186.397 162.073 186.48 162.267 186.587 162.44C186.693 162.613 186.817 162.763 186.957 162.89C187.103 163.01 187.263 163.107 187.437 163.18C187.61 163.247 187.793 163.28 187.987 163.28C188.407 163.28 188.75 163.173 189.017 162.96C189.283 162.74 189.417 162.45 189.417 162.09C189.417 161.79 189.307 161.533 189.087 161.32C188.88 161.113 188.493 160.913 187.927 160.72C187.353 160.513 186.997 160.373 186.857 160.3C186.097 159.913 185.717 159.343 185.717 158.59C185.717 158.063 185.927 157.613 186.347 157.24C186.773 156.867 187.297 156.68 187.917 156.68C188.463 156.68 188.937 156.82 189.337 157.1C189.737 157.373 190.003 157.717 190.137 158.13L189.277 158.49C189.197 158.223 189.037 158.003 188.797 157.83C188.563 157.65 188.277 157.56 187.937 157.56C187.577 157.56 187.273 157.66 187.027 157.86C186.78 158.047 186.657 158.29 186.657 158.59C186.657 158.837 186.753 159.05 186.947 159.23C187.16 159.41 187.623 159.623 188.337 159.87C189.063 160.117 189.58 160.42 189.887 160.78C190.2 161.133 190.357 161.57 190.357 162.09ZM193.806 157.72V164H192.886V157.72H190.886V156.84H195.806V157.72H193.806ZM200.947 156.84V157.72H197.687V159.99H200.627V160.85H197.687V163.12H200.947V164H196.767V156.84H200.947ZM203.107 164H202.187V156.84H203.107L205.597 161.2H205.637L208.127 156.84H209.047V164H208.127V159.75L208.167 158.55H208.127L205.887 162.48H205.347L203.107 158.55H203.067L203.107 159.75V164Z" fill="#657786" />
                <Defs>
                    <LinearGradient id="paint0_linear" x1="182.5" y1="91.3554" x2="142.157" y2="191.697" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint1_linear" x1="119.621" y1="33.0284" x2="88.902" y2="59.2885" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint2_linear" x1="119.621" y1="33.0284" x2="88.902" y2="59.2885" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint3_linear" x1="106.438" y1="1.31276" x2="103.032" y2="1.96376" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint4_linear" x1="106.438" y1="1.31276" x2="103.032" y2="1.96376" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint5_linear" x1="141.279" y1="35.7312" x2="140.495" y2="39.3286" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint6_linear" x1="141.279" y1="35.7312" x2="140.495" y2="39.3286" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint7_linear" x1="78.908" y1="35.7312" x2="78.1243" y2="39.3286" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint8_linear" x1="78.908" y1="35.7312" x2="78.1243" y2="39.3286" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint9_linear" x1="132.145" y1="10.3537" x2="124.544" y2="17.4741" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint10_linear" x1="132.145" y1="10.3537" x2="124.544" y2="17.4741" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint11_linear" x1="86.4359" y1="10.3538" x2="78.8348" y2="17.4741" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint12_linear" x1="86.4359" y1="10.3538" x2="78.8348" y2="17.4741" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint13_linear" x1="102.232" y1="20.3394" x2="92.1414" y2="31.1533" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint14_linear" x1="102.232" y1="20.3394" x2="92.1414" y2="31.1533" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint15_linear" x1="106.617" y1="19.286" x2="104.841" y2="21.9095" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint16_linear" x1="106.617" y1="19.286" x2="104.841" y2="21.9095" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint17_linear" x1="125.643" y1="18.9695" x2="69.3916" y2="52.1651" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                    <LinearGradient id="paint18_linear" x1="125.643" y1="18.9695" x2="69.3916" y2="52.1651" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4860DC" />
                        <Stop offset="0.9999" stopColor="#38A8FA" />
                    </LinearGradient>
                </Defs>
            </Svg>
        </View>
    )
}