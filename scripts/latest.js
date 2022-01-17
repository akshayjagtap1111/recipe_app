async function get_letest_data(){

    let responce =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast`)

    let result = await responce.json();

    return result;
}



export default get_letest_data;