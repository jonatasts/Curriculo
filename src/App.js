import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import profile from './assets/profile.png';

const App = () => {
  return (
    <>
      <SafeAreaView style={style.page}>
        <View>
          <Image source={profile} style={style.image} />

          <Text style={style.name}>Jônatas Santos</Text>
          <Text style={style.work}>React Native Developer</Text>
        </View>
        <View>
          <Icon style={style.icon} name="GitHub" />
          <Icon style={style.icon} name="Portfolio" />
          <Icon style={style.icon} name="Linkedin" />
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#151515',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 125,
  },

  icon: {
    color: '#FFF',
    textAlign: 'center',
  },

  name: {
    color: '#FFF',
    fontSize: 26,
    marginTop: 11,
    textAlign: 'center',
  },

  work: {
    color: '#FFF',
    marginBottom: 11,
    textAlign: 'center',
  }

});

export default App;
