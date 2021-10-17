const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/products');
const adminController= require('../controllers/admin')
// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);
// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
//edit-product
router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);
//sonradan

router.get('/products', adminController.getProducts);
router.get('/products/:productId', adminController.getProducts);

router.post('/delete-product',adminController.postDeleteProduct)


module.exports = router;

