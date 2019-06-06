import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { variable } from '../../../Theme/variable';
import { Container, Header, Left, Button, Body, Right } from 'native-base';

class ListScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('Home')}>
                            <Icon name="chevron-left" size={20} style={{color:variable.cWhite}}/>
                        </TouchableNativeFeedback>
                    </Left>
                    <Body><Text style={{color: variable.cWhite, fontSize: variable.fontMedium, fontWeight: variable.fontWeightBold,}}>{this.props.navigation.state.params.item}</Text></Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}
export default ListScreen