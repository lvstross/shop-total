import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from 'constants/Colors';
import useColorScheme from 'hooks/useColorScheme';
import ShopListsNavigator from 'screens/ShopLists/navigation';
import ShopTotalNavigator from 'screens/ShopTotal/navigations';
import InfoScreenNavigator from 'screens/InfoScreen/navigation';
import { BottomTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Shop Total"
      tabBarOptions={{ activeTintColor: Colors.Theme[colorScheme].tint }}>
      <BottomTab.Screen
        name="Lists"
        component={ShopListsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Shop Total"
        component={ShopTotalNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="shoppingcart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={InfoScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon  name="infocirlceo" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
}
