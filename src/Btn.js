import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <View>
          <TouchableOpacity
          onPress={Press}
            style={{
             backgroundColor: bgColor,
             borderRadius: 100,
             alignItems: 'center',
             width: 280,
             paddingVertical: 20,
             marginHorizontal:50,
             marginTop:200
        }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
    </View>
    
    
  );
}