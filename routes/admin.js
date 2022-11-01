import express from "express";

const  router = express.Router();

// router.use('/add-product', (req, res, next) => {
//     console.log('add prod ');
//     res.send('<form action="/product" method="POST" ><input type="text" name="title"><button  type="submit">Add</button></form>');
// });
router.get('/add-product', (req, res, next) => {
    console.log('add prod ');
    res.send('<form action="/product" method="POST" ><input type="text" name="title"><button  type="submit">Add</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log('prod det22 ', req.body);
    res.redirect('/');
});


// export { router as adminRouter };
export default router;