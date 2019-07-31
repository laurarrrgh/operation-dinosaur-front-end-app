import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MedScreen = ({
    params,
}) => (
    <View style={styles.meds}>
        <Text>Geoff did not log that he took a mountain of cocain</Text>
    </View>
);

const styles = StyleSheet.create({
    meds: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'space-evenly',
    },
  });

export default MedScreen;
