import { Link } from 'react-router-dom';
import cooking from '../assets/images/cooking.jpg';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const Home = () => {
  const HOME_CARD_STYLE = {
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    padding: '10px',
  };
  const SIGNUP_BUTTON_STYLE = {
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    border: '1px solid black',
    padding: '10px',
    marginLeft: '80%',
    marginRight: '1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  };
  const RECIPES_BUTTON_STYLE = {
    backgroundColor: '#ffa600',
    backgroundImage: `linear-gradient(to right, #ff7300, #fff200)`,
    borderRadius: '5px',
    border: '1px solid #ffa600',
    padding: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <div className='home'>
      <img src={cooking} className='img-cooking' />
      <Card style={HOME_CARD_STYLE}>
        <h1>Welcome to Plately!</h1>
        <h2>
          Where you can find you favorite recipe right at your finger tips.
        </h2>
        <h3>
          In our website you will have access to a huge library of food recipes.
          Plately is powered by themealdb which means we have a vast number of
          recipes available. You'll be able to find your favorite meal for any
          ocassion whether it's delicious waffles and eggs for breakfast before
          work, mashed potatoes and gravy for lunch, or pasta for dinner, we
          have it all covered here at plately! What seperates us from our
          competitors is the unique recipes we have here at Plately, here you
          can find famous fast food meals such as the Big Mac from McDonalds,
          which will impress your friends. Our website offers incredible yet
          simple functionality such as the option to like a recipe which will be
          saved in the likes tab for you to revisit your favorite recipes
          whenever you want. Well what are you waiting for, sign up below or
          search your favorite recipes now!
        </h3>
        <Link to='/Settings'>
          <Button style={SIGNUP_BUTTON_STYLE}>Sign Up</Button>
        </Link>
        <Link to='/Recipes'>
          <Button style={RECIPES_BUTTON_STYLE}>View Recipes</Button>
        </Link>
      </Card>
      <p>Created by Kasey Bourdier</p>
    </div>
  );
};
