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

document.querySelectorAll('.plus-btn').forEach(button => {
    button.addEventListener('click', function() {
      const quantitySpan = this.parentElement.querySelector('input');
      let quantity = parseInt(quantitySpan.value);
      quantitySpan.value = quantity + 1;
    });
  });
  
  document.querySelectorAll('.minus-btn').forEach(button => {
    button.addEventListener('click', function() {
      const quantitySpan = this.parentElement.querySelector('input');
      let quantity = parseInt(quantitySpan.value);
      if (quantity > 1) {
        quantitySpan.value = quantity - 1;
      }
    });
  });
  
  
  document.querySelectorAll('.remove-icon').forEach(button => {
    button.addEventListener('click', function() {
      console.log(this.parentElement.parentElement);
      this.parentElement.parentElement.remove();
      
    });
  });