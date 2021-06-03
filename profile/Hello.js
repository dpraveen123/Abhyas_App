import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView, SafeAreaView, TextInput, Button, Alert, title, TouchableHighlight } from 'react-native';
// import pic from '../Images/pp.jpg';
import pic from '../Images/pp.jpg'
import Svgpages from '../assets/Svg';
import Search from '../assets/Search';
import Fil from '../assets/fil';
import Addclass from './Addclass';
import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth'
import store from '../redux'
import firestore from '@react-native-firebase/firestore';
import Teacher from '../teacher'


class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TeacherName: [],
      artists: [
        {
          image: pic,
          id: 1,
          skills: "subject",
          name: "Mike ",
          student: "ASSIGN class"
        },
        {
          image: pic,
          id: 2,
          skills: "subject",
          name: "Aldrew ",
          student: "ASSIGN class"

        },
        {
          image: pic,
          id: 3,
          skills: "Maxel",
          name: "Mike ",
          student: "ASSIGN class"
        },
        {
          image: pic,
          id: 4,
          skills: "subject",
          name: "Cleo ",
          student: "ASSIGN class"
        },
        {
          image: pic,
          id: 5,
          skills: "subject",
          name: "Arpret ",
          student: "ASSIGN class"
        },
        {
          image: pic,
          id: 6,
          skills: "subject",
          name: "Anderson",
          student: "ASSIGN class"
        },
        {
          image: pic,
          id: 7,
          skills: "subject",
          name: "Angela ",
          student: "ASSIGN class"
        },
        {
          image: pic,
          id: 8,
          skills: "subject",
          name: "Malk ",
          student: "ASSIGN class "
        },
        {
          image: pic,
          id: 9,
          skills: "subject",
          name: "Mike ",
          student: "ASSIGN class"
        },
        {
          image: pic,
          id: 10,
          skills: "subject",
          name: "Saint ",
          student: "ASSIGN class"
        },
        {
          image: pic,
          id: 11,
          skills: "subject",
          name: "Anderson ",
          student: "ASSIGN class"
        },
        {
          image: pic,
          id: 12,
          skills: "subject",
          name: "Anderson ",
          student: "ASSIGN class"
        },

      ]
    }
  }
  componentDidMount = () => {
    firestore()
      .collection('Schools').doc(store.getState().authdetails.uuid).collection('Teachers')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          // console.log('User ID: ', documentSnapshot.data());

          this.setState({ TeacherName: this.state.TeacherName.concat(documentSnapshot.data()) })
          // console.log("this.state.username",this.state.TeacherName);
        })
      });

    // .then((querySnapshot) => {
    //   // console.log("itemvalue", itemvalue);
    //   // console.log('details of teachers', data());

    //   var x = querySnapshot.data();
    //   console.log("x is ", Object.keys(x));
    //   console.log(x.Class);
    //   // setmySections(Object.keys(x.sections))

    // });
    console.log(store.getState().authdetails.uuid);
  }
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        {
          this.state.TeacherName.length === 0 ? <Teacher props={this.props.props} /> :
            <View>
              <View style={{ justifyContent: 'center', paddingHorizontal: 15, flexDirection: 'row', paddingTop: 9 }}>
                <View style={{ height: 50, flexDirection: 'row', padding: 5, alignItems: 'center', borderRadius: 30, paddingLeft: 30, flex: 1, backgroundColor: '#f5f8fa' }}>
                  <Search />
                  <TextInput placeholder="Search Teachers" style={{ fontSize: 14, marginLeft: 15, borderRadius: 15 }} />
                </View>
                <View style={{ height: 50, backgroundColor: "white", flexDirection: 'row', padding: 5, alignItems: 'center', borderRadius: 30, paddingRight: 5 }}>
                  {/* <Fil /> */}
                  <Image style={styles.Fil} source={require('../Images/Filter.png')} />
                  <TouchableOpacity  >
                    <Text style={{ fontWeight: "bold", color: "#1e90ff", fontSize: 15 }}> Filter</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView>
                <View style={{ borderRadius: 80, margin: 12 }}>
                  <Text style={{ fontWeight: "bold", paddingLeft: 30 }}>All Teachers</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        flex: 1,
                        width: 300, heigth: 45, marginLeft: -10
                      }}>
                      {this.state.TeacherName.map(artist => (
                        <View >
                          <TouchableOpacity style={styles.card}>
                            <View key={artist.id} style={{ flexDirection: "row", flex: 1 }} >
                              <View style={{ flexDirection: 'row', borderRadius: 20 }}>
                                <View style={{ flexDirection: "column", paddingLeft: 0, paddingTop: 1, }}>
                                  <Image source={artist.image}
                                    style={{
                                      height: 50,
                                      width: 50,
                                      backgroundColor: "#ddd",
                                      borderRadius: 50 / 2
                                    }} resizeMode="cover" />
                                </View>
                                <View
                                  style={{
                                    flexDirection: "column",
                                    paddingLeft: 13,
                                    paddingTop: 7,
                                  }}>
                                  <Text >{artist.TeacherName}</Text>
                                  <Text style={{ fontSize: 14, color: "#A7A7A7" }}>{artist.TeacherPhoneno} </Text>
                                  <Text style={{ fontSize: 14, color: "#A7A7A7" }}>{artist.student} </Text>
                                </View>
                              </View>
                              <View style={{ paddingLeft: 100, paddingTop: 15 }}>
                                <View>
                                  <Svgpages />
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>))}
                    </View>
                  </View>
                </View>

              </ScrollView>
              <View style={styles.teacher}>

                <TouchableOpacity style={{ borderRadius: 40, backgroundColor: '#1F85FF', width: 169, height: 48, elevation: 4, fontWeight: "500", padding: 12, marginTop: -20, marginLeft: 15 }}
                  onPress={() => {
                    this.props.props.navigate('Add Teachers')
                  }}
                >

                  <Text style={{ fontSize: 16, color: "#FFFFFF", width: 137.75, height: 24 }}> +Add new Teacher</Text>
                </TouchableOpacity>
              </View>

              <View style={{ position: 'absolute', marginTop: 650, marginLeft: 104 }}>


                <TouchableHighlight style={styles.submit} onPress={() => this.props.navigation.navigate('Addclass')} underlayColor='#fff'>
                  <Text style={styles.submitText}>+ Add Class</Text>
                </TouchableHighlight>
              </View>
            </View>
        }
      </SafeAreaView>




    );
  }
}
const { width, height } = Dimensions.get("screen");
var height1 = Dimensions.get('window').height;
const styles = StyleSheet.create({
  teacher:
  {
    width: 199,
    height: 48,
    marginLeft: 80,
    // marginBottom: height1 - 500,
    top:-220


  },
  card: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: width / 1.1,
    marginHorizontal: 20,
    borderRadius: 20,

    height: height / 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    flex: 1,
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },
  submit: {
    width: 152,
    height: 48,

  },
  Fil: {
    width: 30,
    height: 30,
    resizeMode: 'stretch'

  },
  submitText: {
    paddingTop: 10,
    paddingBottom: 10,

    color: '#fff',
    textAlign: 'center',
    backgroundColor: "#1e90ff",
    borderRadius: 20,
    borderWidth: 1,
    fontWeight: 'bold',
    borderColor: '#fff',
  },
});

export default Hello;