import Toast from 'react-native-toast-message';

const showToast = ({msg, type}: {msg: string; type: string}) => {
    Toast.show({
        type: type,
        text1: msg,
    });
};

const isObjectEmpty = (object: Object) => {
    return object && Object.keys(object).length === 0;
};

const isArrayEmpty = (array: Array<any>) => {
    return array && array.length === 0;
};

export default {showToast, isObjectEmpty, isArrayEmpty};
