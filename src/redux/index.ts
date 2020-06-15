import { createStore, combineReducers, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from '../models';  
import { listReducer } from './list';
import { ListAction } from '../redux/list/actions';

export const rootReducer = combineReducers({
  list: listReducer,
});
type RootAction = ListAction;

const persistConfig = {
  key: 'list',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store: Store<RootState, any> = createStore(
  persistedReducer,
  composeWithDevTools(),
); // Action are recast as "any" for the sake of middleware and devtools
export const persistor = persistStore(store);

/* Boilerplate for Redux-TypeScript for easy type detection */
/* Allows for flexible payloads without omitting type checking */
/* This allows for detection of return type */
export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}
