import { createStore } from 'redux';
import roomApp from './reducers/reducers'

export const store = createStore(roomApp);