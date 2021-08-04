// xử lý riêng về tin tức 
// phần path 

const express = require('express');
const router= express.Router();

const blogController= require('../app/controllers/BlogController')

// newsController.index
// các tuyến đường của news 
// news/:slug
router.get('/create',blogController.create);
router.post('/store',blogController.store);
router.get('/edit/:id',blogController.edit);
router.delete('/:id',blogController.delete);
router.delete('/force/:id',blogController.forceDelete);
router.patch('/restore/:id',blogController.restore);
router.put('/:id', blogController.update);
router.get('/:slug',blogController.show);



module.exports =router;