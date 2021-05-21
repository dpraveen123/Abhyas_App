import React from 'react'
import { View, Text } from 'react-native'
import firestore from '@react-native-firebase/firestore';
var data = [
    { name: 'praveen', phnno: 8688696792, class: '', section: '', subject: '', classTeacher: 'false' }
]


class TeacherData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber: data[0].phnno
        };
    }


    componentDidMount = () => {

        console.log(this.state.phonenumber);
        // firestore()
        //     .collection('Schools').doc('5a027b11-470c-4fb5-9355-989036cade8c').collection('Teachers').doc(`${this.state.phonenumber}`)
        //     .set({
        //         TeacherName: 'nagaraju',
        //         TeacherPhoneno: data[0].phnno,
        //         Class: '1st class',
        //         section: 'A',
        //         subject: 'maths',
        //         classTeacher: 'false'
        //     })
        //     .then(() => {
        //         console.log('User added!');
        //     });
        const users = firestore()
            .collection('Schools').doc('5a027b11-470c-4fb5-9355-989036cade8c').collection('Teachers').doc(`${this.state.phonenumber}`)
            .get();
            users.then((response)=>{
                console.log(response.data());
            })
        // console.log(users.Teachername + 'users');
    }


    render() {
        return (
            <View>
                <Text>hloo</Text>
            </View>
        );
    }
}

export default TeacherData;
