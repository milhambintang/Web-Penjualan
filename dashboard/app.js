const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Tambahkan ini
const products = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
// Middleware untuk membaca file statis
app.use(express.static(path.join(__dirname, 'views')));

// Routing ke halaman utama (dashboard)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/tambah', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'tambahbarang.html'));
});

app.get('/tambah', (req, res) => {
  res.render('tambahbarang');
});


// Proses tambah barang
app.post('/tambah', (req, res) => {
  const { name, price, qty } = req.body;
  products.push({
    name: name,
    price: parseInt(price),
    qty: parseInt(qty)
  });
  res.redirect('/daftar');
});

// Halaman daftar barang
app.get('/daftar', (req, res) => {
  res.render('daftar', { products });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
