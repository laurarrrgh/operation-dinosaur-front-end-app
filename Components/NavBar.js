import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base'

function NavBar(props) {
  return (
    <View style={styles.container}>
      <Button title='Go to Meds' block={true} onPress={()=>props.navigation.navigate('MedScreen')}>
        <Text style={{color: 'white'}}>Go to Meds</Text> 
        </Button>
        <Button title='Go to Diary' block={true} onPress={()=>props.navigation.navigate('DiaryScreen')}>
        <Text style={{color: 'white'}}>Go to Diary</Text> 
        </Button>
        <Button title='Go to Events' block={true} onPress={()=>props.navigation.navigate('EventsScreen')}>
        <Text style={{color: 'white'}}>Go to Events</Text> 
        </Button>
        <Button title='Go to Overview' block={true} onPress={()=>props.navigation.navigate('OverviewScreen')}>
        <Text style={{color: 'white'}}>Go to Overview</Text> 
        </Button>
  </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default NavBar