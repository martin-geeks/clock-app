import * as React from 'react';
import {View,Text,Button} from 'react-native-paper';
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
     <Button variant='contained' title='Set Alarm' />
     <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
    )
}
export default function d(){
  return (
    <View>
    </View>
    )
}

export default d;