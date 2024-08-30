import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    

    return (
        <div>
            <div className="max-w-4xl mx-auto mt-16 md:mt-20 lg:mt-24">
            <h2 className="text-[40px] font-semibold text-center">Our Recipes</h2>
            <p className="text-center text-[#150B2B99] mt-6">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="mt-6 md:mt-8 lg:mt-12 flex gap-6">
            <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe}></Recipe>)
                }
            </div>

            <div className="w-1/3 border">
                <h1>Want to cook: 01</h1>
            </div>
            </div>
        </div>
    );
};

export default Recipes;