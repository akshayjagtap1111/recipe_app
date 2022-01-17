

async function get_search(input){
    
    let responce =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)

    let result = await responce.json()

    return result
  }

export default get_search