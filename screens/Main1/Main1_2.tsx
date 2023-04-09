import React,{useLayoutEffect} from 'react';
import { View, Text } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { headerShownState } from '../state/headerShownState';

const Main1_2 = () => {
  const setHeaderShown = useSetRecoilState(headerShownState);
  useLayoutEffect(() => {
    setHeaderShown(false); // Hide the header

    return () => {
      setHeaderShown(true); // Show the header when the component is unmounted
    };
  }, []); // Remove setHeaderShown from the dependency array
  return (
    <View>
      <Text>Main1_detail</Text>
    </View>
  );
};

export default Main1_2;
