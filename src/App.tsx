import React from 'react';
import Toast from 'react-native-toast-message';
import AppNaviagtor from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import {store} from 'src/redux';

const App = () => {
    return (
        <Provider store={store}>
            {__DEV__ ? <FlipperAsyncStorage /> : null}
            <AppNaviagtor />
            <Toast />
        </Provider>
    );
};
export default App;
