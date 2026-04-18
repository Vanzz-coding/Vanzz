const express = require("express")
const axios = require("axios")
const app = express()

app.use(express.json())

let orders = {}

const PTERO = {
  url: "https://vanxpanel.markethostinger.my.id",
  key: "ptla_BIMHlExZTbW9GxuMwuzcVr3fSrz2Cgw67yvDnfxYBXn"
}

// CREATE ORDER
app.post("/order", async (req, res) => {
  const { nama, wa, paket, reff } = req.body

  const hargaList = {
    "1GB": 1000,
    "2GB": 2000,
    "UNLI": 5000
  }

  const id = "INV" + Date.now()

  orders[id] = {
    nama, wa, paket,
    harga: hargaList[paket],
    reff,
    status: "pending"
  }

  res.json({
    id,
    harga: orders[id].harga
  })
})


// CALLBACK BAYAR
app.post("/callback", async (req, res) => {
  const { merchant_ref } = req.body

  const order = orders[merchant_ref]
  if (!order) return res.send("invalid")

  // CREATE USER PANEL
  const user = await axios.post(`${PTERO.url}/api/application/users`, {
    email: `${order.nama}@gmail.com`,
    username: order.nama,
    first_name: order.nama,
    last_name: "User",
    password: "12345678"
  }, {
    headers: {
      Authorization: `Bearer ${PTERO.key}`
    }
  })

  order.status = "success"

  console.log("Kirim WA ke:", order.wa)

  res.send("ok")
})

app.listen(3000)
