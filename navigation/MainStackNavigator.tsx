// src/navigators/MainStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main1 from '../screens/Main1/Main1';
import Main1_2 from '../screens/Main1/Main1_2';
import Main2 from '../screens/Main2/Main2';
import Main2_2 from '../screens/Main2/Main2_2';
import { useRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

const screens = [
  { name: 'Main1_tab_stack', component: Main1, isShowHeader:false },
  { name: 'Main1_tab_stack_2', component: Main1_2, isShowHeader:true,title:'main1_detail' },
  { name: 'Main2_tab_stack', component: Main2, isShowHeader:false },
  { name: 'Main2_tab_stack_2', component: Main2_2, isShowHeader:true,title:'main2_detail' }
];

const MainStackNavigator = () => {
  const route = useRoute();
  const filteredScreens = screens.filter((screen) =>screen.name.includes(route.name));
  return (
    <Stack.Navigator>
      {filteredScreens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          options={{
            headerTitle: screen.title,
            headerShown: screen.isShowHeader
          }}
        >
          {() => <screen.component />}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
