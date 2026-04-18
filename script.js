const reff = new URLSearchParams(location.search).get("reffid") || "-"
document.getElementById("reff").innerText = reff

function pilih(paket,harga){
  paketInput.value = paket
  hargaInput.value = "Rp "+harga
  toast("Pilih "+paket)
}

function toast(msg){
  let t=document.getElementById("toast")
  t.innerText=msg
  t.style.display="block"
  setTimeout(()=>t.style.display="none",2000)
}

function kirim(){
  let nama=nama.value
  let wa=wa.value
  let paket=paketInput.value
  let harga=hargaInput.value

  let admin="6285695344508"

  let text=`Order Panel
Nama:${nama}
WA:${wa}
Paket:${paket}
Harga:${harga}
Reff:${reff}`

  window.open(`https://wa.me/${admin}?text=${encodeURIComponent(text)}`)
}
