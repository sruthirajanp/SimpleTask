import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { black, grey } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <Btn bgColor={grey} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={black} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
    </Background>
  );
}
export default Home;