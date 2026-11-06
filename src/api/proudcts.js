const API_URL = "/api/products";

const getProducts = async () => {
  const repsonse = await fetch(API_URL);
  return repsonse.json();
};

const createProdts = async (product) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return response.json();
};

export { getProducts, createProdts };
