let dataBarang = [
  { kode: "BRG001", nama: "Laptop ASUS", harga: 8000000, stok: 10 },
  { kode: "BRG002", nama: "Mouse Logitech", harga: 150000, stok: 20 }
];

module.exports = {
  getAll: () => dataBarang,

  add: (barang) => {
    dataBarang.push(barang);
  }
};
