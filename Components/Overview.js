import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const OverviewScreen = ({
    params,
}) => (
    <View style={styles.overview}>
        <Text>Overview. Coooool.</Text>
    </View>
);

const styles = StyleSheet.create({
    overview: {
      flex: 1,
      textAlign: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });

export default OverviewScreen;