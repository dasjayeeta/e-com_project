const prdctService = require('../services/productServices');
 async function getAllProducts(req,res){
    try{
        const getproduct = await prdctService.getAllProducts();
        res.status(200).json(getproduct);
    }catch(error){
        res.status(500).json({ msg: error.message});
    }
 }
async function addProducts(req, res) {
  try {
    const Data = req.body;  
    const newproducts = await prdctService.addProducts(Data);
    res.status(201).json(newproducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function updateProducts(req,res){
    const {id} = req.params;
    const updateData = req.body;
  try{
    const product = await prdctService.updateProducts(id, updateData);
    if(!product){
    return res.status(404).json({error:'product not found '});
    }
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({error:error.message});
  }
} 
async function deleteProducts(req,res){
  const {id} = req.params;
try{
  const product = await prdctService.deleteProducts(id);
  if(!product){
    return res.status(404).json({error:"product not found"})
  }
  return res.status(200).json(product);
}catch(error){
  res.status(500).json({error:error.message});
}
}
module.exports = {
  getAllProducts,
  addProducts,
  updateProducts,
  deleteProducts

};
