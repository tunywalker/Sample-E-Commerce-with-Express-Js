const admin = require('../routes/admin');
const Products =require('../models/product');



module.exports.getProducts = (req, res, next) => {
    const products = Products.getAll();
  res.render('index',
        {
            title: 'Homepaga',
            products: products,
            path: '/'
        });
};


