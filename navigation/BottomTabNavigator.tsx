// navigators/BottomTabNavigator.tsx
import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStackNavigator from './MainStackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation();
  const resetStack = useCallback((name: string) => {
    navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name }] }));
  }, [navigation]);

  const tabs = [
    {route:'Main1_tab',label:'Main1'},
    {route:'Main2_tab',label:'Main2'}
  ];
  return (
    <BottomTab.Navigator>
      {tabs.map((tab)=>(
        <BottomTab.Screen
          name={tab.route}
          key={tab.route}
          options={{
            headerShown: false,
            tabBarLabel:tab.label
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault(); // Prevent default tab press action
              resetStack(tab.route)
            }
          })}
        >
          {() => <MainStackNavigator />}
        </BottomTab.Screen>
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
