const reff = new URLSearchParams(location.search).get("reffid") || "-"
document.getElementById("reff").innerText = reff

let pilihPanel = { paket:"5GB", harga:"1000" }

// PANEL CLICK
document.querySelectorAll("#ramList .ram-box").forEach(el=>{
  el.onclick = () => {
    document.querySelectorAll("#ramList .ram-box").forEach(x=>x.classList.remove("active"))
    el.classList.add("active")

    pilihPanel.paket = el.dataset.p
    pilihPanel.harga = el.dataset.h

    toast("Pilih " + el.dataset.p)
  }
})

// RESELLER CLICK
document.querySelectorAll("#resList .ram-box").forEach(el=>{
  el.onclick = () => {
    document.querySelectorAll("#resList .ram-box").forEach(x=>x.classList.remove("active"))
    el.classList.add("active")
    toast("Pilih Reseller")
  }
})

// TOAST
function toast(msg){
  let t=document.getElementById("toast")
  t.innerText=msg
  t.style.display="block"
  setTimeout(()=>t.style.display="none",2000)
}

// KIRIM PANEL
function kirimPanel(){
  let admin="6285695344508"

  let text=`Order Panel
Paket: ${pilihPanel.paket}
Harga: Rp${pilihPanel.harga}
Reff: ${reff}`

  window.open(`https://wa.me/${admin}?text=${encodeURIComponent(text)}`)
}

// KIRIM RESELLER
function kirimReseller(){
  let admin="6285695344508"

  let text=`Order Reseller Panel
Harga: Rp10.000
Akses: Permanen
Reff: ${reff}`

  window.open(`https://wa.me/${admin}?text=${encodeURIComponent(text)}`)
}
