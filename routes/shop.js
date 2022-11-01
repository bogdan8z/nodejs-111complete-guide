import express from "express";

export const router = express.Router();

router.use('/', (req, res, next) => {
    console.log('get2 '+req);
    res.send('<h1>root</h1>');
});

export default router;