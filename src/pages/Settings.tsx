import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../components/ToggleSwitch';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
//icon imports
import account from '../assets/icons/icon-account.png';
import help from '../assets/icons/icon-help.png';
import lock from '../assets/icons/icon-lock.png';
import night from '../assets/icons/icon-night-mode.png';
import back from '../assets/icons/icon-back.png';
import privacy from '../assets/icons/icon-privacy.png';
import about from '../assets/icons/icon-about.png';

export const Settings = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const SETTINGS_TOP_CARDSTYLE = {
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    backgroundColor: '#e0e0e0',
    marginTop: '1rem',
    marginLeft: '35%',
    margingRight: '35%',
    width: '30%',
    padding: '20px',
    cursor: 'pointer',
  };

  const SETTINGS_PRIMARY_CARD_STYLE = {
    backgroundColor: '#e0e0e0',
    marginLeft: '35%',
    margingRight: '35%',
    width: '30%',
    padding: '20px',
    cursor: 'pointer',
  };

  const SETTINGS_ALTERNATE_CARD_STYLE = {
    backgroundColor: '#ededed',
    marginLeft: '35%',
    margingRight: '35%',
    width: '30%',
    padding: '20px',
    cursor: 'pointer',
  };
  const SETTINGS_BOTTOM_CARDSTYLE = {
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    backgroundColor: '#e0e0e0',
    marginLeft: '35%',
    margingRight: '35%',
    width: '30%',
    padding: '20px',
    cursor: 'pointer',
  };

  const ICONS_STYLE = {
    height: '1rem',
    width: '1rem',
    marginLeft: '5%',
    marginRight: '5%',
  };

  return (
    <div style={{ marginTop: '7rem' }}>
      <h1 style={{ marginLeft: '35%', marginRight: '35%', marginTop: '4rem' }}>
        Settings
      </h1>
      <Card style={SETTINGS_TOP_CARDSTYLE}>
        <img src={about} style={ICONS_STYLE} />
        About
      </Card>
      <Card style={SETTINGS_ALTERNATE_CARD_STYLE}>
        <img src={account} style={ICONS_STYLE} />
        Account
      </Card>
      <Card style={SETTINGS_PRIMARY_CARD_STYLE}>
        <img src={privacy} style={ICONS_STYLE} />
        Privacy
      </Card>
      <Card style={SETTINGS_ALTERNATE_CARD_STYLE}>
        <img src={night} style={ICONS_STYLE} />
        Night Mode
        <ToggleSwitch onToggle={toggleTheme} />
      </Card>
      <Card style={SETTINGS_PRIMARY_CARD_STYLE}>
        <img src={lock} style={ICONS_STYLE} />
        Security
      </Card>
      <Card style={SETTINGS_ALTERNATE_CARD_STYLE}>
        <img src={help} style={ICONS_STYLE} />
        Help
      </Card>
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <Card style={SETTINGS_BOTTOM_CARDSTYLE}>
          <img src={back} style={ICONS_STYLE} />
          Back to Home
        </Card>
      </Link>
    </div>
  );
};
