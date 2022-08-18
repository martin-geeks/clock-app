import * as React from 'react';
import { Snackbar } from 'react-native-paper';

interface PropsType {
  state: boolean;
  message: string;
}

export default function SnackBar(props: PropsType){
  
  return (
    <Snackbar 
    visible={props.state}
    
    >
      {props.message}
    </Snackbar>
    )
}