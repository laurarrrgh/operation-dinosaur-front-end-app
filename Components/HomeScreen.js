import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'native-base'

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is the HomePage</Text>
      <Button title='Go to Meds' block={true} onPress={()=>props.navigation.navigate('MedScreen')}>
        <Text style={{color: 'white'}}>Go to Meds</Text> 
        </Button>
        <Button title='Go to Diary' block={true} onPress={()=>props.navigation.navigate('DiaryScreen')}>
        <Text style={{color: 'white'}}>Go to Diary</Text> 
        </Button>
  </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default HomeScreen