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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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
        <View style={style.icons}>
          <FontAwesomeIcon style={[style.icon, style.icon_github]} name="github" size={27} />
          <FontAwesomeIcon style={style.icon} name="chrome" size={23} />
          <FontAwesomeIcon style={style.icon} name="linkedin-square" size={23} />
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#22272E',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  image: {
    marginTop: 120,
    width: 190,
    height: 190,
    borderRadius: 125,
    marginBottom: 12,
  },

  icon: {
    color: '#FFF',
    textAlign: 'center',
    marginHorizontal: 12,
    marginTop: 10,
  },

  icon_github: {
    marginTop: 8,
  },

  icons: {
    flexDirection: 'row',
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
