const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barangController');

router.get('/', barangController.index);
router.get('/tambah', barangController.formTambah);
router.post('/simpan', barangController.simpan);

module.exports = router;
