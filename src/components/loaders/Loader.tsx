import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Loader: React.FC = () => {
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: '#00000011',
          alignItems: 'center',
          justifyContent: 'center',
        },
        StyleSheet.absoluteFill,
      ]}
    >
      <LottieView
        source={require('../../assets/lottie/loader.json')}
        autoPlay
        style={{ width: '80%' }}
        loop
      />
    </View>
  );
};

export default Loader;
