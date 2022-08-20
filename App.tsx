import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View } from 'react-native';
import SnackBar from './components/SnackBar';
import AppBar from './components/AppBar';
import MainClock from './components/MainClock';
import StopWatch from './components/StopWatch';
//import SetAlarm from './components/SetAlarm';
import MyAlarm from './components/MyAlarm';
import {Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getHeaderTitle } from '@react-navigation/elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";



function SetAlarm({ navigation }) {
  const [isVisible,setVisibility] = React.useState<boolean>(false);
  const hideDatePicker = () => {
    setVisibility(false);
  }
  const handleConfirm = (date) => {
    
  }
  return (
    <View>
     <Button onPress={()=> setVisibility(!isVisible) } variant='contained' title='Set Alarm' />
     <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
    )
}

type ActionType = 'increment' | 'decrement'



const Stack = createNativeStackNavigator();

export default function App() {
  const [counter,setCounter] = React.useState(0);
  const Counter = (action:ActionType) => {
    if(action === 'increment') setCounter(counter +1);
    if(action === 'decrement') setCounter(counter -1);
  }
  return (
    <PaperProvider>
    <View style={styles.container}>
   
      <NavigationContainer>
     
        <Stack.Navigator>
          <Stack.Screen name='Clock' component={MainClock} options={{title:'Clock',header: ({navigation,route,options,back})=> {
          const title = getHeaderTitle(options,route.name);
            return <AppBar back={back} navigation={navigation} />
          } }} />
          <Stack.Screen name='MyAlarm' component={MyAlarm} options={{title:'Alarm',header: ({navigation,route,options,back})=> {
          const title = getHeaderTitle(options,route.name);
            return <AppBar back={back} navigation={navigation} />
          } }} />
          <Stack.Screen name='SetAlarm' component={SetAlarm} options={{title:'Set Alarm'}}/>
          <Stack.Screen name='StopWatch' component={StopWatch} options={{title:'StopWatch',header: ({navigation,route,options,back})=> {
          const title = getHeaderTitle(options,route.name);
            return <AppBar back={back} navigation={navigation} />
          } }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style={styles.statusBar} hidden={false} />
      <StatusBar style={styles.statusBar} hidden={false} />
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: '',
    //justifyContent: 'center',
  },
  statusBar: {
    color:'#fff'
  },
  header: {
    backgroundColor:'blue',
    width:'100%',
    position:'absolute',
    top:'0%',
    padding:'10px'
  }
});
