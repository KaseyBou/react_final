import { createContext, useContext, useState } from 'react';

// Create context
const LikesContext = createContext();

// Custom hook to access context
export const useLikes = () => {
  return useContext(LikesContext);
};

// Provider component
export const LikesProvider = ({ children }) => {
  const [likedRecipes, setLikedRecipes] = useState([]);

  const addLikedRecipe = (recipe) => {
    setLikedRecipes((prevLikedRecipes) => [...prevLikedRecipes, recipe]);
  };

  const deleteLikedRecipe = (recipeToDelete) => {
    setLikedRecipes((prevLikedRecipes) =>
      prevLikedRecipes.filter((recipe) => recipe !== recipeToDelete)
    );
  };

  return (
    <LikesContext.Provider
      value={{ likedRecipes, addLikedRecipe, deleteLikedRecipe }}
    >
      {children}
    </LikesContext.Provider>
  );
};
