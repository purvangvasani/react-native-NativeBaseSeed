import React, { Component } from 'react';
import { Text, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Header, Left, Button, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { variable } from '../../Theme/variable';

class HeadComponent extends Component {
    render() {
        let color;
        if(Platform.OS == 'ios'){
            color = variable.cPrimary
        }
        else {
            color = variable.cWhite
        }
        return (
            <Header>
                <Left>
                    <Button onPress={() => this.props.navigation.openDrawer()} transparent>
                        <Icon name="navicon" size={20} style={{color:color}}/>
                    </Button>
                </Left>
                <Body><Text style={{color: variable.cWhite, fontSize: variable.fontMedium, fontWeight: variable.fontWeightBold,}}>Home</Text></Body>
                <Right />
            </Header>
        );
    }
}

export default withNavigation(HeadComponent);            