function pilih(paket, harga) {
  document.getElementById("paket").value = paket;
  document.getElementById("harga").value = "Rp " + harga;
  document.getElementById("formOrder").scrollIntoView();
}

function kirim() {
  let nama = document.getElementById("nama").value;
  let wa = document.getElementById("wa").value;
  let paket = document.getElementById("paket").value;
  let harga = document.getElementById("harga").value;

  let pesan = `Halo Admin, saya ingin order panel\n\nNama: ${nama}\nWA: ${wa}\nPaket: ${paket}\nHarga: ${harga}`;

  window.open(`https://wa.me/62XXXXXXXXXX?text=${encodeURIComponent(pesan)}`);
}
