import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Container from './pages/container'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/' element={<Container />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
