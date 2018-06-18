import {all, fork} from 'redux-saga/effects'
import { watchGetPages } from './page.saga'
export default function* root() {
    yield all([
        fork(watchGetPages)
    ])
}