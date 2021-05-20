import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text ,StyleProvider} from 'native-base';
import {View} from 'react-native';
import Students from './Students';
import Report from './Report';
import Subjects from './Subjects';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';


export default class Tabnav extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount=()=>{
    // console.log("i am from tabnav.js",this.props.route.params)  
  }
  render() {
    this.props.navigation.setOptions({
      headerTitle:this.props.route.params.class+'-'+this.props.route.params.section+' section'
    
    })
      
    return (
      <StyleProvider style={getTheme(material)}>
      <Container >
        
        <Tabs>
          <Tab  heading={ <TabHeading><Text>Subjects</Text></TabHeading>}  >
          <Subjects props={this.props}/>
          </Tab>
         
          <Tab heading={ <TabHeading><Text>Students</Text></TabHeading>}>
           <Students />
          </Tab>

          <Tab heading={ <TabHeading><Text>Reports</Text></TabHeading>}>
           <Report   />
          </Tab>
         
        </Tabs>
      </Container>
      </StyleProvider>
    );
  }
}