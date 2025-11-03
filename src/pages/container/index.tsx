import React from 'react'
import { useLocation } from 'react-router-dom' // 👈 替换 useHistory
// import MenuView from '@/components/menu'
import Header from '@/pages/components/header'
// import TabPanes from '@/components/tabPanes'
import { BackTop, Layout } from 'antd'

import styles from './container.module.less'

const Home: React.FC = () => {
	const { pathname } = useLocation()

	if (pathname === '/login') {
		return null
	}

	return (
		<Layout className={styles.container}>
			<Layout className={styles.content}>
				<Header />
				<Layout.Content>Home 页面内容</Layout.Content>
			</Layout>
			<BackTop visibilityHeight={1080} />
		</Layout>
	)
}

export default Home
