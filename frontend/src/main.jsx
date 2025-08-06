import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { ColorModeProvider, useColorMode } from './ColorModeContext'

const Root = () => {
  const { colorMode } = useColorMode();
  return (
    <BrowserRouter>
      <div className={colorMode ? 'bg-white text-black min-h-screen' : 'bg-gray-900 text-white min-h-screen'}>
        <StrictMode>
          <App />
        </StrictMode>
      </div>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(
  <ColorModeProvider>
    <Root />
  </ColorModeProvider>
)
