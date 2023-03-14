import React from 'react';
import {TextInput} from 'react-native';
import {black} from './Constants';

const Fieldlogin = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100, 
        color: black, 
        paddingHorizontal: 10, 
        width: '78%',
        backgroundColor: '#dcdcdc', 
        marginVertical: 10,
        marginTop:50
        }}
      placeholderTextColor={black}></TextInput>
  );
};

export default Fieldlogin;