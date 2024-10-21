import axios from "./axios.js";



export const getProductsRequest = () => axios.get('api/products')
export const getProductRequest = (id) => axios.get(`api/products/${id}`)
export const getByCodeProductRequest = (code) => axios.get(`api/products/code/${code}`)
export const getAllSalesRequest = () => axios.get(`api/products/sales`)
export const createProductsRequest = (product) => axios.post('api/products', product)
export const createSaleRequest = (sale) => axios.post('api/products/sales', sale)
export const updateProductRequest = (product) => axios.put(`api/products/${product.id}`, product)
export const sellProductRequest = (code, quantityToSell) => axios.put(`api/products/sell/${code}`, { quantityToSell })
export const sellProductsRequest = (productos) => axios.put(`api/products/sell/bulk`, productos);
export const deleteProductRequest = (id) => axios.delete(`api/products/${id}`)
export const upByCodeProductRequest = (code, product) => axios.put(`api/products/code/${code}`, product)
export const sendMailRequest = (email) => axios.post(`api/contact`, email)