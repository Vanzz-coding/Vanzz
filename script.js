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

// invoice
function buatInvoice(){
  let id = "INV"+Math.floor(Math.random()*999999)

  invoiceBox.style.display="block"

  invId.innerText = id
  invPaket.innerText = pilih.paket
  invHarga.innerText = "Rp "+pilih.harga

  window.scrollTo(0,document.body.scrollHeight)
}

// zoom QR
function zoomQR(){
  document.getElementById("qrisModal").style.display="flex"
}

function closeQR(){
  document.getElementById("qrisModal").style.display="none"
}

// kirim bukti WA
function kirimBukti(){
  let admin="6285695344508"

  let text=`Halo admin, saya sudah transfer

ID: ${invId.innerText}
Paket: ${invPaket.innerText}
Harga: ${invHarga.innerText}`

  window.open(`https://wa.me/${admin}?text=${encodeURIComponent(text)}`)
}

// reseller telegram
function beliReseller(){
  let username="VanxxPanel"

  window.open(`https://t.me/${username}`)
}
