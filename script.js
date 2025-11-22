document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    let toast = document.querySelector(".cart-notify");
    toast.style.bottom = "20px";
    toast.style.opacity = "1";

    setTimeout(() => {
      toast.style.bottom = "-50px";
      toast.style.opacity = "0";
    }, 1500);
  });
});

// CART ARRAY
let cart = [];

// Add to cart buttons
document.querySelectorAll(".add-cart").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    
    let card = btn.closest(".card");
    let name = card.querySelector("h3").textContent;
    let price = parseFloat(card.querySelector(".price").textContent.replace("$", ""));

    cart.push({ name, price });

    updateCart();
    triggerToast();
  });
});

// Show notification
function triggerToast() {
  let toast = document.querySelector(".cart-notify");
  toast.style.bottom = "20px";
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.bottom = "-50px";
    toast.style.opacity = "0";
  }, 1500);
}

// Update cart UI
function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;

  let itemsDisplay = document.querySelector(".cart-items");
  itemsDisplay.innerHTML = "";

  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;

    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name} - $${item.price.toFixed(2)}</span>
      <button onclick="removeItem(${i})">X</button>
    `;
    itemsDisplay.appendChild(div);
  });

  document.getElementById("cartTotal").textContent = "$" + total.toFixed(2);
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Open / Close cart
document.querySelector(".open-cart").addEventListener("click", () => {
  document.getElementById("cartSidebar").classList.add("active");
});

document.querySelector(".close-cart").addEventListener("click", () => {
  document.getElementById("cartSidebar").classList.remove("active");
});
