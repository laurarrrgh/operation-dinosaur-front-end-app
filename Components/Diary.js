import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DiaryScreen = ({
    params,
}) => (
    <View style={styles.diary}>
        <Text>Dear Diary... Git Gud</Text>
    </View>
);

const styles = StyleSheet.create({
    diary: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });

export default DiaryScreen;
