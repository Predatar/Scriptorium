import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		webfontDownload(['https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap']),
		svgr(),
	],
	server: {
		hmr: true,
		open: true,
	},
  build: {
		terserOptions: {
			compress: true,
		},
	},
	resolve: {
		alias: {
			'@Components': '/src/components',
			'@Assets': '/src/assets',
			'@Hooks': '/src/hooks',
			'@Types': '/src/types',
		},
	},
});
