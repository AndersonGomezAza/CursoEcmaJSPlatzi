import fetch from "node-fetch";

const responseApi = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await responseApi.json();

export {products};