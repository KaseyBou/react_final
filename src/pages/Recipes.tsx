import React, { useState } from 'react';
import { Spinner } from '../components/Spinner';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';
// icon
import like from '../assets/icons/icon-likes.png';
import { useLikes } from '../LikesContext';

const RECIPES_CARD_STYLE = {
  backgroundColor: '#e0e0e0',
  borderRadius: '5px',
  padding: '2rem',
  width: '60%',
  marginLeft: '15%',
  marginTop: '2rem',
};

export const Recipes = () => {
  const [recipe, setRecipe] = useState('');
  const [showRecipe, setShowRecipe] = useState(false);
  const { likedRecipes, addLikedRecipe } = useLikes();

  const {
    data: meals,
    loading,
    error,
  } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
  );

  const submitHandler = (e) => {
    e.preventDefault();
    setShowRecipe(true);
    console.log(meals.meals[0]);
  };

  if (error) {
    return <p>An error occurred: {error}</p>;
  }

  if (loading) {
    return (
      <div style={{ marginTop: '4rem', marginLeft: '45%' }}>
        <Spinner />
      </div>
    );
  }

  // error handling if there isn't any meals
  if (!showRecipe || !meals || !meals.meals || meals.meals.length === 0) {
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
          <button className='recipes-button'>Submit</button>
        </form>
        {showRecipe && <p>No meals found for "{recipe}"</p>}
      </>
    );
  }

  const myMeal = meals.meals[0];

  const addLikes = () => {
    addLikedRecipe(myMeal);
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
        <button className='recipes-button'>Submit</button>
      </form>
      {showRecipe && (
        <Card style={RECIPES_CARD_STYLE}>
          <div key={myMeal.idMeal}>
            <img
              src={myMeal.strMealThumb}
              style={{ height: '30rem', width: '30rem' }}
              alt={myMeal.strMeal}
            />
            <h2>{myMeal.strMeal}</h2>
            <h3>{myMeal.strArea}</h3>
            <p>Category: {myMeal.strCategory}</p>
            <p>Instructions:</p>
            <p>{myMeal.strInstructions}</p>
            <button className='likes-button' onClick={addLikes}>
              Like Recipe <img src={like} className='icons' />
            </button>
          </div>
        </Card>
      )}
    </>
  );
};
