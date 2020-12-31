// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookList from '../pages/BookList';
import MoreBookInfo from '../components/MoreBookInfo';
import RepoView from '../components/RepoView';

const Stack = createStackNavigator();

function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="BookList" 
          component={BookList}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;