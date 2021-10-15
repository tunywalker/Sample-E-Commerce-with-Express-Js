const Product = require('../models/product');
const Products =require('../models/product');

module.exports.getProducts = (req, res, next) => {
const products = Products.getAll();
  res.render('admin/products',
        {
            title: 'Admin Products',
            products: products,
            path: '/admin/products',
            action: req.query.action,
            updatedId: req.query.updated

        });
};
module.exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product',
        {
            title: 'Add a new product!',
            path: '/admin/add-product'
        });
}
module.exports.getEditProduct = (req, res, next) => {
const product = Product.getById(req.params.productId)

    res.render('admin/edit-product',
        {
            title: 'Add a new product!',
            path: '/admin/edit-product',
            product : product
        });
}
module.exports.postEditProduct = (req, res, next) => {
   
    const product = Product.getById(req.body.id);
    product.name= req.body.name;
    product.price=req.body.price;
    product.description=req.body.description;
    product.imageUrl=req.body.imageUrl;
    Product.Update(product);

    res.redirect('/admin/products?action=edit&updated='+req.body.id);
}

module.exports.postAddProduct = (req, res, next) => {
    console.log(req.body.imageUrl);
    const product = new Products(
        req.body.name,
        req.body.price,
        req.body.imageUrl,
        req.body.description);
    product.saveProduct();    

    res.redirect('/');

}