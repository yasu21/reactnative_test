// navigation/DrawerNavigator.tsx
import React,{useState} from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import Sub1 from '../screens/Sub1';
import Sub2 from '../screens/Sub2';
import { CommonActions } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';
import { useRecoilValue } from 'recoil'; // Import RecoilRoot
import { headerShownState } from '../screens/state/headerShownState';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const resetStack = (name: string) => {
    props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name }] }));
  };
  const onHomePressed = () => {
    console.log("Home pressed");
    resetStack('Home_Drawer')
  };

  return (
    <>
      <DrawerItem label="Home" onPress={onHomePressed}/>
      <DrawerItem label="Sub1" onPress={() => props.navigation.navigate('Sub1')} />
      <DrawerItem label="Sub2" onPress={() => props.navigation.navigate('Sub2')} />
    </>
  );
};

const DrawerNavigator = (props:DrawerContentComponentProps) => {
  const headerShown = useRecoilValue(headerShownState);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home_Drawer"
        options={{
          headerTitle: 'Home',
          headerShown: headerShown
        }}
      >
        {() => <BottomTabNavigator />}
      </Drawer.Screen>
      <Drawer.Screen name="Sub1" component={Sub1} />
      <Drawer.Screen name="Sub2" component={Sub2} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
