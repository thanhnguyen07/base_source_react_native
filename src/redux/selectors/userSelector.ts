import {createSelector} from 'reselect';
import {RootState} from '../index';

const getUser = createSelector(
    (state: RootState) => state,
    state => state.user,
);

export {getUser};
