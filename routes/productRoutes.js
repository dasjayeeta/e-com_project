const express = require('express');
const router = express.Router();
const prdctController = require('../controller/productController');
const middleware = require('../middleware/middlewares');

router.use(middleware);

router.get('/',prdctController.getAllProducts);
router.post('/create',prdctController.addProducts);
router.patch('/update/:id',prdctController.updateProducts);
router.delete('/delete/:id',prdctController.deleteProducts);

module.exports = router;