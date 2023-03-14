import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btnlogin from './Btnlogin';
import {black} from './Constants';
import Fieldlogin from './Fieldlogin';

const Login = (props) => {
  return (
    <Background>
      <View style={{
          alignItems: 'center', width: 460}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 770,
            width: 400,
            borderTopLeftRadius: 130,
            borderBottomLeftRadius:140,
            borderBottomRightRadius:140,
            borderTopRightRadius:130,
            paddingTop: 100,
            alignItems: 'center',
            marginRight:100
          }}>
          <Fieldlogin
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Fieldlogin placeholder="Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
              <TouchableOpacity>
            <Text style={{color: black, fontSize: 15}}>
              Forgot Password ?
            </Text>
            </TouchableOpacity>
          </View>
          <Btnlogin textColor='white' bgColor={black} btnLabel="Login" Press={() => alert("Logged In")} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ 
              color: black, 
              fontWeight: 'bold', 
              fontSize: 16 
              }}>Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;