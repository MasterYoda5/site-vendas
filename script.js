let cart = [];
let cartCount = 0;

function toggleCart() {
    const cartElement = document.getElementById("cart");
    cartElement.classList.toggle("hidden");
}

function login() {
    // Simular processo de login
    alert("Login bem-sucedido!");
}

function addToCart(productNumber) {
    cart.push(`Produto ${productNumber}`);
    cartCount++;
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.innerText = cartCount;
}

function checkout() {
    const cartElement = document.getElementById("cart");
    const paymentElement = document.getElementById("payment");
    cartElement.classList.add("hidden");
    paymentElement.classList.remove("hidden");
}

function clearCart() {
    cart = [];
    cartCount = 0;
    updateCartCount();
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";
}

function pay() {
    const paymentElement = document.getElementById("payment");
    const creditCardElement = document.getElementById("credit-card");
    paymentElement.classList.add("hidden");
    credit
}