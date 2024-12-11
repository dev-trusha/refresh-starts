    // Load the header dynamically
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });
fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navigation-placeholder').innerHTML = data;
    });
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    }); 


$(document).ready(function () {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishlistContainer = $("#wishlist-container");

    if (wishlist.length === 0) {
        wishlistContainer.append("<p class='text-center'>Your wishlist is empty.</p>");
    } else {
        wishlist.forEach(item => {
            console.log("Rendering item from wishlist:", item.name, item.image);

             // Display the product's rating on the wishlist page
             let stars = '';
             for (let i = 0; i < 5; i++) {
                 if (i < item.rating) {
                     stars += '<i class="fa-solid fa-star checked"></i>'; 
                 } else {
                     stars += '<i class="fa-solid fa-star"></i>'; 
                 }
             }

            wishlistContainer.append(`
                <div class="col-md-3 py-3 py-md-0">
                    <div class="card">
                        <img src="${item.image}" alt="${item.name}" class="product-image" />
                        <div class="card-body">
                            <h3 class="text-center product-name">${item.name}</h3>
                            <p class="text-center product-desc">${item.desc || "Description not available."}</p>
                            <div class="star text-center">
                                ${stars}  
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
