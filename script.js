const reff = new URLSearchParams(location.search).get("reffid") || "-"
document.getElementById("reff").innerText = reff

function pilih(el,p,h){
  document.getElementById("paket").value=p
  document.getElementById("harga").value="Rp "+h

  document.querySelectorAll(".ram-box").forEach(e=>e.classList.remove("active"))
  el.classList.add("active")

  toast("Pilih "+p)
}

function toast(msg){
  let t=document.getElementById("toast")
  t.innerText=msg
  t.style.display="block"
  setTimeout(()=>t.style.display="none",2000)
}

function kirim(){
  let admin="6285695344508"

  let text=`Order Panel
Nama:${nama.value}
WA:${wa.value}
Paket:${paket.value}
Harga:${harga.value}
Reff:${reff}`

  window.open(`https://wa.me/${admin}?text=${encodeURIComponent(text)}`)
}
