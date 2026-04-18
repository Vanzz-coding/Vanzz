let pilih = { paket:"1GB", harga:"1000" }

// pilih panel
document.querySelectorAll(".ram-box").forEach(el=>{
  el.onclick = () => {
    document.querySelectorAll(".ram-box").forEach(x=>x.classList.remove("active"))
    el.classList.add("active")

    pilih.paket = el.dataset.p
    pilih.harga = el.dataset.h
  }
})

// buat invoice
function buatInvoice(){
  let id = "INV"+Math.floor(Math.random()*999999)

  invoiceBox.style.display="block"

  invId.innerText = id
  invPaket.innerText = pilih.paket
  invHarga.innerText = "Rp "+pilih.harga

  window.scrollTo(0,document.body.scrollHeight)
}

// fake auto
function selesaiBayar(){
  let user = "user" + Math.floor(Math.random()*9999)
  let pass = "pw" + Math.floor(Math.random()*99999)

  loginBox.style.display="block"

  logUser.innerText = user
  logPass.innerText = pass
}

// RESELLER KE TELEGRAM
function beliReseller(){
  let username = "VanxxPanel" // ganti
  let text = "PERMISI BG MAU JOIN RESS PANEL"

  window.open(`https://t.me/${username}?text=${encodeURIComponent(text)}`)
}
