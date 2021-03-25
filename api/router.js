/*
 * Import Module
 ****************/
const express = require('express'),
    router = express.Router(),
    upload = require('./config/multer')

/*
 * Controller
 *************/
const homeController = require('./controllers/homeController'),
    articleController = require('./controllers/articleController'),
    fevController = require('./controllers/fevController'),
    contactController = require('./controllers/contactController')

/*
 * Router
 ***********/

// Home
router.route('/')
    .get(homeController.get)

// Article
router.route('/article')
    .get(articleController.get)
    .post(upload.single('imgArticle'), articleController.post)
    .delete(articleController.deleteAll)

// Article ID
router.route('/article/:id')
    .delete(articleController.deleteOne)

// Fev
router.route('/fev')
    .get(fevController.get)
    .post(fevController.post)

// Fev ID
router.route('/fev/:id')
    .get(fevController.getID)
    .put(fevController.put)
    .delete(fevController.deleteOne)

// Fev Title
router.route('/fevq/:title')
    .get(fevController.getByTitle)

// Contact
router.route('/contact')
    .get(contactController.get)

/***********
 * / Router
 */


// on export router pour le récupérer dans ../server.js
module.exports = router;