import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MealsScreen from '../screens/MealsScreen';
import PlanScreen from '../screens/PlanScreen';
import GroceryScreen from '../screens/GroceryScreen';
import ExploreScreen from '../screens/ExploreScreen';

const Meals = createStackNavigator({
  Home: MealsScreen,
});

Meals.navigationOptions = {
  tabBarLabel: 'Meals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-restaurant'
    />
  ),
};

const Plan = createStackNavigator({
  Plan: PlanScreen,
});

Plan.navigationOptions = {
  tabBarLabel: 'Plan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-calendar'
    />
  ),
};

const Groceries = createStackNavigator({
  Grocery: GroceryScreen,
});

Groceries.navigationOptions = {
  tabBarLabel: 'Groceries',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-cart'
    />
  ),
};

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen,
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-search'
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: ExploreScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  Meals,
  Plan,
  Groceries,
  ExploreStack,
  SettingsStack,
});
