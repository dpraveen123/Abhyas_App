import React, { Component } from 'react';

import {
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
  InteractionManager,
  Platform,
  Dimensions,
  Animated,
} from 'react-native';
import store from '../redux'
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
var x=0;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  icons: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 16,
  },
  underline: {
    width: '100%',
    height: 1,
    position: 'absolute',
    top: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contentChild: {
    padding: 12,
  },
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  contentTxt: {
    color: 'black',
    marginLeft: 8,
    fontSize: 12,
  },
  contentFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 12,
  },
});

class Item extends Component {
  static animated;
  static defaultProps = {
    contentVisible: false,
    backgroundColor: 'transparent',
    titleBackground: 'transparent',
    contentBackground: 'transparent',
    underlineColor: '#d3d3d3',
    visibleImage: false,
    invisibleImage: false,
  };

  static propTypes = {
    contentVisible: PropTypes.bool,
    backgroundColor: PropTypes.string,
    titleBackground: PropTypes.string,
    contentBackground: PropTypes.string,
    underlineColor: PropTypes.string,
    visibleImage: PropTypes.any,
    invisibleImage: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      contentVisible: props.contentVisible,
      headerheight: 0,
      contentHeight: 0,
      storedata:''
    };
  }

  render() {

    return (
      <Animated.View style={[
        styles.container,
        {
          height: this.animated,
          backgroundColor: this.props.backgroundColor,
        },
        this.props.style,
      ]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.onPress}
        >
          <View
            onLayout={ this.onAnimLayout }
          >        
            { this.props.header }
            <Image source={
              this.state.contentVisible
                ? this.props.visibleImage
                : this.props.invisibleImage
            } style={styles.icons}/>
          </View>
        </TouchableOpacity>
        <View
          style={styles.content}
          onLayout={this.onLayout}
        >
          <View
            style={[
              styles.contentChild,
            ]}
          >
        {/* <Text>hiii drop</Text> */}

            { this.props.children }
          </View>
        </View>
      </Animated.View>
    );
  }

  runAnimation = () => {
    const initialValue = this.state.contentVisible
      ? this.state.headerHeight + this.state.contentHeight : this.state.headerHeight;
    const finalValue = this.state.contentVisible
      ? this.state.headerHeight : this.state.contentHeight + this.state.headerHeight;
     this.state.contentVisible=!this.state.contentVisible
     console.log(this.state.contentVisible)

    this.setState({
      contentVisible: this.state.contentVisible,
    });

    this.animated.setValue(initialValue);
    Animated.spring(
      this.animated,
      {
        toValue: finalValue,
      },
    ).start();
  }

  onAnimLayout = (evt) => {
    const headerHeight = evt.nativeEvent.layout.height;
    if (!this.state.isMounted && !this.props.contentVisible) {
      this.animated = new Animated.Value(headerHeight);
      this.setState({
        isMounted: true,
        headerHeight,
      });
      return;
    } else if (!this.state.isMounted) {
      InteractionManager.runAfterInteractions(() => {
        this.animated = new Animated.Value(headerHeight + this.state.contentHeight);
      });
    }
    this.setState({ headerHeight, isMounted: true });
  }

  onLayout = (evt) => {
    const contentHeight = evt.nativeEvent.layout.height;
    this.setState({ contentHeight });
  }

  onPress = () => {
    console.log("i  frommmm")
x=0
    this.runAnimation();
  }
componentDidMount=()=>{
  console.log("mounting ",this.state.storedata)
   store.subscribe(() => {
   this.setState({storedata:store.getState().changecontentvisbile})
// console.log(this.state.storedata)
  console.log(store.getState().changecontentvisbile,"i am from node")
    // this.state.contentVisible=true;
    // this.setState({contentVisible:this.state.contentVisible})
this.onPress()

})
}


//   this.setState({storedata:store.getState()})
//   console.log(store.getState().changecontentvisbile," is nodemodule")
// if(store.getState().changecontentvisbile===true){
//   console.log(" i am from nnooe moodule")

//   // this.onPress();
// }

// }

}
const mapStateToProps=(state)=>{
console.log("i am from map",state)
}
const mapDispatchToProps = (dispatch) => {
  return {
 
  //   // dispatching plain actions
  //   increment: () => dispatch({ type: 'INCREMENT' }),
  //   decrement: () => dispatch({ type: 'DECREMENT' }),
  //   reset: () => dispatch({ type: 'RESET' }),
  // details:(l)=>dispatch({type:'authdetails',payload:l})
  // changevisible:()=>dispatch({type:'changevisible',payload:''})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item)