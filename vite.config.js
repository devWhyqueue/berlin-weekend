import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = 'berlin-vintage-tour'

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,
  build: { outDir: 'docs' }
})


