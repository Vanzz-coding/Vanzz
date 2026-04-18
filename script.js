let pilih = { paket:"1GB", harga:"1000" }

// PILIH RAM
document.querySelectorAll(".ram-box").forEach(el=>{
  el.onclick = () => {
    document.querySelectorAll(".ram-box").forEach(x=>x.classList.remove("active"))
    el.classList.add("active")

    pilih.paket = el.dataset.p
    pilih.harga = el.dataset.h
  }
})

// BUAT INVOICE
function buatInvoice(){
  let id = "INV"+Math.floor(Math.random()*999999)

  document.getElementById("invoiceBox").style.display="block"

  document.getElementById("invId").innerText=id
  document.getElementById("invPaket").innerText=pilih.paket
  document.getElementById("invHarga").innerText="Rp "+pilih.harga

  window.scrollTo(0,document.body.scrollHeight)
}

// KIRIM BUKTI
function kirimBukti(){
  let admin="6285695344508"

  let text=`Bukti Transfer

ID: ${invId.innerText}
Paket: ${invPaket.innerText}
Harga: ${invHarga.innerText}

Saya sudah transfer`

  window.open(`https://wa.me/${admin}?text=${encodeURIComponent(text)}`)
}
