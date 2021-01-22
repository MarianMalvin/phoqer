import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../assets/api';
import types from '../types';

function* getCategories() {
    try {
        const { status, data } = yield call(api.categories.get);
        if (status < 200 || status >= 300) throw new Error();
        console.log({ res: data });
        yield put({ type: types.GET_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        if (error?.response?.status === 401) return;
        yield put({ type: types.GET_CATEGORIES_ERROR });
    }
}

export default function* categories(): Generator {
    yield takeLatest(types.GET_CATEGORIES_START, getCategories);
}
