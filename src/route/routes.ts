// route/routes.ts
import {
	HomeOutlined,
	UsergroupAddOutlined,
	UserOutlined,
	UserSwitchOutlined,
} from '@ant-design/icons'
import Home from '../pages/home'
import UserList from '../pages/user/list'
import UserEdit from '../pages/user/edit'
import Login from '../pages/login'

import type { MenuRoute } from './types'

const preDefinedRoutes: MenuRoute[] = [
	{
		path: '/',
		name: '首页',
		key: 'home',
		exact: true,
		icon: HomeOutlined,
		component: Home,
	},
	{
		path: '/user',
		name: '用户管理',
		key: 'user',
		type: 'subMenu',
		icon: UserOutlined,
		routes: [
			{
				path: '/user/list',
				name: '用户列表',
				key: 'user:list',
				exact: true,
				component: UserList,
				icon: UserOutlined,
			},
			{
				path: '/user/list/add',
				name: '新增用户',
				key: 'user:list:add',
				exact: true,
				component: UserEdit,
				icon: UsergroupAddOutlined,
			},
			{
				path: '/user/list/edit',
				name: '编辑用户',
				key: 'user:list:edit',
				exact: true,
				component: UserEdit,
				icon: UserSwitchOutlined,
			},
		],
	},
]

// 公共路由
export const publicRoutes = [
	{
		path: '/login',
		component: Login,
		key: 'login',
	},
]

export const privateRoutes = preDefinedRoutes

export default preDefinedRoutes
