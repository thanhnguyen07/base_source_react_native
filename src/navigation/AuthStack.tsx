import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {SplashScreen, SignInScreen, SignUpScreen} from 'src/features/auth';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
    );
};
export default AuthStack;
