import React from 'react';
import {TextInput} from 'react-native';
import {black} from './Constants';

const Fieldsignup = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100, 
        color: black, 
        paddingHorizontal: 10, 
        width: '78%',
        backgroundColor: '#dcdcdc', 
        marginVertical: 10
        }}
      placeholderTextColor={black}></TextInput>
  );
};

export default Fieldsignup;