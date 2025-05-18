document.addEventListener('DOMContentLoaded', function() {
    const featuredProducts = [
        { name: 'Personalized Mug', image: 'images/mugs/mug1.jpg', price: '$15' },
        { name: 'Custom Photo Book', image: 'images/photo_books/book1.jpg', price: '$30' },
        { name: 'Engraved Necklace', image: 'images/jewelry/necklace1.jpg', price: '$25' }
    ];

    const productsContainer = document.querySelector('.featured-products');

    featuredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productsContainer.appendChild(productElement);
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Dropdown animation
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
        dropdownMenu.style.animation = 'slideDown 0.3s ease-out';
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            dropdownMenu.style.display = 'none';
        }, 300);
    });

    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    // Map of search terms to product pages
    const productPages = {
        'kids': 'path/to/kids.html',
        'phone case': 'path/to/phonecase.html',
        'home decor': 'path/to/home_decor.html',
        'watches': 'path/to/watches.html',
        'jewellery': 'path/to/jewelry.html',
        'soft toys': 'path/to/soft_toys.html',
        'crockery': 'path/to/crockery.html',
        'wallet': 'path/to/wallet.html',
    };

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const searchTerm = searchInput.value.trim().toLowerCase(); // Get search term

        // Check if the search term matches any product page
        if (productPages[searchTerm]) {
            window.location.href = productPages[searchTerm]; // Redirect to the product page
        } else {
            alert('Product not found. Please try another search term.'); // Show error message
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for your message! We'll get back to you soon.');
            contactForm.reset(); // Clear the form
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (name === '' || email === '' || password === '') {
            alert('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for signing up!');
            signupForm.reset(); // Clear the form
        }
    });

    function addToCart(productName, price) {
        alert(`${productName} added to cart!`);
        // Add logic to update the cart (e.g., store in localStorage or send to backend)
    }
}); 
document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('categoriesDropdown');
    const dropdownMenu = dropdownToggle.nextElementSibling;

    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
document.querySelector('.search-button').addEventListener('click', function () {
    const searchQuery = document.querySelector('.search-input').value;
    if (searchQuery) {
        window.location.href = `search.html?q=${encodeURIComponent(searchQuery)}`;
    }
}); 