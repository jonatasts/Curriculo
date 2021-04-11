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
  Alert,
  TouchableOpacity,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import profile from './assets/profile.png';
import logo from './assets/react-logo.png';
import styles from './Styles'

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

  function handleIconLink(option) {
    switch (option) {
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/jonatasts/');
        break;
      case 'chrome':
        Alert.alert('Meu Portfólio', 'https://jonatassantos.vercel.app/');
        break;
      case 'linkedin-square':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/jonatas-s-santos/');
        break;
    }

  }

  return (
    <SafeAreaView style={styles.page}>
      <View>
        <Image source={profile} style={styles.image} />

        <Text style={styles.name}>Jônatas Santos</Text>
        <Text style={styles.work}>React Native Developer</Text>
      </View>

      <View style={styles.icons}>
        <TouchableOpacity onPress={() => handleIconLink('github')}>
          <FontAwesomeIcon style={[styles.icon, styles.icon_github]} name="github" size={27} />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleIconLink('chrome')}>
          <FontAwesomeIcon style={styles.icon} name="chrome" size={23} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleIconLink('linkedin-square')}>
          <FontAwesomeIcon style={styles.icon} name="linkedin-square" size={23} />
        </TouchableOpacity>
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
