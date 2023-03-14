import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btnlogin({bgColor, btnLabel, textColor, Press}) {
  return (
    
          <TouchableOpacity
          onPress={Press}
            style={{
              backgroundColor: bgColor,
              borderRadius: 100,
              alignItems: 'center',
              width: 300,
              paddingVertical: 15,
              marginVertical: 20,
            
        }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
    
  );
}