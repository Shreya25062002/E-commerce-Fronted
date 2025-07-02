const products = [
  { id: 1, name: "Wireless Headphones", price: 2999, img: "https://via.placeholder.com/250" },
  { id: 2, name: "Smartwatch", price: 4999, img: "https://via.placeholder.com/250" },
  { id: 3, name: "Bluetooth Speaker", price: 1999, img: "https://via.placeholder.com/250" },
  { id: 4, name: "Gaming Mouse", price: 1499, img: "https://via.placeholder.com/250" },
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

function displayProducts() {
  if (!productList) return;
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Item added to cart!");
}

function updateCartCount() {
  if (cartCount) cartCount.textContent = cart.length;
}

displayProducts();
updateCartCount();
