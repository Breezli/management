import {
	configureStore,
	combineReducers,
	type ThunkAction,
	type Action,
} from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'

import tabReducer from './slicers/tabSlice'
import userReducer from './slicers/userSlice'
import appReducer from './slicers/appSlice'
import persistStore from 'redux-persist/es/persistStore'

const rootReducer = combineReducers({
	// 合并总状态 ({ tab: {}, user: {}, app: {} })
	tab: tabReducer,
	user: userReducer,
	app: appReducer,
})

const persistConfig = {
	// 配置持久化
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // 支持自动化恢复上次状态

export const store = configureStore({
	reducer: persistedReducer, //使用包装后的 reducer
	devTools: true, //开启调试
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
