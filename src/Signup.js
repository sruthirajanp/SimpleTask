import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btnsignup from './Btnsignup';
import {black} from './Constants';
import Fieldsignup from './Fieldsignup';

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
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
          <Fieldsignup placeholder="First Name" />
          <Fieldsignup placeholder="Last Name" />
          <Fieldsignup
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Fieldsignup placeholder="Contact Number" keyboardType={'number'} />
          <Fieldsignup placeholder="Password" secureTextEntry={true} />
          <Fieldsignup placeholder="Confirm Password" secureTextEntry={true} />
          <Btnsignup
            textColor="white"
            bgColor={black}
            btnLabel="Signup"
            Press={() => {
              alert('Account Created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
           
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: black, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;