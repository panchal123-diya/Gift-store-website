document.addEventListener('DOMContentLoaded', function() {
    const jewelryItems = document.querySelectorAll('.jewelry-item');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    jewelryItems.forEach(jewelry => {
        jewelry.addEventListener('click', function() {
            alert('You clicked on a jewelry item!');
        });
    });

    function updateTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('p').textContent.replace('Price: $', ''));
            const quantity = parseInt(item.querySelector('input').value);
            total += price * quantity;
        });
        totalElement.textContent = total.toFixed(2);
    }

    cartItems.forEach(item => {
        const removeButton = item.querySelector('.remove-item');
        const quantityInput = item.querySelector('input');

        removeButton.addEventListener('click', function() {
            item.remove();
            updateTotal();
        });

        quantityInput.addEventListener('change', function() {
            updateTotal();
        });
    });

    checkoutButton.addEventListener('click', function() {
        alert('Proceeding to checkout!');
    });

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (email && password) {
                alert('Login successful!');
                // Here you can add code to handle the login process
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;

            if (name && email && password && confirmPassword) {
                if (password === confirmPassword) {
                    alert('Registration successful!');
                    // Here you can add code to handle the registration process
                } else {
                    alert('Passwords do not match.');
                }
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Initial total calculation
    updateTotal();
}); 