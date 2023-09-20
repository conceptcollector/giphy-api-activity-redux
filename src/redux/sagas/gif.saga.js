import { all } from 'redux-saga/effects';
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchGif() {
    const gif = yield axios.get('/api/random');
    yield put({type: 'SET_GIF', payload: gif.data});
}

export default function* gifSaga {
    yield takeLatest('FETCH_GIF', fetchGif);
}