
const CurrentCooking = ({currentCook, totalTime, totalCalories}) => {
    console.log(currentCook);
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mb-6">Currently cooking: {currentCook.length}</h2>
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
                    currentCook.map((cook, idx) => (
                        <tr className="space-y-4" key={idx}>
                            <td>{idx + 1}</td>
                            <td>{cook.recipe_name}</td>
                            <td>{cook.preparing_time} minutes</td>
                            <td>{cook.calories} calories</td>
                        </tr>
                    ))
                }
                </tbody>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total Time: {totalTime}</td>
                        <td>Total calories: {totalCalories}</td>
                    </tr>
                </tbody>
            </table>
                
            
        </div>
    );
};

export default CurrentCooking;