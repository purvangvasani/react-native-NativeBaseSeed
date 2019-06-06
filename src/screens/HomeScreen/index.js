import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Container, Content, ListItem, List } from 'native-base';
import theme from '../../../Theme/theme';
import { variable } from '../../../Theme/variable';
import HeadComponent from '../../components/Header';
import {connect} from 'react-redux'
import {authAddUser, authUpdateUser} from '../../../actions/auth'

class HomeScreen extends Component {

  componentDidMount() {
    subscribe = this.props.navigation.addListener('didFocus', () => {
        this.authentication();
    });
  }
  
  authentication=()=>{
    if(this.props.prod.length > 0){
      for(let i=0; i<this.props.prod.length; i++){
        if(this.props.prod[i].isLogged){
          this.setState({
            Email: this.props.prod[i].Email,
          })
        }
      }
    }
  }
  
  state={
    Email: '',
    temp: [],
    viewState: false
  }

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{fontSize : variable.h1, color: tintColor}} />
    )
  }
  
  render() {
      let Array = [ "React Native Starter Kit", "React Navigation", "NativeBase easy Grid", "NativeBase", "CodePush", "Redux" ];
      return (
          <Container>
              <HeadComponent />
                <Content>
                  <View>
                    <Text>Hello, {this.state.Email}</Text>
                  </View>
                  <List>
                  { Array.map((item, key)=>(
                      <ListItem key={key}>
                          <TouchableOpacity onPress={()=>this.props.navigation.navigate('List', {item})}>
                              <Text style={theme.listItems}>{item}</Text>
                          </TouchableOpacity>
                      </ListItem>
                  ))}
                  </List>
                </Content>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
