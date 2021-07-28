import React from 'react';

import Home from './pages/Home';
import BookDetails from './pages/BookDetails';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes(){
    return(
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        title: 'Minhas Listas',
        headerStyle: {
          backgroundColor: '#413B89'
        },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
    </Stack.Navigator>
    )
}

