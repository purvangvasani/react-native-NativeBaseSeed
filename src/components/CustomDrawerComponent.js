import React, { Component } from 'react'
import {TouchableOpacity, SafeAreaView, ScrollView, Text} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { DrawerItems } from "react-navigation";
import {connect} from 'react-redux'
import {authUpdateUser} from '../../actions/auth'
import { Footer } from 'native-base';

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex : 1}}>
    <ScrollView>
      <DrawerItems {...props} />
      <Footer>
      <TouchableOpacity onPress={()=> 
        {
          for(let i = 0; i< props.prod.length; i++){
            if(props.prod[i].isLogged)
              props.updateUser(props.prod[i].id, props.prod[i].Email, props.prod[i].Password, false)
          }
          props.navigation.push('Login')}
      }>
        <Text style={{paddingLeft: 20}}>
          <Icon name="lock" style={{fontSize : 24}} /> 
          <Text style={{fontWeight: 'bold',}}>Logout</Text>
        </Text>
      </TouchableOpacity>
      </Footer>
    </ScrollView>
  </SafeAreaView>
)

const mapStateToProps = state => {
    return {
        prod: state.auth.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateUser: (id, Email, Password, isLogged) => {
            dispatch(authUpdateUser(id, Email, Password, isLogged))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerComponent)