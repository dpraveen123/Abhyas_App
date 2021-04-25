import React from 'react'
import { View, Text } from 'react-native'
import firestore from '@react-native-firebase/firestore';



class Schools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uuids: [],
            Details: {}
        };
    }


    componentDidMount = () => {
        firestore()
            .collection('Principals')
            .get()
            .then(querySnapshot => {
                // console.log('Total users: ', querySnapshot.size);

                querySnapshot.forEach(doc => {

                    this.state.uuids = this.state.uuids.concat(doc.data())
                    this.setState({ uuids: this.state.uuids })
                    // console.log("uuids" + this.state.uuids);
                    // console.log('User ID: ', doc.id, doc.data());
                });

                this.Details()
            })
    };

    Details = () => {
       this.state.uuids.map(l=>{

        firestore()
            .collection('Schools').doc(l.uuid)
            .set({
                principalName: l.principalName,
                schoolName: l.schoolName,
                uuid: l.uuid,
                phoneno: l.phoneno,
            })
            .then(() => {
                console.log('User added!');
            });

           console.log(l.uuid);
       })
    }




    render() {
        return (
            <View>
                <Text>hloo</Text>
            </View>
        );
    }
}

export default Schools;