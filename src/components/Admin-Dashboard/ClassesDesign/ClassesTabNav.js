
import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text ,StyleProvider} from 'native-base';
import {View} from 'react-native';
import Tab1 from '../profile/Tab1';
import AllClasses from './AllClasses';
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';


export default class Slider extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container >
        
        <Tabs>
          <Tab  heading={ <TabHeading><Text>All Classes</Text></TabHeading>}  >
          <AllClasses />
          </Tab>
         
          <Tab heading={ <TabHeading><Text>My classes</Text></TabHeading>}>
           <Tab1 />
          </Tab>
         
        </Tabs>
      </Container>
      </StyleProvider>
    );
  }
}