function hicriyeDonustur(tarih){
    let miladiTarih = hicriYil(tarih) ;
    let hicriTarih = (miladiTarih - 622) / (32 / 33);
    hicriTarih = Math.floor(hicriTarih);

    return hicriTarih
}

module.exports = hicriyeDonustur; 