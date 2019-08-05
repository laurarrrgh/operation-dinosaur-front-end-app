import { Button } from 'native-base';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HandshakeNavigateButton = props => {
  return (
    <Button
      style={styles.container}
      title='pair alexa'
      onPress={() => {
        props.navigation.navigate('Handshake');
      }}
    >
      <Text>Pair Alexa</Text>
    </Button>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

export default HandshakeNavigateButton;
