import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.tsx';
import { RouteNotFound } from './components/RouteNotFound';
import './index.css';
import './App.css';
import { Recipes } from './pages/Recipes.tsx';
import { Likes } from './pages/Likes.tsx';
import { Settings } from './pages/Settings.tsx';
import { ThemeProvider } from './ThemeContext.tsx';
import { LikesProvider } from './LikesContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <LikesProvider>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<Home />} />
              <Route path='/Recipes' element={<Recipes />} />
              <Route path='/Likes' element={<Likes />} />
              <Route path='/Settings' element={<Settings />} />
              <Route path='*' element={<RouteNotFound />} />
            </Route>
          </Routes>
        </LikesProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
