function tutarHesapla(yardimYapanlar) {
  const patron = 'ahmet';
  let yardimYapan = 0;
  for (let i = 0; i < yardimYapanlar.length; i++) {
    let kisi = yardimYapanlar[i].toLowerCase();

    for (let k = 0; k < kisi.length; k++) {
      let harf = kisi.charAt(k);

      for (let p = 0; p < patron.length; p++) {
        let patronHarf = patron.charAt(p);
        if (harf === patronHarf) {
          yardimYapan = yardimYapan + 1000;
        }
      }
    }
  }
  return yardimYapan;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tutarHesapla;
