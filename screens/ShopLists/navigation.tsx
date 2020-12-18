import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from 'constants/Colors';
import useColorScheme from 'hooks/useColorScheme';

import ShopListsScreen from './ShopListsScreen';

type ShopListsParamList = {
    ShopListsScreen: undefined;
};

const ShopListsStack = createStackNavigator<ShopListsParamList>();

export default function ShopListsNavigator() {
  const theme = useColorScheme();
  return (
    <ShopListsStack.Navigator>
      <ShopListsStack.Screen
        name="ShopListsScreen"
        component={ShopListsScreen}
        options={{
          title: 'Shop Lists',
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: Colors.Theme[theme].background,
          },
          headerTintColor:  Colors.Theme[theme].text,
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: 'bold',
          },
        }}
      />
    </ShopListsStack.Navigator>
  );
}