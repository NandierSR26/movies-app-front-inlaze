import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

// Import Swiper styles
import 'swiper/css';

// Circular-progress-bar styles
import 'react-circular-progressbar/dist/styles.css';
import { MoviesProvider } from './context/MoviesProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>,
)
