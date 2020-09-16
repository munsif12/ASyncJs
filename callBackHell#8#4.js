//callBackHellmeans callback inside a callback means nexted callbacks to overcome this we use PROMISES
const callBackHell = () => {
    setTimeout(() => {
        const recipeId = [1, 2, 3, 4, 5];
        console.log(` 1st CallBAck => ${recipeId}`);
        setTimeout((id) => {
            const recipe = {
                name: 'pasta',
                chef: 'Ahsan'
            };
            console.log(` 2nd CallBAck => Id :${id} Dish Name :${recipe.name} Author :${recipe.chef}`);
            setTimeout(author => {
                const recipe2 = {
                    name: 'Chaomin',
                    chef: author
                };
                console.log(` 3rd CallBAck => Id :${id} Dish Name :${recipe2.name} Author :${recipe2.chef}`);
                setTimeout(dish => {
                    console.log(` 4th CallBAck => ${dish.name} is delicious . Presented by ${dish.chef}`);
                }, 1500, recipe2);
            }, 1500, recipe.chef);
        }, 1500, recipeId[2]);
    }, 1500);
}
callBackHell();