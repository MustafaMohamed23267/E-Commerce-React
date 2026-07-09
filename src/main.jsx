import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './Context/AppContext.jsx'
import { Provider } from 'react-redux'
import { Store } from './Context/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <AppProvider>
        <App />
      </AppProvider>
      
    </Provider>
  </StrictMode>
)
