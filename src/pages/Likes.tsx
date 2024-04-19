import { Card } from '../components/Card';
import { useLikes } from '../LikesContext';

export const Likes = () => {
  const { likedRecipes, deleteLikedRecipe } = useLikes();

  const deleteHandler = (recipeToDelete) => {
    deleteLikedRecipe(recipeToDelete);
  };

  const RECIPES_CARD_STYLE = {
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    padding: '2rem',
    width: '60%',
    marginLeft: '15%',
    marginTop: '2rem',
  };

  return (
    <>
      <h1 className='likesH1'>My Recipes</h1>
      {likedRecipes.map((meal, index) => (
        <Card style={RECIPES_CARD_STYLE} key={index}>
          <div>
            <img
              src={meal.strMealThumb}
              style={{ height: '30rem', width: '30rem' }}
              alt={meal.strMeal}
            />
            <h2>{meal.strMeal}</h2>
            <h3>{meal.strArea}</h3>
            <p>Category: {meal.strCategory}</p>
            <p>Instructions:</p>
            <p>{meal.strInstructions}</p>
            <button
              onClick={() => deleteHandler(meal)}
              className='removeLikeBtn'
            >
              Remove Recipe
            </button>
          </div>
        </Card>
      ))}
    </>
  );
};
