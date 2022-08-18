import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyComponent = (props) => (
   <Appbar.Header style={{alignItems:'center', justifyContent:'space-between'}}>
    {/*<Appbar.BackAction onPress={() => {} />}*/}
     {props.back? <Appbar.Action icon='arrow-left' onPress={()=> props.navigation.goBack()}  />: ''}
     
     <Appbar.Action icon="clock" onPress={() => {}} />
     <Appbar.Action icon="bell" onPress={() => {}} />
     <Appbar.Action icon="alarm" onPress={() => props.navigation.navigate('MyAlarm')} />
     <Appbar.Action icon="timer" onPress={() =>props.navigation.navigate('MyTimer')} />
      
      </Appbar.Header> );
  export default MyComponent;
