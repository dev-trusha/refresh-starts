$(document).ready(function () {
    $(".add-to-wishlist").on("click", function () {
        // Navigate to the parent container to extract details
        const card = $(this).closest(".card");
        const productImage = card.find(".product-image").attr("src"); // Get the image source
        console.log(productImage);
        const productName = card.find(".product-name").text(); // Get the product name
        const productPrice = card.find(".price").text().trim(); // Get the product price

        // Change heart icon to filled
        $(this).removeClass("fa-regular").addClass("fa-solid");
        // Save to localStorage
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const productExists = wishlist.some(item => item.name === productName);
        const productExistsCart = cart.some(item => item.name === productName);

        if (!productExists) {
            wishlist.push({ name: productName, price: productPrice, image: productImage });
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert(`${productName} has been added to your wishlist!`);
        } else {
            alert(`${productName} is already in your wishlist!`);
        }

        if (!productExistsCart) {
            cart.push({ name: productName, price: productPrice, image: productImage });
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${productName} has been added to your cart!`);
        } else {
            alert(`${productName} is already in your cart!`);
        }
    });
    $(".add-to-cart").on("click", function () {
        const card = $(this).closest(".card");
        const productImage = card.find(".product-image").attr("src"); // Get the image source
        console.log(productImage);
        const productName = card.find(".product-name").text(); // Get the product name
        const productPrice = card.find(".price").text().trim(); // Get the product price

        $(this).removeClass('hollow-cart fa-solid').addClass('fa-solid');
        // Save to localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const productExists = cart.some(item => item.name === productName);

        if (!productExists) {
            cart.push({ name: productName, price: productPrice, image: productImage });
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${productName} has been added to your cart!`);
        } else {
            alert(`${productName} is already in your cart!`);
        }
    });
});
