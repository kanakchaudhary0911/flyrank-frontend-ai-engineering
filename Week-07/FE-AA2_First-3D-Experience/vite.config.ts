import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'three',
              test: /node_modules[\\/]three[\\/]/,
              priority: 20,
              maxSize: 400_000,
            },
            {
              name: 'r3f',
              test: /node_modules[\\/]@react-three[\\/]/,
              priority: 15,
            },
            {
              name: 'react',
              test: /node_modules[\\/]react(?:-dom)?[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
})