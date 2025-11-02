import type { FC } from "react"

export interface MenuRoute {
	path: string
	name: string // 菜单项文字
	key: string // 菜单选中、鉴权
	icon: React.ComponentType //菜单图标 
	component?: FC
	exact?: boolean // 精确匹配路径
	hideInMenu?: boolean // 在菜单中隐藏
	type?: 'subMenu' // 子菜单
	routes?: MenuRoute[] // 子菜单列表
}