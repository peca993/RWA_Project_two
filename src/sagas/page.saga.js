import { getPages as getPagess }  from '../services/pages.service';
import {call, put, takeLatest} from 'redux-saga/effects'
import { getPages,getPagesSuccess } from '../actions/index';
import * as actions from '../actions'

export function* sagaGetPages(action) {

    const pages = yield call(getPagess)
    yield put(getPagesSuccess(pages))
}


export function* watchGetPages() {
    yield takeLatest(actions.GET_PAGES_SUCCESS, sagaGetPages)
}
