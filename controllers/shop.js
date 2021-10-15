const admin = require('../routes/admin');
const Products =require('../models/product');
const Product = require('../models/product');


module.exports.getIndex = (req, res, next) => {
    const products = Products.getAll();
  res.render('shop/index',
        {
            title: 'Shopping',
            products: products,
            path: '/'
        });
};
module.exports.getProducts = (req, res, next) => {
    const products = Products.getAll();
    
  res.render('shop/products',
        {
            title: 'Products',
            products: products,
            path: '/products'
        });
};
module.exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    const product = Product.getById(productId);
  res.render('shop/product-detail',
        {
            title: 'Product - '+product.name,
            product: product,
            path: '/products'
        });
};

module.exports.getProductDetails = (req, res, next) => {
    const products = Products.getAll();
    console.log(req.params.uid);
  res.render('shop/details',
        {
            title: 'Details',
            
            path: '/details'
        });
};
module.exports.getCart = (req, res, next) => {
    const products = Products.getAll();
  res.render('shop/cart',
        {
            title: 'Cart',
            
            path: '/cart'
        });
};
module.exports.getOrders = (req, res, next) => {
    const products = Products.getAll();
  res.render('shop/orders',
        {
            title: 'Orders',
            
            path: '/orders'
        });
};


