const urlParams = new URLSearchParams(window.location.search)
const reff = urlParams.get("reffid") || "-"

function pilih(paket, harga) {
  document.getElementById("paket").value = paket
  document.getElementById("harga").value = "Rp " + harga
  document.getElementById("form").scrollIntoView({ behavior: "smooth" })
}

function showPopup(text) {
  let pop = document.getElementById("popup")
  pop.innerText = text
  pop.style.display = "block"

  setTimeout(() => {
    pop.style.display = "none"
  }, 3000)
}

function kirim() {
  let nama = document.getElementById("nama").value
  let wa = document.getElementById("wa").value
  let paket = document.getElementById("paket").value
  let harga = document.getElementById("harga").value

  if (!nama || !wa || !paket) {
    showPopup("Lengkapi data dulu!")
    return
  }

  showPopup("Mengalihkan ke WhatsApp...")

  let admin = "6285695344508"

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
