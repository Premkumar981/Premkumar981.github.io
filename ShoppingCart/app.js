let items = [
  { id: 1, name: "Notebook", price: 45 },
  { id: 2, name: "Pen", price: 10 },
  { id: 3, name: "Bag", price: 120 }
]

let cart = {}

let productBox = document.getElementById("products")
let cartBox = document.getElementById("cart")

function loadProducts() {
  productBox.innerHTML = ""
  items.forEach(item => {
    let box = document.createElement("div")
    box.innerHTML = `${item.name} - ₹${item.price} <button onclick="add(${item.id})">Add</button>`
    productBox.appendChild(box)
  })
  renderCart()
}

function add(id) {
  cart[id] = (cart[id] || 0) + 1
  renderCart()
}

function plus(id) {
  cart[id] += 1
  renderCart()
}

function minus(id) {
  cart[id] -= 1
  if (cart[id] <= 0) delete cart[id]
  renderCart()
}

function renderCart() {
  cartBox.innerHTML = ""
  let total = 0
  Object.keys(cart).forEach(key => {
    let item = items.find(x => x.id == key)
    let qty = cart[key]
    let cost = qty * item.price
    total += cost
    let row = document.createElement("div")
    row.innerHTML = `${item.name} × ${qty} = ₹${cost} <button onclick="plus(${item.id})">+</button> <button onclick="minus(${item.id})">-</button>`
    cartBox.appendChild(row)
  })
  if (total > 0) {
    let t = document.createElement("p")
    t.style.marginTop = "10px"
    t.innerText = "Total: ₹" + total
    cartBox.appendChild(t)
  } else {
    cartBox.innerText = "Cart is empty."
  }
}

window.onload = loadProducts
