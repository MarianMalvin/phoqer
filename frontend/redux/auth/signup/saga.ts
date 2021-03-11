import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../assets/api';
import { modal } from '../../../components/Common/Modal';
import notifications from '../../../components/Common/Notifications';
import { ISignup } from '../../../interfaces';
import types from '../../types';
import IAction from './interfaces';

function* signupUser({ payload }: IAction) {
    try {
        const { status, data } = yield call(api.auth.signup, payload as ISignup);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.SIGNUP_SUCCESS, payload: data });
        modal.close();
        notifications('success', 'We have sent a verification link on your email, please open it to complete registration');
    } catch (error) {
        // TODO add error text
        notifications('error', '');
        if (error?.response?.status === 401) return;
        yield put({ type: types.SIGNUP_ERROR });
    }
}

export default function* signup(): Generator {
    yield takeLatest(types.SIGNUP_START, signupUser);
}