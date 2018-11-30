import { createStore } from 'redux';
import roomApp from './reducers/reducers';

const store = createStore(roomApp);

export default store;
