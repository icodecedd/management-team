import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from './components/ui/provider.jsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/SrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
