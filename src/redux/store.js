import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { persistStore } from 'redux-persist';

import persistedContactsReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
