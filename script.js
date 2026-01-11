function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID").format(angka);
}

function openCart() {
  const select = document.getElementById("paket");
  const price = parseInt(select.value);

  document.getElementById("total").innerText = formatRupiah(price);
  document.getElementById("cart").style.display = "block";
}

function closeCart() {
  document.getElementById("cart").style.display = "none";
}

function sendWhatsApp() {
  const phone = "628984485823"; // GANTI NOMOR ADMIN (tanpa +)

  const select = document.getElementById("paket");
  const paketText = select.options[select.selectedIndex].text;
  const harga = parseInt(select.value);

  const produk = "PANEL PTERODACTYL";

  const message =
`Halo Admin 👋

Saya ingin order produk:

📦 Produk : ${produk}
🧾 Paket  : ${paketText}
💰 Harga  : Rp ${formatRupiah(harga)}

Mohon diproses ya 🙏`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
