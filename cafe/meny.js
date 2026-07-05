const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const product = {
            name: button.dataset.name,
            price: Number(button.dataset.price)
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Товар добавлен в корзину!");
    });
});