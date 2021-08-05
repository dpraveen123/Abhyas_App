import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text ,StyleProvider} from 'native-base';
import {View} from 'react-native';
import Students from './Students';
import Report from './Report';
import Subjects from './Subjects';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import Attendance from '../attendence';


export default class Tabnav extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount=()=>{
    // console.log("i am from tabnav.js",this.props.route.params)  
    this.props.navigation.setOptions({
      headerTitle:this.props.route.params.class+'-'+this.props.route.params.section+' section'
    
    })
    // console.log(this.props)
  }
  render() {
  
      
    return (
      <StyleProvider style={getTheme(material)}>
      <Container >
        
        <Tabs>
          <Tab  heading={ <TabHeading><Text>Subjects</Text></TabHeading>}  >
          <Subjects props={this.props}/>
          </Tab>
         
          <Tab heading={ <TabHeading><Text>Students</Text></TabHeading>}>
           <Students props={this.props}/>
          </Tab>

          <Tab heading={ <TabHeading><Text>Reports</Text></TabHeading>}>
           <Attendance  props={this.props} />
          </Tab>
         
        </Tabs>
      </Container>
      </StyleProvider>
    );
  }
}