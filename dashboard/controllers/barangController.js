const Barang = require('../models/barangModel');

exports.index = (req, res) => {
  const data = Barang.getAll();
  res.render('index', { barang: data });
};

exports.formTambah = (req, res) => {
  res.render('tambah');
};

exports.simpan = (req, res) => {
  const { kode, nama, harga, stok } = req.body;

  Barang.add({
    kode,
    nama,
    harga: parseFloat(harga),
    stok: parseInt(stok)
  });

  res.redirect('/');
};
