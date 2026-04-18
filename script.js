// ambil reff dari URL
const urlParams = new URLSearchParams(window.location.search)
const reff = urlParams.get("reffid") || "tidak ada"

function pilih(paket, harga) {
  document.getElementById("paket").value = paket;
  document.getElementById("harga").value = "Rp " + harga;
  document.getElementById("form").scrollIntoView({ behavior: "smooth" });
}

function kirim() {
  let nama = document.getElementById("nama").value;
  let wa = document.getElementById("wa").value;
  let paket = document.getElementById("paket").value;
  let harga = document.getElementById("harga").value;

  if (!nama || !wa || !paket) {
    alert("Isi semua data!");
    return;
  }

  let admin = "62XXXXXXXXXX"; // GANTI NOMOR KAMU

  let pesan = `Halo Admin, saya ingin order panel

Nama: ${nama}
No WA: ${wa}
Paket: ${paket}
Harga: ${harga}
Referral: ${reff}

Mohon diproses 🙏`;

  window.open(`https://wa.me/${admin}?text=${encodeURIComponent(pesan)}`);
}
