
import * as React from 'react';
import { View,Text} from 'react-native';
import { createDrawerNavigator,DrawerItem} from '@react-navigation/drawer';

const Test = () => (
  <View>
    <Text>
      Hi
    </Text>
  </View>
  )

const Drawer =createDrawerNavigator();

export default function MyDrawer(){
  <Drawer.Navigator defaultStatus='open'>
  <DrawerItem label='Me' />
    <Drawer.Screen name='SignUp' options={{title:'Sign Up'}} component={<Test />} />
  </Drawer.Navigator>
}