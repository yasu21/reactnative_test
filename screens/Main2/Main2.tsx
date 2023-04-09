// pages/Main1.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Main2 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Main2</Text>
      <Button
        title="Go to Main2_detail"
        onPress={() => navigation.navigate('Main2_tab_stack_2')}
      />
    </View>
  );
};

export default Main2;
