import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
    name: 'microfrontend2',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/App',  // Exposing the App component of microfrontend2
    },
    shared: ['react', 'react-dom'],
  }),
],
server: {
  port: 3002,  // Another port for the second microfrontend
  cors: true,
  hmr: false,
},
});