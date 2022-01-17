

async function get_categoryData(dish_categary) {
    let responce = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${dish_categary}`
    );
  
    let result = await responce.json();
  
    return result;
  }



  function append_categoryData(result, location) {

  document.getElementById("container").innerHTML=null;
    result.forEach(function (element) {
      let tp_cover = document.createElement("div");
      tp_cover.id = "tp_cover";
      let img_cover = document.createElement("div");
      img_cover.id = "img_cover";
      let tp_img = document.createElement("img");
      tp_img.src = element.strMealThumb;
      let tp_name = document.createElement("p");
      tp_name.innerText = element.strMeal;
      img_cover.append(tp_img);
      tp_cover.append(img_cover, tp_name);
  
      tp_cover.addEventListener("click", function () {
  
       let dish_id=element.idMeal;
  
       localStorage.setItem("dish_id",JSON.stringify(dish_id))
  
       window.location.href="recipe.html"
  
      });
      location.append(tp_cover);
  
      
    });
  
  }

  export {get_categoryData,append_categoryData}