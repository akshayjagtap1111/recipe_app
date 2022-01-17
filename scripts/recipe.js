async function get_dishData(dish_id) {
    let responce = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dish_id}`
    );
  
    let result = await responce.json();
  
    return result;
  }




  function append_dish(e) {
    let container = document.getElementById("container");

    let dish_name = document.createElement("p");
    dish_name.innerText = `“${e.strMeal}”`;

    let img_div = document.createElement("div");
    img_div.id = "img_div";

    let img = document.createElement("img");
    img.src = e.strMealThumb;

    img_div.append(img);

    let ingrid_div = document.createElement("div");
    ingrid_div.id = "ingerdient";
    let ingrid_head = document.createElement("p");
    ingrid_head.innerText = "Ingredients";
    let ingrid_span = document.createElement("span");
    ingrid_span.innerText = `${e.strIngredient1}:${e.strMeasure1}, ${e.strIngredient2}:${e.strMeasure2}, 
    ${e.strIngredient3}:${e.strMeasure3}, ${e.strIngredient4}:${e.strMeasure4},
     ${e.strIngredient5}:${e.strMeasure5}, ${e.strIngredient6}:${e.strMeasure6},
      ${e.strIngredient7}:${e.strMeasure7}, ${e.strIngredient8}:${e.strMeasure8}, 
    ${e.strIngredient9}:${e.strMeasure9}, ${e.strIngredient10}:${e.strMeasure10},  `;

    ingrid_div.append(ingrid_head, ingrid_span);

    let procedure = document.createElement("div");
    procedure.id = "procedure";
    let proced_head = document.createElement("p");
    proced_head.innerText = "Procedure";
    let proced_span = document.createElement("span");
    proced_span.innerText = e.strInstructions;
    procedure.append(proced_head, proced_span);

    container.append(dish_name, img_div, ingrid_div, procedure);
  }
    



  export {get_dishData,append_dish}