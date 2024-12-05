$(document).ready(function () {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishlistContainer = $("#wishlist-container");

    if (wishlist.length === 0) {
        wishlistContainer.append("<p class='text-center'>Your wishlist is empty.</p>");
    } else {
        wishlist.forEach(item => {
            console.log("Rendering item from wishlist:", item.name, item.image);

            wishlistContainer.append(`
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
                                    <li class="fa-solid fa-heart"></li>
                                    <li class="fa-solid fa-cart-shopping hollow-cart"></li>
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
    $('#clear-wishlist').on('click', function() {
        localStorage.removeItem('wishlist');
        location.reload();
    });
});
