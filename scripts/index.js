// Load the header,nav and footer dynamically
setInterval(() => document.getElementById('next-btn').click(), 3000);
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });
    fetch('banner.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('banner-placeholder').innerHTML = data;
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
    $(".add-to-wishlist").on("click", function () {
        // Navigate to the parent container to extract details
        const card = $(this).closest(".card");
        const productImage = card.find(".product-image").attr("src"); // Get the image source
        console.log(productImage);
        const productName = card.find(".product-name").text(); // Get the product name
        const productPrice = card.find(".price").text().trim(); // Get the product price

        const rating = card.find('.star .checked').length;
        // Change heart icon to filled
        $(this).removeClass("fa-regular").addClass("fa-solid");
        // Save to localStorage
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const productExists = wishlist.some(item => item.name === productName);

        if (!productExists) {
            wishlist.push({ name: productName, price: productPrice, image: productImage, rating: rating });
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert(`${productName} has been added to your wishlist!`);
        } else {
            alert(`${productName} is already in your wishlist!`);
        }

    });
       // Rating System
       $(".card").each(function () {
        const stars = $(this).find('.star i');
        stars.on("click", function () {
            const rating = $(this).data("rating");

            // Reset all stars, then highlight up to the clicked one
            stars.removeClass('checked');
            stars.slice(0, rating).addClass('checked');

            console.log(`Rated ${rating} stars for product: ${$(this).closest(".card").find(".product-name").text()}`);
        });
    });
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


// Get all product rating
const productCards = document.querySelectorAll('.card');

productCards.forEach(card => {
    const stars = card.querySelectorAll('.star i');  

    stars.forEach(star => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('checked'));

            const rating = star.getAttribute('data-rating');

            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('checked');
            }

            console.log(`Rated ${rating} stars for product: ${card.querySelector('.product-name').textContent}`);
        });
    });
});

