import * as React from 'react';
import {View,FlatList,StyleSheet} from 'react-native';
import { Drawer,Text,Button,Switch} from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Audio } from 'expo-av';
import mySound from '../sounds/tone2.wav';
const styles = {
  time: {
    color:'blue',
    fontSize:'30pt',
  },
  title: {
    textAlign:'center',
    marginTop:'10%'
  },
  bottomView: {
    
  },
  recent: {
    padding:10,
    width:250
  },
  item:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    padding:20,
    marginLeft:5,
    marginRight:5,
    borderRadius:10,
    marginTop:5,
    marginDown:5,
  }
}

export default function MainClock({ navigation }){
  const [sound,setSound] = React.useState();
  const play = async () =>{
    const { sound } = await Audio.Sound.createAsync(mySound);
    await sound.playAsync();
    setSound(sound);
  }
  
  const [currentTime,setCurrentTime] = React.useState<string>('00:00:00');
  const [isSwitchOn,setSwitchOn] = React.useState<boolean>(false);
  const [countdownValue,setCountdown] = React.useState<string>('00:00');
  setInterval(()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    //setCurrentTime(``);
    var parseSec = '';
    var parseMin = '';
    var parseHour = '';
    if(seconds < 10) {
      parseSec = `0${seconds}`;
    } else {
      parseSec = seconds;
    }
    if(minutes < 10) {
      parseMin = `0${minutes}`;
    } else {
      parseMin = minutes;
    }
    if(hours < 10) {
      parseHour = `0${hours}`;
    } else {
      parseHour = hours;
    }
    setCurrentTime(`${parseHour}:${parseMin}:${parseSec}`);
  },200);
  const switchToggle = () => setSwitchOn(!isSwitchOn);

  const handleStopWatch = (date) => {
  
  var myCountdown = countdownValue;
  const x = setInterval(()=>{
    var countDownDate = new Date(date).getTime();
    let currentDate = new Date().getTime();
    let distance = countDownDate - currentDate;
    let hours = Math.floor(distance / (1000*60*60*24));
    let seconds = Math.floor((distance % (1000 * 60))/ 1000);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    setCountdown(`${hours}:${minutes}:${seconds}`);
    if((hours ===0 ) && (minutes === 0)) {
      setCountdown(`${seconds}`);
      
    }
    if((hours === 0) && (minutes === 0) && (seconds === 0) ) {
      //Nothing to output
      const ply = async () =>{
        await sound.play();
      }
      ply();
    }
  
  },200);
  return myCountdown;
  }
  
  return (
    
    <>
      <View style={{backgroundColor:'#fff',flex:0,padding:1,flexDirection:'row',justifyContent:'space-around'}}>
      <Text variant='labelLarge' style={{marginTop:15}}>
        Analog Clock
      </Text>
        <Switch style={{marginBottom:-3}} value={isSwitchOn} onValueChange={switchToggle} />
      </View>
      <Text variant='displaySmall' style={styles.title}>
      Current Time
      </Text>
      <Text style={{justifyContent:'center',textAlign:'center', marginTop:'5%'}} variant="displayLarge">{currentTime}</Text>
      <View style={styles.bottomView}>
        <Text variant='labelLarge'>
          Recent Activities
        

        </Text>
        <FlatList 
        data = {[{icon:'alarm',time:'12:50',title:'Alarm'},{icon:'alarm',time:'00:67',title:'Alarm'},{icon:'timer',time:'09:35',title:'Stop Watch',date:"August 18, 2022 11:20:25"}]}
        renderItem={({item}) => <View style={styles.item} >
        <View style={{disply:'flex',flexDirection:'row'}}>
        <Button icon={item.icon} />
        <Text variant='titleLarge' >{item.title}</Text>
        </View>
        { item.icon=== 'timer'? <Text variant='titleLarge'>{handleStopWatch(item.date)}</Text>:<Text variant='titleLarge' >{item.time}</Text>}
        
        </View>}
        />
      </View>
    </>
    
    )
}
