const reff = new URLSearchParams(location.search).get("reffid") || "-"

function pilih(paket, harga){
  paket.value = paket
  harga.value = "Rp "+harga
  form.scrollIntoView()
  toast("Pilih "+paket)
}

function toast(msg){
  let t=document.getElementById("toast")
  t.innerText=msg
  t.style.display="block"
  setTimeout(()=>t.style.display="none",2000)
}

function kirim(){
  let nama=document.getElementById("nama").value
  let wa=document.getElementById("wa").value
  let paket=document.getElementById("paket").value
  let harga=document.getElementById("harga").value

  if(!nama||!wa||!paket){toast("Isi semua!");return}

  let admin="6285695344508"

  let teks=`Order Panel
Nama:${nama}
WA:${wa}
Paket:${paket}
Harga:${harga}
Reff:${reff}`

  window.open(`https://wa.me/${admin}?text=${encodeURIComponent(teks)}`)
}

// live fake
setInterval(()=>{
  let l=document.getElementById("live")
  let n=["Rizky","Dimas","Fajar"][Math.random()*3|0]
  let g=Math.floor(Math.random()*10)+1
  l.innerText=`${n} beli ${g}GB`
  l.style.display="block"
  setTimeout(()=>l.style.display="none",3000)
},5000)
