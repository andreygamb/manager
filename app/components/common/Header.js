import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  view: {
    justifyContent: 'center', // Vertical direction (flex-start, flex-end, center)
    alignItems: 'center', // Horizontal direction (flex-start, flex-end, center)
    height: 60,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    elevation: 4,
    position: 'relative',
  },
  text: {
    fontSize: 20
  }
}

export { Header };
