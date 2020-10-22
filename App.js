import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native';

export default function App() {
    return (
      <WebView
        source={{uri: 'https://delirio.com.br'}}
        style={{marginTop: 20}}
      />
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
