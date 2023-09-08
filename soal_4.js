const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy B",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
]

getTotalPenjualan = (dataPenjualan) => {
  if (Array.isArray(dataPenjualan)) {
    
    let totalPenjualan = 0
    dataPenjualanPakAldi.map((value)=>{
      totalPenjualan += value.totalTerjual
    })

    return totalPenjualan
  } else if (typeof dataPenjualan == "undefined") {
    return "ERROR: Parameters not entered"
  } else {
    return "ERROR: Invalid data type"
  }
}

console.log(getTotalPenjualan(dataPenjualanPakAldi))
console.log(getTotalPenjualan("ini string"))
console.log(getTotalPenjualan())