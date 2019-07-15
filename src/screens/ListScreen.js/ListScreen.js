import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { variable } from '../../../Theme/variable';
import { Container, Header, Left, Button, Content, Right } from 'native-base';

class ListScreen extends Component {
    render() {
        let color;
        if(Platform.OS == 'ios'){
            color = variable.cPrimary
        }
        else{
            color = variable.cWhite
        }
        return (
            <Header>
                <Left>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                        <Icon name="chevron-left" size={20} style={{color:color}}/>
                    </TouchableOpacity>
                </Left>
                <Content>
                    <Text style={{color: color, fontSize: variable.fontMedium, fontWeight: variable.fontWeightBold,}}>{this.props.navigation.state.params.item}</Text>
                </Content>
                <Right></Right>
            </Header>
        );
    }
}
export default ListScreen