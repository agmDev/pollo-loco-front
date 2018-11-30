import { takeEvery } from 'redux-saga/effects';
import * as types from '../Constants/Actiontypes';

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    const cp = action;
    cp.author = params.username;
    params.socket.send(JSON.stringify(cp));
  });
};

export default handleNewMessage;
