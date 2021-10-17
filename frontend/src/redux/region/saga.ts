import { all, call, put, takeLatest } from 'redux-saga/effects';

import notificationsModal from '../../components/common/modal/notifications-modal';

import IAction from './interfaces';
import services from './services';
import types from './types';

function* getCountries() {
    try {
        const { status, data } = yield call(services.countries);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_COUNTRIES_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        notificationsModal('error');
        yield put({ type: types.GET_COUNTRIES_ERROR });
    }
}

function* getCities({ payload }: IAction) {
    try {
        const { status, data } = yield call(services.cities, payload as string);
        if (status < 200 || status >= 300) throw new Error();
        yield put({ type: types.GET_CITIES_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        notificationsModal('error');
        yield put({ type: types.GET_CITIES_ERROR });
    }
}

export default function* region(): Generator {
    yield all([takeLatest(types.GET_COUNTRIES_START, getCountries), takeLatest(types.GET_CITIES_START, getCities)]);
}
