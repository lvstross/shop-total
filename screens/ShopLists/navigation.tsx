import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShopListsScreen from './ShopListsScreen';

type ShopListsParamList = {
    ShopListsScreen: undefined;
};

const ShopListsStack = createStackNavigator<ShopListsParamList>();

export default function ShopListsNavigator() {
  return (
    <ShopListsStack.Navigator>
      <ShopListsStack.Screen
        name="ShopListsScreen"
        component={ShopListsScreen}
        options={{ headerTitle: 'Shop Lists' }}
      />
    </ShopListsStack.Navigator>
  );
}