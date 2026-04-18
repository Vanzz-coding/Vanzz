// ambil referral
const params = new URLSearchParams(window.location.search)
const reff = params.get("reffid") || "-"

// pilih paket
function pilih(paket, harga) {
  document.getElementById("paket").value = paket
  document.getElementById("harga").value = "Rp " + harga
  document.getElementById("form").scrollIntoView({ behavior: "smooth" })

  toast("Paket dipilih: " + paket)
}

// popup toast
function toast(msg) {
  let t = document.getElementById("toast")
  t.innerText = msg
  t.style.display = "block"

  setTimeout(() => {
    t.style.display = "none"
  }, 2500)
}

// kirim ke WA
function kirim() {
  let nama = document.getElementById("nama").value
  let wa = document.getElementById("wa").value
  let paket = document.getElementById("paket").value
  let harga = document.getElementById("harga").value

  if (!nama || !wa || !paket) {
    toast("Isi semua data dulu!")
    return
  }

  toast("Mengalihkan ke WhatsApp...")

  let admin = "6285695344508" // GANTI NOMOR KAMU

  let pesan = `Halo Admin, saya ingin order panel

Nama: ${nama}
No WA: ${wa}
Paket: ${paket}
Harga: ${harga}
Referral: ${reff}`

  setTimeout(() => {
    window.open(`https://wa.me/${admin}?text=${encodeURIComponent(pesan)}`)
  }, 1000)
}
