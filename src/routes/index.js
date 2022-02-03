const { Router } = require('express');

const router = Router();

// router.use('/prueba', prueba);
router.get('/',(req, res) => {
    res.status(200).json({message: "Route it's okay"})
})

module.exports = router