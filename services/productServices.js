const products = require('../model/productModel');
//fetch
async function getAllProducts() {
  try {
    return await products.find();
  } catch (error) {
    throw new Error('Error')
  }
}
//save 
async function addProducts(Data) {
  try {
    const product = new products(Data);
    return await product.save();
  } catch (error) {
    throw new Error('Error creating product');
  }
};
//update
async function updateProducts(id, updateData) {
  try {
    return await products.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw new Error('Error not updated product')
  }
}
//delete
async function deleteProducts(id){
try{
  return await products.findByIdAndDelete(id);
}catch(error){
  throw Error("Error not deleted product");
}
}
module.exports = {
  getAllProducts,
  addProducts,
  updateProducts,
  deleteProducts
};
