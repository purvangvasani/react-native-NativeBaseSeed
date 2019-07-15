import React, { Component } from 'react';
import { Platform, Text, TouchableOpacity } from 'react-native';
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
    let color;
    if(Platform.OS == 'ios'){
      color = variable.cPrimary
    }
    else{
      color = variable.cWhite
    }
      return (
        <Container>
          <Header>
            <Left>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                    <Icon name="chevron-left" size={20} style={{color:color}}/>
                </TouchableOpacity>
            </Left>
            <Body>
              <Text style={{color: color, fontSize: variable.fontMedium, fontWeight: variable.fontWeightBold,}}>Blank Screen</Text>
            </Body>
            <Right></Right>
          </Header>
        </Container>
      );
  }
}
export default BlankScreen