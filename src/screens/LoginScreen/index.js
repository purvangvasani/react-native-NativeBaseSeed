import React, { Component } from 'react';
import { Image, View , Text, Dimensions } from 'react-native';
import { Container, FooterTab, Footer, Content, Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {connect} from 'react-redux'
import {authAddUser, authUpdateUser} from '../../../actions/auth'
import { validateEmail, validatePassword } from '../../validate/validate'
import AsyncStorage from '@react-native-community/async-storage';

const width = Dimensions.get('window').width;

class LoginScreen extends Component {

    state = {
        isLogged: true,
        Email: '',
        Password: '',
        password_err_msg: '',
        email_err_msg: '',
        isPass: false,
        isEmail: false,
    }

    handleLogin = () => {
        if(this.state.Email == '' || this.state.Password == ''){
            alert('Fill all information.')
        }
        else if (this.state.isPass) {
            if (this.state.isEmail) {
                alert('Provide valid Email or Password.')
            }
        }
        else{
            this.props.addUser(this.props.prod.length, this.state.Email, this.state.Password, this.state.isLogged)
            alert('Success')
            this.props.navigation.navigate('Home');
        }
    }

    onChange = (value, target) => {
        if (target === 'email') {
            let msg = validateEmail(value)
            this.setState({ Email: value })
            if (msg != true) {
                this.setState({ email_err_msg: msg, isEmail: true });
            }
            else {
                this.setState({ isEmail: false, email_err_msg: '' })
            }
        }
        else if (target === 'password') {
            let msg = validatePassword(value)
            this.setState({ Password: value })
            if (msg != true) {
                this.setState({ password_err_msg: msg, isPass: true });
            }
            else {
                this.setState({ isPass: false, password_err_msg: '' })
            }
        }
    }

    componentWillMount() {
        // console.log('====================================');
        // console.log(this.props.prod.length);
        // console.log('====================================');
    }

    render() {
        return (
            <Container>
                <View style={{backgroundColor: 'lightgrey', height: 200}}>
                    <Image source={require('../../assets/Icon.png')} style={{width: width, height: 200 }}/>
                </View>
                <Content padder>
                    <Item>
                        <Icon active name='user' size={20} style={{color:'#3C53B4'}}/>
                        <Input onChangeText={(text) => {this.onChange(text, 'email')}}
                            onBlur={() => {this.onChange(this.state.Email, 'email')}}
                            placeholder='Email' style={{color:'#3C53B4'}}/>
                        { this.state.isEmail &&
                            <View>
                                <Text style={{ color: 'red' }}>{this.state.email_err_msg}</Text>
                            </View>
                        }
                    </Item>
                    <Item>
                        <Icon active name='lock' size={20} style={{color:'#3C53B4'}}/>
                        <Input onChangeText={(text) => {this.onChange(text, 'password')}}  secureTextEntry={true}
                            onBlur={() => {this.onChange(this.state.Password, 'password')}}
                            style={{color:'#3C53B4'}} placeholder='Password'/>
                        { this.state.isPass &&
                            <View>
                                <Text style={{ color: 'red' }}>{this.state.password_err_msg}</Text>
                            </View>
                        }
                    </Item>
                    <Button block onPress={this.handleLogin}>
                        <Text style={{color: 'white', fontSize: 16,fontWeight: 'bold',}}>Log In</Text>
                    </Button>
                </Content>
                <Footer>
                    <FooterTab style={{borderTopWidth: 1, borderColor: 'lightgrey', alignItems: 'center',backgroundColor: 'white', justifyContent: 'center',}}>
                        <Text style={{color:'grey', fontSize: 17,}}>Made with Love</Text>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    console.log('====================================');
    console.log(state.auth.users);
    console.log('====================================');
    AsyncStorage.setItem('user', JSON.stringify(state.auth.users))
    return {
        prod: state.auth.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (id, Email, Password, isLogged) => {
              dispatch(authAddUser(id, Email, Password, isLogged))
        },
        updateUser: (id, Email, Password, isLogged) => {
          dispatch(authUpdateUser(id, Email, Password, isLogged))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
