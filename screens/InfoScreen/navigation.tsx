import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InfoScreen from './InfoScreen';

type InfoScreenParamList = {
    InfoScreen: undefined;
};

const InfoScreenStack = createStackNavigator<InfoScreenParamList>();

export default function InfoScreenNavigator() {
  return (
    <InfoScreenStack.Navigator>
      <InfoScreenStack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{ headerTitle: 'Info' }}
      />
    </InfoScreenStack.Navigator>
  );
}