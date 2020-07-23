const express = require('express')

const OurWorkCtrl = require('../controllers/OurWork-ctrl')

const router = express.Router()

router.post('/our_work', OurWorkCtrl.createOurWork)
router.get('/our_work/page/:pageNum/:numOfElements', OurWorkCtrl.getOurWorkByPage)
router.put('/our_work/:id', OurWorkCtrl.updateOurWork)
router.delete('/our_work/:id', OurWorkCtrl.deleteOurWork)
router.get('/our_work/:id', OurWorkCtrl.getOurWorkById)
router.get('/our_works', OurWorkCtrl.getOurWorks)

module.exports = router