const reff = new URLSearchParams(location.search).get("reffid") || "-"
document.getElementById("reff").innerText = reff

function pilih(p,h){
  paket.value=p
  harga.value="Rp "+h
  document.querySelectorAll(".ram-box").forEach(e=>e.classList.remove("active"))
  event.currentTarget.classList.add("active")
  toast("Pilih "+p)
}

function toast(t){
  let x=document.getElementById("toast")
  x.innerText=t
  x.style.display="block"
  setTimeout(()=>x.style.display="none",2000)
}

function kirim(){
  let admin="62XXXXXXXXXX"
  let text=`Order Panel
Nama:${nama.value}
WA:${wa.value}
Paket:${paket.value}
Harga:${harga.value}
Reff:${reff}`

  window.open(`https://wa.me/${admin}?text=${encodeURIComponent(text)}`)
}
