import React from 'react';
import {View, StyleSheet, Button, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const App = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * DEVICES_WIDTH}],
    };
  });

  const _onPress = () => (offset.value = withSpring(Math.random()));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={_onPress} title="Move" />
    </View>
  );
};

export default App;

const {width: DEVICES_WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#0000ff90',
  },
});
