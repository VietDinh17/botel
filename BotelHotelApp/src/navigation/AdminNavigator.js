import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Promo from '../screens/Promo';
import Reports from '../screens/Reports';
import Reservation from '../screens/Reservation';
import Production from '../screens/Production';

const ProductionStack = createStackNavigator({
    Production: Production,
});

ProductionStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ReservationStack = createStackNavigator({
    Reservation: Reservation,
});

ReservationStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const PromoStack = createStackNavigator({
  Promo: Promo,
});

PromoStack.navigationOptions = {
  tabBarLabel: 'Promo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const ReportStack = createStackNavigator({
    Reports: Reports,
  });
  
ReportStack.navigationOptions = {
    tabBarLabel: 'Promo',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    ),
  };

const tabNavigator = createBottomTabNavigator({
  ProductionStack,
  ReservationStack,
  ReportStack,
  PromoStack,
});

export default tabNavigator;
