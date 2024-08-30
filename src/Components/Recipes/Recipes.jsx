import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookingCart from "../Cookingcart/CookingCart";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import CurrentCooking from "../CurrentCooking/CurrentCooking";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cookRecipe, setCookRecipe] = useState([]);
  const [currentCook, setCurrentCook] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCookRecipe = (recipe) => {
    const isAdded = cookRecipe.find(
      (cook) => cook.recipe_id === recipe.recipe_id
    );
    if (isAdded) {
        
        toast.error('This recipe is already in your cooking list!', {
            position: "top-right",
            autoClose: 3000, // Close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        
    } else {
      const newCookRecipe = [...cookRecipe, recipe];
      setCookRecipe(newCookRecipe);
      toast.success('Recipe added to your cooking list!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    }
  };


  const handlePreparingCooking = cook =>{
    const remainingCookRecipe = cookRecipe.filter(cooking => cooking.recipe_id !== cook.recipe_id);
    setCookRecipe(remainingCookRecipe);

    const newCurrentCook = [...currentCook, cook];
    setCurrentCook(newCurrentCook);
    setTotalTime(totalTime + cook.preparing_time)
    setTotalCalories(totalCalories + cook.calories)
  }

  

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-16 md:mt-20 lg:mt-24">
        <h2 className="text-[40px] font-semibold text-center">Our Recipes</h2>
        <p className="text-center text-[#150B2B99] mt-6">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>

      <div className="mt-6 md:mt-8 lg:mt-12 flex flex-col md:flex-row lg:flex-row gap-6">
        <div className="md:w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {recipes.map((recipe, idx) => (
            <Recipe
              key={idx}
              recipe={recipe}
              handleCookRecipe={handleCookRecipe}
            ></Recipe>
          ))}
        </div>

        <div className="md:w-[40%] border">
          <CookingCart
          cookRecipe={cookRecipe}
          handlePreparingCooking={handlePreparingCooking}
          ></CookingCart>

          <CurrentCooking currentCook={currentCook}
          totalTime={totalTime}
          totalCalories={totalCalories}
          ></CurrentCooking>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Recipes;
