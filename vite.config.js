import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages under /<repo>/, add: base: '/tis-homepage-redesign/'
export default defineConfig({ plugins: [react()] })
