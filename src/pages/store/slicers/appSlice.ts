// UI 布局状态

import { createSlice } from '@reduxjs/toolkit'

export interface AppState {
	theme: string // 主题
	collapsed: boolean // 菜单收起
	menuMode: 'horizontal' | 'vertical' // 菜单模式
}

const initialState: AppState = {
	theme: 'dark',
	collapsed: false,
	menuMode: 'horizontal',
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setTheme(state, action) {
			state.theme = action.payload
		},
		setCollapsed(state, action) {
			state.collapsed = action.payload
		},
		setMenuMode(state, action) {
			state.menuMode = action.payload
		},
	},
})

export const selectTheme = (state: { app: AppState }) => state.app.theme
export const selectCollapsed = (state: { app: AppState }) => state.app.collapsed
export const selectMenuMode = (state: { app: AppState }) => state.app.menuMode

export default appSlice.reducer
