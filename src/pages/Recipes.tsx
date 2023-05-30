import { useState } from 'react';
import { Button } from '../components/Button';
import { Spinner } from '../components/Spinner';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

export const Recipes = () => {
  const RECIPES_BUTTON_STYLE = {
    backgroundColor: '#ffa600',
    backgroundImage: `linear-gradient(to right, #ff7300, #fff200)`,
    borderRadius: '5px',
    border: '1px solid #ffa600',
    padding: '6px',
    marginLeft: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const RECIPES_CARD_STYLE = {
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    padding: '10px',
  };

  const [recipe, setRecipe] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(recipe);
  };
  /*
  const {
    data: meals,
    loading,
    error,
  } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p style={{ marginTop: '4rem' }}>There was an error</p>;
  }
*/
  return (
    <>
      <div className='recipes'></div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          required
          value={recipe}
          placeholder='Search...'
          onChange={(e) => setRecipe(e.target.value)}
          className='search-field'
        />
        <Button style={RECIPES_BUTTON_STYLE}>Submit</Button>
      </form>
    </>
  );
};
