const params = new URLSearchParams(window.location.search)
const reff = params.get("reffid") || "-"

function pilih(paket, harga) {
  paketInput.value = paket
  hargaInput.value = "Rp " + harga
  form.scrollIntoView({ behavior: "smooth" })
}

function toast(msg) {
  let t = document.getElementById("toast")
  t.innerText = msg
  t.style.display = "block"
  setTimeout(() => t.style.display = "none", 2500)
}

function kirim() {
  let nama = document.getElementById("nama").value
  let wa = document.getElementById("wa").value
  let paket = document.getElementById("paket").value
  let harga = document.getElementById("harga").value

  if (!nama || !wa || !paket) {
    toast("Isi semua data!")
    return
  }

  toast("Mengalihkan ke WhatsApp...")

  let admin = "6285695344508"

  let pesan = `Halo Admin, saya ingin order panel

Nama: ${nama}
WA: ${wa}
Paket: ${paket}
Harga: ${harga}
Reff: ${reff}`

  setTimeout(() => {
    window.open(`https://wa.me/${admin}?text=${encodeURIComponent(pesan)}`)
  }, 1000)
}
