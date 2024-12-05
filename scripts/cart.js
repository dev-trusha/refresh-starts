$(document).ready(function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = $("#cart-container");

    if (cart.length === 0) {
        cartContainer.append("<p class='text-center'>Your cart is empty.</p>");
    } else {
        cart.forEach(item => {
            console.log("Rendering item from cart:", item.name, item.image);

            cartContainer.append(`
                <div class="col-md-3 py-3 py-md-0">
                    <div class="card">
                        <img src="${item.image}" alt="${item.name}" class="product-image" />
                        <div class="card-body">
                            <h3 class="text-center product-name">${item.name}</h3>
                            <p class="text-center product-desc">Lorem ipsum dolor sit amet.</p>
                            <div class="star text-center">
                                <i class="fa-solid fa-star checked"></i>
                                <i class="fa-solid fa-star checked"></i>
                                <i class="fa-solid fa-star checked"></i>
                                <i class="fa-solid fa-star checked"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <h2>${item.price} 
                                <span>
                                    <li class="fa-regular fa-heart"></li>
                                    <li class="fa-solid fa-cart-shopping"></li>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            `);
        });
    }
});
$(document).ready(function () {
    $('#clear-cart').on('click', function() {
        localStorage.removeItem('cart');
        location.reload();
    });
});
$(document).ready(function () {
    $('#checkout-btn').on('click', function() {
        window.location.href = 'checkout.html';
    });
});
