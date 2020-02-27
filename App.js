/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


 
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
export const $green = '#61A60E';
export const $grey = '#DADADA';
export const $borderGrey = '#D8D8D8';
export const $darkGreen = '#005032';
export const $darkGreen2 = '#0A3823';
export const $red = '#D0021B';
export const $black = '#323643';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const theme = {
  Button: {
    titleStyle: {
      fontFamily: 'Montserrat-Regular', 
      color: 'white'
    },
    containerStyle: {
      backgroundColor: $green,
      width: '100%',
      height: 54,
      borderRadius: 12,
      justifyContent: 'center'
    }
  },
};


import { Button, ThemeProvider } from 'react-native-elements'

const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Button
          title="Outline button"
          type="outline"
        />
      </View>
   </ThemeProvider>
  );
};



export default App;
