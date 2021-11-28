import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
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
import Icon from '../Icons/Icon'
import Menu from '../Icons/Menu'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import BotNav from '../BottomNav/BotNav';
// import BotNav from '../BottomNav'
// import Card from '../../Card'
import AddNewClassesPage from '../../ClassesDesign/AddNewClassesPage'
import Teachers from '../../cardss/Teachers'
import Students from '../../cardss/Students'
import Reports from '../../cardss/Reports'
// import Timetable from '../../cardss/Timetable'
import BotNav from '../BottomNav/BotNav'
import DrawerIcon from '../Icons/DrawerIcon';
import DrawerContent from '../DrawerNav/DrawerContent';
// import ChooseClass from '../../ClassesDesign/ChooseClass';
// import Addclass from '../../profile/Addclass'
// import Addclass from '../../profile/Addclass'
// import TeacherDashboard from '../../TEACHERS/TeacherDashboard'
const Stack = createStackNavigator();

const NavBar = ({ navigation }) => {
    return (
        //--------------- Creating stack navigation for TopNav-------------------
        <Stack.Navigator>
            <Stack.Screen
                name="BotNav"
                component={BotNav}
                options={{
                    title: 'Telangana ZP High School',
                    headerStyle:{
                    elevation:4,
    borderBottomWidth: 1,
                },
                    headerTitleStyle: {
                        // height:80,
                        fontSize: 16,
                        fontWeight: "500",
                        marginLeft: 40,
                        fontFamily: 'Roboto',
                        fontWeight:'bold'
                        
                    },
                    headerLeft: () => <View style={styles.direction}>
                        <TouchableOpacity
                            style={styles.Menu}
                            onPress={() => navigation.openDrawer()}
                        ><Menu /></TouchableOpacity>
                        <SafeAreaView
                            style={styles.Icon}
                        >
                            <Icon />
                        </SafeAreaView>

                    </View>
                }
                }
                
                
            />
            <Stack.Screen name="Classes" component={AddNewClassesPage} options={{ headerStyle:{
                    elevation:4,
    borderBottomWidth: 1,
                },}}/>
            <Stack.Screen name="Teachers" component={Teachers} options={{ headerStyle:{
                    elevation:4,
    borderBottomWidth: 1,
                }}}/>
            <Stack.Screen name="Reports" component={Reports} />
            <Stack.Screen name="Students" component={Students} />
            {/* <Stack.Screen name="Timetable" component={Timetable} /> */}
            {/* ...........teachersstacks.............. */}
            {/* <Stack.Screen name="Add Teachers" component={Addclass} options={{ headerStyle:{
                    elevation:4,
    borderBottomWidth: 1,
                }}} /> */}

            {/* <Stack.Screen name="ChooseClass" component={ChooseClass}/> */}
        </Stack.Navigator>
    )
}
const Drawer = createDrawerNavigator();
function DrawerNav() {
    return (

        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
        //    options={{
        //        title:"BS#ARP"
        //    }} 
        //      />}
        >
            <Drawer.Screen name="NavBar" component={NavBar} />
        </Drawer.Navigator>
    )
}
const styles = StyleSheet.create({
    direction: {
        flexDirection: 'row',
        
    },
    Menu: {
        paddingLeft: 15.33,
        paddingTop: 8,
        //   marginTop:42,
        //   marginLeft:15.33
    },
    Icon: {
        marginLeft: 35,
        //   marginTop:2
    },
})
export default DrawerNav
