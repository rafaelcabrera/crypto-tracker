import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <StackNavigator>
            <Stack.Screen name ="Coins" compo />
        </StackNavigator>
    );
}
export CoinsStack;