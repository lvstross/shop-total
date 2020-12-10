import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ShopTotalScreen from '../screens/ShopTotal/ShopTotalScreen';
import InfoScreen from '../screens/InfoScreen';
import { BottomTabParamList, ShopTotalParamList, InfoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Shop Total"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Shop Total"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="shoppingcart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={TabTwoNavigator}
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

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ShopTotalStack = createStackNavigator<ShopTotalParamList>();

function TabOneNavigator() {
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

function TabTwoNavigator() {
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
