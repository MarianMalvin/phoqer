import profilesInit from '../init-state';
import types from '../types';

import IAction from './interfaces';

const loading = (state = profilesInit.loading, { type }: IAction): boolean => {
    switch (type) {
        case types.GET_PUBLIC_PROFILE_START:
            return true;

        case types.GET_PUBLIC_PROFILE_ERROR:
        case types.GET_PUBLIC_PROFILE_SUCCESS:
            return false;

        default:
            return state;
    }
};

export default loading;
