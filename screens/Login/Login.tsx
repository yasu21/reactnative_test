import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Button title="ログイン" onPress={handleLogin} />
    </View>
  );
}
