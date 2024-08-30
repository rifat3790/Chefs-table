import './recipe.css';
import { IoMdTime } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";


const Recipe = ({recipe, handleCookRecipe}) => {
    const {ingredients, recipe_img, recipe_name, short_description, recipe_id, preparing_time, calories} = recipe;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure>
    <img className="w-full"
      src={recipe_img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p className='text-[#878787]'>{short_description}</p>
    <hr />
    <div>
        <h4 className="font-medium">Ingredients: {ingredients.length}</h4>
        <ul className="style-list ml-8 mt-3">
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
        </ul>
    </div>
    <div className='flex items-center gap-10 my-6'>
        <div className='flex items-center text-base text-[#282828CC] gap-2'>
        <IoMdTime />
        <p>{preparing_time} minutes</p>
        </div>
        <div className='flex items-center text-base text-[#282828CC] gap-2'>
        <FaFireAlt />
        <p>{calories} calories</p>
        </div>
    </div>
    <div className="card-actions">
      <button onClick={()=>handleCookRecipe(recipe)} className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Recipe;