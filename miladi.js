function miladiyeDonustur(tarih){
  let hicriTarih = miladiYil(tarih);
  let miladiTarih = (hicriTarih / (32 / 33)) + 623 ;
  miladiTarih = Math.floor(miladiTarih);

  return miladiTarih
}

module.exports = miladiyeDonustur;