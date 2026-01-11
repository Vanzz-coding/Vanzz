function addCart() {
  let price = document.getElementById("paket").value;
  document.getElementById("total").innerText = price;
  document.getElementById("cart").style.display = "block";
}

function closeCart() {
  document.getElementById("cart").style.display = "none";
}