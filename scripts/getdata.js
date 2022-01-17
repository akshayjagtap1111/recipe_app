async function get_type_data() {
  let responce = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  let result = await responce.json();

  return result;
}




function append_type_data(result, location) {

  result.forEach(function (element) {
    let tp_cover = document.createElement("div");
    tp_cover.id = "tp_cover";
    let img_cover = document.createElement("div");
    img_cover.id = "img_cover";
    let tp_img = document.createElement("img");
    tp_img.src = element.strCategoryThumb;
    let tp_name = document.createElement("p");
    tp_name.innerText = element.strCategory;
    img_cover.append(tp_img);
    tp_cover.append(img_cover, tp_name);

    tp_cover.addEventListener("click", function () {

     let catogary=element.strCategory

     localStorage.setItem("category",JSON.stringify(catogary))

     window.location.href="category_meals.html"

    });
    location.append(tp_cover);

    
  });

}





export { get_type_data, append_type_data };
