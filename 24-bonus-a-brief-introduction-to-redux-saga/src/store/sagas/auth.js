import { put, delay, call } from 'redux-saga/effects'
import * as actions from '../actions/index'
import axios from 'axios'

export function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], 'token')
  yield call([localStorage, 'removeItem'], 'expirationDate')
  yield call([localStorage, 'removeItem'], 'userId')
  yield put(actions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime)
  yield put(actions.logout())
}

export function* authUserSaga(action) {
  yield put(actions.authStart())
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  }
  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpN1-mzI5ViRkvYVJ38PKbBkOSDr6y-Ng'
  if (!action.isSignup) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpN1-mzI5ViRkvYVJ38PKbBkOSDr6y-Ng'
  }
  try {
    const response = yield axios.post(url, authData)
    const expirationDate = yield new Date(new Date().getTime () + response.data.expiresIn * 1000)
    yield localStorage.setItem('token', response.data.idToken)
    yield localStorage.setItem('expirationDate', expirationDate)
    yield localStorage.setItem('userId', response.data.localId)
    yield put(actions.authSuccess(response.data.idToken, response.data.localId))
    yield put(actions.checkAuthTimeout(response.data.expiresIn))
  } catch (error){
    put(actions.authFail(error.response.data.error.message))
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token')
  if (!token) {
    yield put(actions.logout())
  } else {
    const expirationDate = yield new Date(localStorage.getItem('expirationDate'))
    if (expirationDate <= new Date()){
      yield put(actions.logout())
    } else {
      const userId = yield localStorage.getItem('userId')
      put(actions.authSuccess(token, userId))
      put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
    }
  }
}
