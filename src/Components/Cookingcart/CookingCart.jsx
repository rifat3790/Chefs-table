
const CookingCart = ({cookRecipe, handlePreparingCooking}) => {
    console.log(cookRecipe)
    
    return (
        <div className="py-8 px-6">
            <h1 className="text-2xl font-semibold text-center mb-6">Want to cook: {cookRecipe.length}</h1>
            <hr />
            <table className="table border">
                <thead>
                <tr>
                <th></th> 
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                {
                    cookRecipe.map((recipe, idx) => (
                        <tr className="space-y-4" key={idx}>
                            <td>{idx + 1}</td>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time} <br />minutes</td>
                            <td>{recipe.calories} <br />calories</td>
                            <button onClick={()=>handlePreparingCooking(recipe)} className="btn bg-[#0BE58A] rounded-full">Preparing</button>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default CookingCart;