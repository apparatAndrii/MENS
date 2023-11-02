import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$images: '/src/assets/images',
			$styles: '/src/assets/styles'
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		host: true,
		port: process.env.FRONTEND_PORT,
		strictPort: true,
		watch: {
			usePolling: true,
			ignored: ['node_modules']
		}
	},
	preview: {
		host: true,
		port: process.env.FRONTEND_PORT,
		strictPort: true
	}
});
