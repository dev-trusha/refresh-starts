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