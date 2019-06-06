import * as React from "react";
import { View } from 'react-native'
import { Image, Dimensions } from 'react-native'
import { validateEmail, validatePassword } from './validate/validate'
import { Item, Input, Icon, Form, Toast, Container, Content, Button, Text, Footer, FooterTab } from "native-base";
const width = Dimensions.get('window').width;
class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // storing value of element
            password: '',
            email: '',

            // storing error message of each element 

            password_err_msg: '',
            email_err_msg: '',


            // if value true the element is invalid 
            pass_err: false,
            email_err: false,

        };
    }
    login() {
        if (!this.state.pass_err) {
            if (!this.state.email_err) {
                // this.props.navigation.navigate("Drawer");
                alert('sucess');
            }
        }
        else {
            Toast.show({
                text: "Enter Valid Username & password!",
                duration: 2000,
                position: "top",
                textStyle: { textAlign: "center" },
            });
        }
    }
    onChange = (value, target) => {
        if (target === 'email') {
            msg = validateEmail(value)
            this.setState({ email: value })
            if (msg != true) {
                this.setState({ email_err_msg: msg, email_err: true });
            }
            else {
                this.setState({ email_err: false })
            }
        }
        else if (target === 'password') {
            msg = validatePassword(value)
            this.setState({ password: value })
            if (msg != true) {
                this.setState({ password_err_msg: msg, pass_err: true });
            }
            else {
                this.setState({ pass_err: false })
            }
        }
    }

    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: 'lightgrey' }}>
                    <Image source={require('./assets/Icon.png')} style={{ width: width }} />
                </Content>
                <Content padder>
                    <Item>
                        <Icon active name='home' size={20} style={{ color: '#3C53B4' }} />
                        <Input
                            placeholder="Email"
                            style={{ height: 50, borderColor: 'black' }}
                            onChangeText={
                                (text) => {
                                    this.onChange(text, 'email')
                                }
                            }
                            onBlur={
                                () => {
                                    this.onChange(this.state.email, 'email')
                                }
                            }
                        />
                    </Item>
                    {
                        this.state.email_err &&
                        <View>
                            <Text style={{ color: 'red' }}>
                                {this.state.email_err_msg}
                            </Text>
                        </View>
                    }
                    <Item>
                        <Icon active name='lock' size={20} style={{ color: '#3C53B4' }} />
                        <Input
                            placeholder="Password"
                            style={{ height: 50, borderColor: 'black' }}
                            onChangeText={
                                (text) => {
                                    this.onChange(text, 'password')
                                }
                            }
                            onBlur={
                                () => {
                                    this.onChange(this.state.password, 'password')
                                }
                            }
                        />
                    </Item>
                    {
                        this.state.pass_err &&
                        <View>
                            <Text style={{ color: 'red' }}>
                                {this.state.password_err_msg}
                            </Text>
                        </View>
                    }
                    <Button block onPress={this.handleLogin}>
                        <Text onPress={()=>{this.login()}} style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}>Log In</Text>
                    </Button>
                </Content>
                <Footer>
                    <FooterTab style={{ borderTopWidth: 1, borderColor: 'lightgrey', alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', }}>
                        <Text style={{ color: 'grey', fontSize: 17, }}>Made with Love</Text>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

export default LoginForm;
//# sourceMappingURL=index.js.map