import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
    // 代理跨域
		proxy: {
			'/api/': {
				target: 'http://127.0.0.1:7001/v1',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\//, '/'),
			},

			'/external-api/': {
				target: 'https://jsonplaceholder.typicode.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/external-api\//, '/'),
			},
		},
		port: 4200, // 指定端口
		open: true, // 启动自动开浏览器
	},
})
