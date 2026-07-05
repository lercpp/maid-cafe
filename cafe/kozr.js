const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart");
const totalElement = document.getElementById("total");

if (cartContainer && totalElement) {

    let total = 0;

    cart.forEach(product => {

        const item = document.createElement("div");

        item.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price} ₽</p>
        `;

        cartContainer.appendChild(item);

        total += product.price;
    });

    totalElement.textContent = `Итого: ${total} ₽`;
}