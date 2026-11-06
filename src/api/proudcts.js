const API_URL = "/api/products";

const getProducts = async()=>{
    const repsonse = await fetch(API_URL);
    return repsonse.json();
}


export{getProducts};