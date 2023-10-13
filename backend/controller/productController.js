import ProductModel from "../model/productSchema.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findOne({ 'id': id });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const  getProductByCategory = async(req, res)=>{
  try{
    const category = req.query.category;
    console.log(category);
    const product = await ProductModel.find({'category':category})
    res.status(200).json(product);

  }catch(err){
    res.status(400).json({message:err.message})
  }
}
