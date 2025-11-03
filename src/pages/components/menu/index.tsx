// // components/common/menu/Menu.module.tsx
// import React, { FC, useEffect, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Layout, Menu } from 'antd'
// import MyIconFont from '@/components/common/myIconfont'

// import logo from '@/assets/img/logo.png'
// import menus from '@/route/routes' // 假设 routes 是 [{ key, name, path, iconfont }]
// // import { getKeyName } from '@/assets/js/publicFunc'
// import { useAppSelector } from '@/store/redux-hooks'
// import { selectCollapsed } from '@/store/slicers/appSlice'

// import styles from './Menu.module.less'

// const { Sider } = Layout

// // 只保留一级菜单，且不是 hidden 的
// const flatMenus = menus.filter((item) => item.hideInMenu !== true)

// const MenuView: FC = () => {
//   const collapsed = useAppSelector(selectCollapsed)
//   const { pathname } = useLocation()
//   const [selectedKey, setSelectedKey] = useState('home')

//   // 根据路径设置当前选中的菜单
//   useEffect(() => {
//     // const { tabKey } = getKeyName(pathname)
//     // setSelectedKey(tabKey || 'home')
//   }, [pathname])

//   // 渲染菜单项
//   const renderMenuItems = () => {
//     return flatMenus.map((item) => {
//       if (item.hideInMenu) return null
//       return (
//         <Menu.Item key={item.key} title={item.name}>
//           <Link to={item.path}>
//             {item.iconfont && <MyIconFont type={item.iconfont} />}
//             <span>{item.name}</span>
//           </Link>
//         </Menu.Item>
//       )
//     })
//   }

//   return (
//     <Sider
//       collapsed={collapsed}
//       width={220}
//       style={{
//         height: '100vh',
//         position: 'fixed',
//         left: 0,
//         overflow: 'auto'
//       }}
//     >
//       {/* Logo 区域 */}
//       <div className="flex items-center logo" style={{ padding: '16px' }}>
//         <Link to="/">
//           <img alt="logo" src={logo} width="32" />
//           {!collapsed && <h1 style={{ margin: '0 0 0 8px', color: '#fff' }}>后台系统</h1>}
//         </Link>
//       </div>

//       {/* 菜单 */}
//       <Menu
//         mode="inline"
//         selectedKeys={[selectedKey]}
//         onClick={({ key }) => setSelectedKey(key)}
//         style={{ borderRight: 0 }}
//         theme="dark"
//       >
//         {renderMenuItems()}
//       </Menu>
//     </Sider>
//   )
// }

// export default MenuView