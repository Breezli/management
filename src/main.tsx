import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import { persistor, store } from '@/store'

import './index.css'
import '@/assets/css/public.less'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
)
