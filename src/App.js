import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Easing,
  Animated,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import profile from './assets/profile.png';
import logo from './assets/react-logo.png';
import styles from './styles'

const App = () => {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  return (
    <SafeAreaView style={styles.page}>
      <View>
        <Image source={profile} style={styles.image} />

        <Text style={styles.name}>Jônatas Santos</Text>
        <Text style={styles.work}>React Native Developer</Text>
      </View>

      <View style={styles.icons}>
        <FontAwesomeIcon style={[styles.icon, styles.icon_github]} name="github" size={27} />
        <FontAwesomeIcon style={styles.icon} name="chrome" size={23} />
        <FontAwesomeIcon style={styles.icon} name="linkedin-square" size={23} />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.Image
          style={{ height: 220, width: 220, transform: [{ rotate: spin }] }}
          source={logo}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
