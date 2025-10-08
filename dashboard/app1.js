const express = require('express');
const bodyParser = require('body-parser');
const penjualanRoutes = require('./routes/penjualanRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/penjualan', penjualanRoutes);

app.get('/', (req, res) => {
  res.send('Aplikasi Penjualan Sederhana - MVC (Model Array)');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});