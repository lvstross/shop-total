import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from 'constants/Colors';
import useColorScheme from 'hooks/useColorScheme';
import ShopListsScreen from 'screens/ShopLists/ShopListsScreen';
import ShopTotalScreen from 'screens/ShopTotal/ShopTotalScreen';
import InfoScreen from 'screens/InfoScreen';
import { BottomTabParamList, ShopListsParamLists, ShopTotalParamList, InfoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Shop Total"
      tabBarOptions={{ activeTintColor: Colors.Theme[colorScheme].tint }}>
      <BottomTab.Screen
        name="Lists"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Shop Total"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="shoppingcart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={TabThreeNavigator}
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

const ShopListsStack = createStackNavigator<ShopListsParamLists>();

function TabOneNavigator() {
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

const ShopTotalStack = createStackNavigator<ShopTotalParamList>();

function TabTwoNavigator() {
  return (
    <ShopTotalStack.Navigator>
      <ShopTotalStack.Screen
        name="ShopTotalScreen"
        component={ShopTotalScreen}
        options={{ headerTitle: 'Shop Total' }}
      />
    </ShopTotalStack.Navigator>
  );
}

const InfoStack = createStackNavigator<InfoParamList>();

function TabThreeNavigator() {
  return (
    <InfoStack.Navigator>
      <InfoStack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{ headerTitle: 'Info' }}
      />
    </InfoStack.Navigator>
  );
}
