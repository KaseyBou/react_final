import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
//icon imports
import logo from '../assets/icons/icon-logo.png';
import like from '../assets/icons/icon-likes.png';
import setting from '../assets/icons/icon-settings.png';

export const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='app-container'>
      <header
        className='nav-bar'
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      >
        <nav
          className='nav-bar'
          style={{ backgroundColor: theme.background, color: theme.foreground }}
        >
          <img src={logo} className='logo' />
          <h2 style={{ color: 'rgb(53, 166, 0)' }}>Plately</h2>
          <Link
            to='/'
            className='links'
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
            }}
          >
            Home
          </Link>
          <Link
            to='/Recipes'
            className='links'
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
            }}
          >
            Recipes
          </Link>
          <Link
            to='/Likes'
            className='links'
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
            }}
          >
            Likes
            <img src={like} className='icons' />
          </Link>
          <Link
            to='/Settings'
            className='links'
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
            }}
          >
            Settings
            <img src={setting} className='icons' />
          </Link>
        </nav>
      </header>
      <main
        className='content'
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      >
        <Outlet />
      </main>
    </div>
  );
};
