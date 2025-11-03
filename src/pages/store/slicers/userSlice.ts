// 用户信息管理

import { createSlice } from '@reduxjs/toolkit'
import type { UserInfo } from '../../../app_models/user'

export interface UserState {
	UserInfo: UserInfo & { is_oidc_user: boolean }
}

const initialState: UserState = {
	UserInfo: {
		username: '',
		displayName: '',
		permission: [],
		token: '',
		is_oidc_user: false,
	},
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			state.UserInfo = action.payload
		},
	},
})

export const { setUserInfo } = userSlice.actions

export const selectUserInfo = (state: { user: UserState }) =>
	state.user.UserInfo

export default userSlice.reducer
