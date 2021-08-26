import axios from 'axios';
import * as AxiosLogger from 'axios-logger';
import { Dispatch } from 'redux';

import types from '../redux/types';

const interceptors = (dispatch: Dispatch): void => {
    axios.interceptors.request.use(AxiosLogger.requestLogger, error => Promise.reject(error));
    axios.interceptors.response.use(AxiosLogger.responseLogger, error => {
        console.log('process.env.NEXT_PUBLIC_HOST', process.env.NEXT_PUBLIC_HOST);

        if (error?.response?.status === 401) {
            delete axios.defaults.headers.common.Authorization;
            dispatch({ type: types.LOGOUT_END });
        }

        return Promise.reject(error);
    });
};

export default interceptors;
