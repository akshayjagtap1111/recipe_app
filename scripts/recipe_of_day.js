async function get_res_of_day(){

    let responce =await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)

    let result =await responce.json()

    return result;
}

export default get_res_of_day;