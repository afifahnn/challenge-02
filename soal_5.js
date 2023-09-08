const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

// format rupiah
function formatRupiah(number) {
  return number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

// function tugasnya
getInfoPenjualan = (dataPenjualan) => {
  if (Array.isArray(dataPenjualan)) {
    
    // total keuntungan
    let totalKeuntungan = dataPenjualanNovel.map ((value)=>{
      return (value.hargaJual - value.hargaBeli) * value.totalTerjual
    })
    .reduce ((arr, cur) => arr + cur)

    // total modal
    let totalModal = dataPenjualanNovel.map ((value)=>{
      return (value.hargaBeli * (value.totalTerjual + value.sisaStok))
    }).reduce ((arr, cur) => arr + cur)

    // persentase keuntungan
    let persenUntung = Math.floor((totalKeuntungan / totalModal) * 100)
    
    // produk buku terlaris
    let laris = Math.max(...dataPenjualanNovel.map ((value)=> value.totalTerjual))
    let bukuTerlaris = dataPenjualanNovel.filter ((value)=>{
      return value.totalTerjual == laris
    })

    // penulis buku terlaris
    let penulisTerlaris = dataPenjualanNovel.filter ((value)=>{
      return value.totalTerjual == laris
    })

    let tampilkan = "Total keuntungan = " + formatRupiah(totalKeuntungan) + "\n" +
                    "Total modal = " + formatRupiah(totalModal) + "\n" +
                    "Persentase keuntungan = " + persenUntung + " %" + "\n" +
                    "Produk buku terlaris = " + bukuTerlaris[0].namaProduk + "\n" +
                    "Penulis buku terlaris = " + penulisTerlaris[0].penulis;

    return tampilkan
  
  } else if (typeof dataPenjualan == "undefined") {
    return "ERROR: Parameters not entered";
  } else {
    return "ERROR: Invalid data type";
  }
};

console.log(getInfoPenjualan(dataPenjualanNovel))
