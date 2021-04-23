import React from 'react'
import { View, Text } from 'react-native'
import firestore from '@react-native-firebase/firestore';
var data = [
    { name: 'praveen', phnno: 8688696792, schoolname: '' }
]


class CreateData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber: ''
        };
    }

    uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    componentDidMount = () => {
        this.state.phonenumber = 9515794253
        this.setState({ phonenumber: this.state.phonenumber })
        console.log(this.state.phonenumber, typeof (`${this.state.phonenumber}`))
        firestore()
            .collection('Principals').doc(`${this.state.phonenumber}`)
            .set({
                principalName: 'nagaraju',
                schoolName: 'nagschool',
                uuid: this.uuidv4(),
                phoneno: '8688696792',
            })
            .then(() => {
                console.log('User added!');
            });
    }


    render() {
        return (
            <View>
                <Text>hloo</Text>
            </View>
        );
    }
}

export default CreateData;
