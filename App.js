
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import ProgressChart from './screens/ProgressChart';
import MotivationReminders from './components/MotivationReminders';
import WeeklyWorkoutPlanner from './components/WeeklyWorkoutPlanner';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MotivationReminders />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ProgressChart" component={ProgressChart} />
        <Stack.Screen name="Planner" component={WeeklyWorkoutPlanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
