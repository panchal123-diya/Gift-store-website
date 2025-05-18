document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
 
    product.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
}); 