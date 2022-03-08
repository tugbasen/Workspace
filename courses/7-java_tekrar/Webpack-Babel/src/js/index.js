
//api:e8a9d5f82d78ca210c8076d648685c12
//url:'https://api.themovieedb.org/3/
// https://api.themoviedb.org/3/search/movie?api_key=e8a9d5f82d78ca210c8076d648685c12&language=en-US&query=abc&page=1&include_adult=false


async function getResult(keyword){
    const api_key="e8a9d5f82d78ca210c8076d648685c12";
    const base_url="https://api.themovieedb.org/3";

    const response = await fetch(`${base_url}/search/movie?api_key${api_key}&page=1&query=${keyword}`);
    const results =  await response.json();
    console.log(results);
    

}



getResult('abc');






