// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import BookList from '../pages/BookList';
import MoreBookInfo from '../components/MoreBookInfo';

const Stack = createStackNavigator();

function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: "Welcome", headerTitleStyle: { alignSelf: "center", fontFamily: "monospace"}, headerTintColor: '#F0F0FF', 
          headerStyle: { backgroundColor: '#34325E' } }} 
        />

        <Stack.Screen 
          name="BookList" 
          component={BookList} 
          options={{ title: "Books", headerTitleStyle: { alignSelf: "auto", fontFamily: "monospace"}, headerTintColor: '#FFF', 
          headerStyle: { backgroundColor: '#34325E' } }} 
        />

        <Stack.Screen 
          name="MoreBookInfo" 
          component={MoreBookInfo} 
          options={( { route }) => ({ 
            title: route.params.author, 
            headerTitleStyle: { alignSelf: "auto", fontFamily: "monospace"}, 
            headerTintColor: '#FFF', 
            headerStyle: { backgroundColor: '#34325E'}})}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;