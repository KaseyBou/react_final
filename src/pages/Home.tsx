import { Link } from 'react-router-dom';
import cooking from '../assets/images/cooking.jpg';

import { Card } from '../components/Card';

export const Home = () => {
  const HOME_CARD_STYLE = {
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    padding: '10px',
  };

  return (
    <div className='home'>
      <img src={cooking} className='img-cooking' />
      <Card style={HOME_CARD_STYLE}>
        <h1>Welcome to Plately!</h1>
        <h2>
          Where you can find your favorite recipe right at your finger tips.
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
          <button className='sign-up-button'>Sign Up</button>
        </Link>
        <Link to='/Recipes'>
          <button className='recipes-button-home'>View Recipes</button>
        </Link>
      </Card>
      <p>Created by Kasey Bourdier</p>
    </div>
  );
};
