let recipes = [];
function getRecipes(){
    fetch('https://dummyjson.com/recipes?sortBy=name&order=asc')
    .then(res =>  {
        //res.json()
        recipes = res.json();
        
    })
    .then(console.log())
    
}

function getMeals(mealType){
    fetch('https://dummyjson.com/recipes/meal-type/'+mealType)
        .then(res => res.json())
        .then(console.log);
}

function searchRecipe(parameter){
    fetch('https://dummyjson.com/recipes/search?q='+parameter)
        .then(res => res.json())
        .then(console.log);
}

function loadRecipes(){
    getRecipes();
}

loadRecipes();