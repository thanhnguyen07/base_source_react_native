import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {HomeScreen} from 'src/features/home';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};
export default HomeStack;
