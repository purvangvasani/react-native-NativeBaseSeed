import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { Container, Header, Left, Button, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { variable } from '../../../Theme/variable';

class BlankScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
        <Icon name="gears" style={{fontSize : 24, color:tintColor}} />
    )
  }

  render() {
      return (
        <Container>
          <Header>
            <Left>
                <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Home')}>
                    <Icon name="chevron-left" size={20} style={{color:variable.cWhite}}/>
                </TouchableNativeFeedback>
            </Left>
            <Body>
              <Text style={{color: variable.cWhite, fontSize: variable.fontMedium, fontWeight: variable.fontWeightBold,}}>Blank Screen</Text>
            </Body>
            <Right />
          </Header>
        </Container>
      );
  }
}
export default BlankScreen