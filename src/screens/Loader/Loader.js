import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Spinner } from 'native-base';
import {connect} from 'react-redux'
import {authAddUser, authUpdateUser} from '../../../actions/auth'
import AsyncStorage from '@react-native-community/async-storage';

class Loader extends Component {

    componentDidMount() {
        subscribe = this.props.navigation.addListener('didFocus', () => {
            this.authentication();
        });
    }
    
    authentication=()=>{
        AsyncStorage.getItem('user').then((value) => {
            console.log('====================================');
            console.log('JSON.parse(value).length != 0: ', JSON.parse(value) != 0);
            console.log('====================================');
            console.log('====================================');
            console.log(value);
            console.log('====================================');
            if(JSON.parse(value).length == 0){
                console.log('====================================');
                console.log('redirected');
                console.log('====================================');
                this.props.navigation.navigate('Login')
            }
            if(JSON.parse(value).length != 0){
                console.log('====================================');
                console.log('this.props.prod.length != 0: ', this.props.prod.length != 0);
                console.log('====================================');
                if(this.props.prod.length != 0){
                    for(let i=0; i<this.props.prod.length; i++){
                        if(this.props.prod[i].isLogged == true){
                            console.log('====================================');
                            console.log('this.props.prod[i].isLogged == true:', this.props.prod[i].isLogged == true);
                            console.log('====================================');
                            this.props.navigation.navigate('Home')
                            // this.setState({Email: this.props.prod[i].Email})
                        }
                    }
                }
                else if(this.props.prod.length == 0){
                    console.log('====================================');
                    console.log('this.props.prod.length == 0:', this.props.prod.length == 0);
                    console.log('====================================');
                    let array=[]
                    for(let i=0; i<JSON.parse(value).length; i++){
                        array.push(JSON.parse(value)[i])
                        console.log('====================================');
                        console.log('JSON.parse(value)[i].isLogged == true:', JSON.parse(value)[i].isLogged == true);
                        console.log('====================================');
                        this.props.addUser(JSON.parse(value)[i].id, JSON.parse(value)[i].Email, JSON.parse(value)[i].Password, JSON.parse(value)[i].isLogged);
                        if(JSON.parse(value)[i].isLogged == true){
                            this.setState({viewState: true})
                        }
                    }
                    if(!this.state.viewState){
                        this.props.navigation.navigate('Login')
                    }
                    else{
                        this.props.navigation.navigate('Home')
                    }
                }
            }
        })
    }
      
    state={
      Email: '',
      temp: [],
      viewState: false
    }

    render() {

        return (
            <Container>
                <View style={{paddingTop: 280,}}>
                    <Spinner color='blue' />
                </View>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        prod: state.auth.users
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        addUser: (id, Email, Password, isLogged) => {
            dispatch(authAddUser(id, Email, Password, isLogged))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loader)