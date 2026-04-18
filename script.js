const reff = new URLSearchParams(window.location.search).get("reffid") || "-"

function pilih(paket, harga) {
  document.getElementById("paket").value = paket
  document.getElementById("harga").value = "Rp " + harga
  document.getElementById("form").scrollIntoView()
  toast("Pilih " + paket)
}

function toast(msg) {
  let t = document.getElementById("toast")
  t.innerText = msg
  t.style.display = "block"
  setTimeout(() => t.style.display = "none", 2000)
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

  let admin = "6285695344508"

  let pesan = `Halo Admin, saya ingin order panel

Nama: ${nama}
WA: ${wa}
Paket: ${paket}
Harga: ${harga}
Reff: ${reff}`

  window.open(`https://wa.me/${admin}?text=${encodeURIComponent(pesan)}`)
}

// fake notif pembeli
setInterval(() => {
  let live = document.getElementById("live")
  let nama = ["Andi","Budi","Rian","Dimas"][Math.floor(Math.random()*4)]
  let gb = Math.floor(Math.random()*10)+1

  live.innerText = `${nama} membeli ${gb}GB`
  live.style.display = "block"

  setTimeout(() => live.style.display = "none", 3000)
}, 5000)
