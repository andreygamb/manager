import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { button, text } = styles;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={button}
    >
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Button };
