// pages/Main1.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Main1 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Main1</Text>
      <Button
        title="Go to Main1_detail"
        onPress={() => navigation.navigate('Main1_tab_stack_2')}
      />
    </View>
  );
};

export default Main1;
