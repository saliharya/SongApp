import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesListScreen from '../screens/FavoritesListScreen';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Favorites" component={FavoritesListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
