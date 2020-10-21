// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import BookList from '../pages/BookList';
import MoreBookInfo from '../components/MoreBookInfo';
import RepoView from '../components/RepoView';

const Stack = createStackNavigator();

function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerTitleAlign: 'center', title: "Welcome", headerTitleStyle: { fontFamily: "monospace"}, headerTintColor: '#6159E6', 
          headerStyle: { backgroundColor: '#F0F0FF' } }} 
        />

        <Stack.Screen 
          name="BookList" 
          component={BookList} 
          options={{ headerTitleAlign: 'center', title: "Books", headerTitleStyle: { fontFamily: "monospace"}, headerTintColor: '#6159E6', 
          headerStyle: { backgroundColor: '#F0F0FF' } }} 
        />

        <Stack.Screen 
          name="MoreBookInfo" 
          component={MoreBookInfo} 
          options={({ route }: any) => ({ 
            headerTitleAlign: 'center',
            title: route.params.name, 
            headerTitleStyle: { fontFamily: "monospace"}, 
            headerTintColor: '#6159E6', 
            headerStyle: { backgroundColor: '#F0F0FF'}})}
        />

        <Stack.Screen 
          name="RepoView" 
          component={RepoView}
          options={{ headerTitleAlign: 'center', title: "Code", headerTitleStyle: { fontFamily: "monospace"}, headerTintColor: '#6159E6', 
          headerStyle: { backgroundColor: '#F0F0FF' } }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;