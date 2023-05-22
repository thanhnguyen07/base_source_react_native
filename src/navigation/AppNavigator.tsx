import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
// import {useSelector} from 'react-redux';
// import {getUserType} from 'src/redux/selectors';
// import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

const AppNaviagtor = () => {
    // const useType = useSelector(getUserType);

    // switch (useType) {
    //     case 'CUSTOMER':
    //         return (
    //             <NavigationContainer>
    //                 <Stack.Navigator screenOptions={{headerShown: false}}>
    //                     <Stack.Screen
    //                         name="CustomerStack"
    //                         component={CustomerStack}
    //                     />
    //                 </Stack.Navigator>
    //             </NavigationContainer>
    //         );
    // case 'PROVIDER':
    //     return (
    //         <NavigationContainer>
    //             <Stack.Navigator screenOptions={{headerShown: false}}>
    //                 <Stack.Screen
    //                     name="ProviderStack"
    //                     component={ProviderStack}
    //                 />
    //             </Stack.Navigator>
    //         </NavigationContainer>
    //     );
    // default:
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="HomeStack" component={HomeStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    // }
};

export default AppNaviagtor;
