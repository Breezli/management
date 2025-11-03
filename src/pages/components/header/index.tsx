// components/common/header/Header.tsx
import React from 'react'
import { Layout, Menu, Dropdown } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useAppDispatch } from '@/store/redux-hooks'
import { setUserInfo } from '@/store/slicers/userSlice'
import { setCollapsed as setCollapsedGlobal } from '@/store/slicers/appSlice'
import { useNavigate } from 'react-router-dom' // 替代 useHistory

import './Header.module.less'

const { Header } = Layout

const HeaderView: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [collapsed, setCollapsed] = React.useState(false)

	// 切换菜单收起状态
	const toggle = () => {
		const newCollapsed = !collapsed
		setCollapsed(newCollapsed)
		dispatch(setCollapsedGlobal(newCollapsed))
	}

	// 退出登录
	const handleLogout = () => {
		dispatch(setUserInfo({}))
		navigate('/login')
	}

	const menu = (
		<Menu>
			<Menu.Item onClick={handleLogout} danger>
				退出登录
			</Menu.Item>
		</Menu>
	)

	return (
		<Header
			className='header'
			style={{
				background: '#fff',
				padding: '0 16px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
			{/* 左侧：折叠按钮 */}
			<div
				className='toggle-menu'
				style={{ fontSize: '18px', cursor: 'pointer' }}
				onClick={toggle}>
				{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</div>

			{/* 右侧：用户下拉菜单 */}
			<Dropdown overlay={menu} placement='bottomRight'>
				<span style={{ cursor: 'pointer' }}>
					<span style={{ marginRight: '8px' }}>Admin</span>
					<span
						style={{
							display: 'inline-flex',
							width: '32px',
							height: '32px',
							borderRadius: '50%',
							backgroundColor: '#1890ff',
							color: '#fff',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						A
					</span>
				</span>
			</Dropdown>
		</Header>
	)
}

export default HeaderView
