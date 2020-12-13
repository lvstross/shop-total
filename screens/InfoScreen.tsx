import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'components/Themed';
import AppInfo from '../app.json';

export default function TabTwoScreen() {
  const AppVersion = AppInfo.expo.version;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App: Shop Total</Text>
      <Text style={styles.title}>Version: v{AppVersion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
});
