// 多标签页管理

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface TabState {
	curTab: [] // 当前打开的标签页列表
	currentTab?: string | undefined // 当前激活的标签页
	status?: 'idle' | 'loading'
	reloadPath: string // 需要刷新的tab路径
}

const initialState: TabState = {
	curTab: [],
	reloadPath: 'null', // 需要刷新的tab路径
}

export const tabSlice = createSlice({
	name: 'tab',
	initialState,
	reducers: {
		setTabs: (state, action: PayloadAction<[]>) => {
			state.curTab = action.payload
		},
		setCurrentTab: (state, action) => {
			state.currentTab = action.payload
		},
		setReloadPath: (state, action) => {
			state.reloadPath = action.payload
		},
	},
})

export const selectTabs = (state: { tab: TabState }) => state.tab.curTab
export const selectCurrentTab = (state: { tab: TabState }) => state.tab.currentTab
export const selectReloadPath = (state: { tab: TabState }) => state.tab.reloadPath

export default tabSlice.reducer
