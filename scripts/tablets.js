// Load the header,nav and footer dynamically
setInterval(() => document.getElementById('next-btn').click(), 3000);
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
    const tabletProducts = JSON.parse(localStorage.getItem("tabletProducts")) || [];
    const tabletContainer = $("#tablets-container");

    // Check if there are laptop products to display
    if (tabletProducts.length === 0) {
        tabletContainer.append("<p class='text-center'>No products found in this category.</p>");
    } else {
        // Render each laptop product
        tabletProducts.forEach(item => {

                         // Display the product's rating on the wishlist page
                         let stars = '';
                         for (let i = 0; i < 5; i++) {
                             if (i < item.rating) {
                                 stars += '<i class="fa-solid fa-star checked"></i>'; 
                             } else {
                                 stars += '<i class="fa-solid fa-star"></i>'; 
                             }
                         }
            
            tabletContainer.append(`
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
                                    <li class="fa-regular fa-heart add-to-wishlist"></li>
                                    <li class="fa-solid fa-cart-shopping hollow-cart add-to-cart"></li>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            `);
        });
        
    }

});

//Search function
function search() {
    let filter = document.getElementById('find').value.toUpperCase();

    let container = document.querySelector('#product-cards .row');
    let items = Array.from(container.getElementsByClassName('col-md-3'));

    items.forEach(item => {
        let name = item.querySelector('.product-name');
        if (name) {
            let textValue = name.textContent || name.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                item.style.display = "block"; 
            } else {
                item.style.display = "none"; 
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const isFreshReload = sessionStorage.getItem('freshReload') === null;

    if (isFreshReload) {
        localStorage.clear();
        sessionStorage.clear();

        document.querySelectorAll('input, textarea').forEach(input => input.value = '');
        const tabletContainer = document.getElementById('tablets-container');
        if (tabletContainer) tabletContainer.innerHTML = '';

        console.log('Fresh reload detected. Data cleared.');

        sessionStorage.setItem('freshReload', 'true');
    } else {
        console.log('Page reload during session. Data preserved.');
    }

});
