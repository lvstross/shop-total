import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShopTotalScreen from './ShopTotalScreen';
import Colors from 'constants/Colors';
import useColorScheme from 'hooks/useColorScheme';

type ShopTotalParamList = {
    ShopTotalScreen: undefined;
};

const ShopTotalStack = createStackNavigator<ShopTotalParamList>();

export default function ShopTotalNavigator() {
  const theme = useColorScheme();
  return (
    <ShopTotalStack.Navigator>
      <ShopTotalStack.Screen
        name="ShopTotalScreen"
        component={ShopTotalScreen}
        options={{
          title: 'Shop Total',
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
    </ShopTotalStack.Navigator>
  );
}