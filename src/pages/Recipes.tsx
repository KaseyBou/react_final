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
    padding: '2rem',
    width: '60%',
    marginLeft: '15%',
    marginTop: '2rem',
  };

  const [recipe, setRecipe] = useState('');
  const [showRecipe, setShowRecipe] = useState(false);

  const {
    data: meals,
    loading,
    error,
  } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
  );

  if (error) {
    return <p>An error occured: {error}</p>;
  }

  if (loading) {
    return (
      <div style={{ marginTop: '4rem', marginLeft: '45%' }}>
        <Spinner />
      </div>
    );
  }

  let myMeal: any;
  myMeal = meals.meals[0];

  const submitHandler = (e: any) => {
    setShowRecipe(true);
    e.preventDefault();
    console.log(recipe);
    console.log(meals);

    console.log(myMeal.strMeal);
    console.log(myMeal.strCategory);
  };

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
      {showRecipe ? (
        <Card style={RECIPES_CARD_STYLE}>
          <img
            src={myMeal.strMealThumb}
            style={{ height: '30rem', width: '30rem' }}
          />
          <h2>{myMeal.strMeal}</h2>
          <h3>{myMeal.strArea}</h3>
          <p>Category: {myMeal.strCategory}</p>
          <p>Instructions:</p>
          <p>{myMeal.strInstructions}</p>
        </Card>
      ) : (
        <div></div>
      )}
    </>
  );
};
