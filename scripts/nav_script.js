
function quots_func(){

    let quots_arr = [
    
        "“Food is a passion. Food is love.”",
        "“A recipe has no soul. You as the cook must bring soul to the recipe.”",
        "“Cooking is like love. It should be entered into with abandon or not at all.”",
        "“Respect for food is respect for life, for who we are and what we do.”",
        "“…no one is born a great cook, one learns by doing.”",
        "“Cooking is about creating something delicious for someone else.”",
        "“People who love to eat are always the best people.”",
        "“Life is uncertain. Eat dessert first.”"
      ];
    let q=0
    let quote_tag=document.getElementById("quote")
      setInterval(() => {
      
       
        
    
        q++
    
        quote_tag.innerText=quots_arr[q]
       
        if(q===quots_arr.length-1){
          q=0
        }
      }, 3000);
}


function slider(slider_img){

    let slide_url_arr=[
      "https://d4t7t8y8xqo0t.cloudfront.net/app//resized/720X280/restaurant/637818/restaurant020160823112423.jpg",
        "https://www.fun4foodies.org/wp-content/uploads/2018/11/Food_B_100516.jpg",
        "https://cdn.tasteatlas.com/images/dishes/0b325cd0cd244541be20a0c5e6a32e62.jpg",
        "https://s3.envato.com/files/280356264/MIX%20FOOD_19_banner.jpg",
        
        
      ]

      let s=0;

      setInterval(() => {
      
        s++
    
       slider_img.src=slide_url_arr[s]
       
        if(s===slide_url_arr.length-1){
          s=0
        }
      }, 5000);
}
export {quots_func,slider}