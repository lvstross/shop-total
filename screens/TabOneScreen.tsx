import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import styled from 'styled-components/native';

const TextView = styled(Text)`
  color: red;
`;

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TextView style={styles.title}>Tab One</TextView>
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
    fontWeight: 'bold',
  }
});
