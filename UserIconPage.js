import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';

import auth from '@react-native-firebase/auth';
function UserIconPage() {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>You're Logged in</Text>
            <Text style={styles.phoneNumber}>{auth().currentUser.phoneNumber}</Text>
            <View style={{ marginTop: 30 }}>
                <Button title="Signout" onPress={() => auth().signOut()} />
            </View>
        </View>
    )
}
export default UserIconPage




// import React from 'react';


// export default function Authenticated() {
//   return (
//     <View style={styles.screen}>
//       <Text style={styles.text}>You're Logged in</Text>
//       <Text style={styles.phoneNumber}>{auth().currentUser.phoneNumber}</Text>
//       <View style={{ marginTop: 30 }}>
//         <Button title="Signout" onPress={() => auth().signOut()} />
//       </View>
//     </View>
//   );
// }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 2,
        borderColor: 'lightblue',
        width: 300,
        marginVertical: 30,
        fontSize: 25,
        padding: 10,
        borderRadius: 8,
    },
    text: {
        fontSize: 25,
    },
    phoneNumber: {
        fontSize: 21,
        marginTop: 20,
    },
});
