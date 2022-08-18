import * as React from 'react';
import {Text,View,Button} from 'react-native';
import {SetAlarm}  from './SetAlarm';
export default function MyAlarm({ navigation }){
  return (
    <View>
      <Button title='Set Alarm' onPress={() => navigation.navigate('SetAlarm')}/>
    <Text>
      My Alarm
    </Text>
    </View>
    );
}