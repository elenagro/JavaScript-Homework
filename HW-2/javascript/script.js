// Objets

var recipe = {
    title: "Pancakes",
    serves: 2,
    ingredients: ['egg', 'flour', 'milk', 'water', 'cream', 'banana']
};

console.log(recipe.title);
console.log("Serves: " + recipe.serves);
console.log("Ingredients: ");
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);
console.log(recipe.ingredients[3]);
console.log(recipe.ingredients[4]);
console.log(recipe.ingredients[5]);

// Arrays

var programmingLanguages = ["javascript", "java", "python", "c", "c++", "ruby", "php", "kotlin"];
console.log(programmingLanguages.length);
var lastItem = programmingLanguages.pop();
console.log(lastItem);
console.log(programmingLanguages);
var exchange_ = programmingLanguages.splice(2, 1, "pascal");
console.log(exchange_);
console.log(programmingLanguages);
