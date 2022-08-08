import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

import humanReducer from './reducers/human';

const rootReducer = combineReducers({
  humans: humanReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
