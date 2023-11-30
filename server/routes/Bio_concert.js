var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Concert = require('../models/Bio_concert');
let ConcertController = require('../controllers/Bio_concert')

function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}
/* Get route for the Bio Concerts list */
// Read Operation
router.get('/', ConcertController.DislayConcertlist);
/* Get route for Add Concert page --> Create */
router.get('/add', requireAuth, ConcertController.AddConcert); 
/* Post route for Add Concert page --> Create */
router.post('/add',requireAuth, ConcertController.ProcessConcert);
/* Get route for displaying the Edit Concert page --> Update */
router.get('/edit/:id',requireAuth, ConcertController.EditConcert);
/* Post route for processing the Edit Concert page --> Update */
router.post('/edit/:id',requireAuth, ConcertController.ProcessEditConcert);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id',requireAuth, ConcertController.DeleteConcert);
 module.exports = router;