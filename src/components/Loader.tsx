import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from 'src/styles';

const Loader = ({loading}: {loading: boolean}) => {
    return loading ? (
        <View style={[styles.flex1, styles.center]}>
            <ActivityIndicator size="large" />
        </View>
    ) : null;
};

export default Loader;
