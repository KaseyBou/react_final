import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export const Card = (props) => {
  return (
    <div className='card' style={props.style}>
      {props.children}
    </div>
  );
};
