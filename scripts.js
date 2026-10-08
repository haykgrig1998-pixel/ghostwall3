// Սպասեք մինչև DOM-ը լիովին բեռնվի
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing scripts...');
    
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        console.log('Mobile menu elements found');
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    } else {
        console.log('Mobile menu elements NOT found');
    }
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    
    const menuItems = [
        {
            category: 'appetizers',
            name: 'Truffle Arancini',
            description: 'Crispy risotto balls with black truffle and mozzarella, served with truffle aioli.',
            price: '$14',
            tags: ['vegetarian', 'chefSpecial'],
            image: 'https://i.pinimg.com/originals/e0/f6/e2/e0f6e2a0e6470163da65bbe54d630de3.jpg'
        },
        {
            category: 'appetizers',
            name: 'Spicy Tuna Tartare',
            description: 'Fresh yellowfin tuna with avocado, cucumber, and spicy sesame dressing.',
            price: '$18',
            tags: ['spicy'],
            image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80' // FIXED
        },
        {
        category: "appetizers",
        name: "Burrata & Heirloom Tomatoes",
        description: "Fresh burrata cheese with heirloom tomatoes, basil, balsamic reduction, and olive oil.",
        price: "$18",
        tags: ["vegetarian", "cheese", "fresh"],
        image: "https://avatars.mds.yandex.net/i?id=17b43354442fe5404f97a7cc0feb35b1_l-11918814-images-thumbs&n=13"
        },
        {
            category: 'main-courses',
            name: 'Herb-Crusted Rack of Lamb',
            description: 'New Zealand lamb with rosemary crust, mint jus, and roasted baby vegetables.',
            price: '$42',
            tags: ['chef-special'],
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80' // FIXED
        },
        {
            category: 'main-courses',
            name: 'Wild Mushroom Risotto',
            description: 'Carnaroli rice with wild mushrooms, white wine, and parmesan.',
            price: '$26',
            tags: ['vegetarian'],
            image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80' // FIXED
        },
        {
        category: "main-courses",
        name: "Filet Mignon",
        description: "8oz grass-fed beef tenderloin with red wine reduction, mashed potatoes, and asparagus.",
        price: "$48",
        tags: ["beef", "steak", "signature"],
        image: "https://i.pinimg.com/originals/a3/14/9e/a3149e342551aaad3bd4061dee3b2a87.jpg"
},
        {
            category: 'seafood',
            name: 'Pan-Seared Scallops',
            description: 'Day boat scallops with cauliflower purée, pancetta, and lemon butter sauce.',
            price: '$34',
            tags: ['chef-special'],
            image: 'https://i.ytimg.com/vi/ftmlJkofWFI/maxresdefault.jpg' 
        },
        {
            category: 'seafood',
            name: 'Grilled Salmon',
            description: 'Atlantic salmon with herb crust, lemon dill sauce, and seasonal vegetables.',
            price: '$32',
            tags: [],
            image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80' // FIXED
        },
        {
        category: "seafood",
        name: "Garlic Butter Lobster Tail",
        description: "Fresh Atlantic lobster tail grilled with garlic butter and herbs.",
        price: "$42",
        tags: ["lobster", "grilled", "signature"],
        image: "https://i.ytimg.com/vi/u8Qy4cPGHg4/maxresdefault.jpg"
},
        {
            category: 'desserts',
            name: 'Chocolate Soufflé',
            description: 'Dark chocolate soufflé with vanilla bean ice cream and chocolate sauce.',
            price: '$14',
            tags: ['vegetarian'],
            image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80' // FIXED
        },
        {
            category: 'desserts',
            name: 'Berry Pavlova',
            description: 'Crisp meringue with whipped cream, fresh berries, and passion fruit coulis.',
            price: '$12',
            tags: ['vegetarian'],
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80' // FIXED
        },
        {
        category: "desserts",
        name: "Tiramisu",
        description: "Italian coffee-flavored dessert with layers of mascarpone and ladyfingers.",
        price: "$10",
        tags: ["coffee", "italian", "creamy"],
        image: "https://i.ytimg.com/vi/RCjbV2i5cGs/maxresdefault.jpg"
},
        {
            category: 'drinks',
            name: 'Craft Cocktails',
            description: 'Selection of signature cocktails made with premium spirits and fresh ingredients.',
            price: '$16',
            tags: [],
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80' // FIXED
        },
        {
        category: "drinks",
        name: "Classic Old Fashioned",
        description: "Bourbon, sugar, bitters, and orange peel - a timeless classic.",
        price: "$16",
        tags: ["bourbon", "classic", "strong"],
        image: "https://i.pinimg.com/736x/9d/57/41/9d57410b3ac5bd5cde432c8a3736736c.jpg"
},
{
        category: "drinks",
        name: "Elderflower Gin Fizz",
        description: "Gin, St. Germain, lemon juice, and soda water with edible flowers.",
        price: "$15",
        tags: ["gin", "floral", "refreshing"],
        image: "https://charmingcocktails.com/wp-content/uploads/2022/04/elderflower-gin-fizz-cocktail-0004.jpg"
},

        {
        category: "hot drinks",
        name: "Hot Chocolate Supreme",
        description: "Rich, creamy hot chocolate topped with whipped cream and chocolate shavings.",
        price: "$8",
        tags: ["hot", "non-alcoholic", "dessert"],
        image: "https://s.yimg.com/ny/api/res/1.2/U2PN8ucFmlxEkkHBKaTTFw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzE7Y2Y9d2VicA--/https://media.zenfs.com/en/mashed_603/df5680ba7c03527aef05479cc6dde1db"
        },
{
    category: "hot drinks",
    name: "Spiced Chai Latte",
    description: "Warm chai tea with steamed milk, honey, and aromatic spices.",
    price: "$7",
    tags: ["hot", "non-alcoholic", "tea"],
    image: "https://i.pinimg.com/736x/66/80/cf/6680cfeb9e62d003dfe754bd5e80474e.jpg"
},
{
    category: "hot drinks",
    name: "Gourmet Coffee",
    description: "Premium single-origin coffee, freshly brewed.",
    price: "$6",
    tags: ["hot", "non-alcoholic"],
    image: "https://i.pinimg.com/originals/4d/af/8f/4daf8f98bfa22fc8aa6f7a671a4ca0e4.jpg?nii=t"
}

    ];
    
    console.log('Menu items loaded:', menuItems.length);
    
    // Categories
    const categories = [
        { id: 'all', name: 'All Menu' },
        { id: 'appetizers', name: 'Appetizers' },
        { id: 'main-courses', name: 'Main Courses' },
        { id: 'seafood', name: 'Seafood' },
        { id: 'desserts', name: 'Desserts' },
        { id: 'drinks', name: 'Drinks' },
        { id : 'hot drinks', name : 'Hot Drinks' }
    ];
    
    // Initialize menu
    const menuCategories = document.getElementById('menuCategories');
    const menuItemsContainer = document.getElementById('menuItems');
    
    console.log('Menu categories element:', menuCategories);
    console.log('Menu items container:', menuItemsContainer);
    
    if (menuCategories && menuItemsContainer) {
        console.log('Initializing menu...');
        
        // Create category buttons
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.textContent = category.name;
            button.setAttribute('data-category', category.id);
            
            if (category.id === 'all') {
                button.classList.add('active');
            }
            
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Filter menu items
                filterMenuItems(category.id);
            });
            
            menuCategories.appendChild(button);
        });
        
        // Function to filter menu items
        function filterMenuItems(category) {
            console.log('Filtering menu for category:', category);
            menuItemsContainer.innerHTML = '';
            
            const filteredItems = category === 'all' 
                ? menuItems 
                : menuItems.filter(item => item.category === category);
            
            console.log('Filtered items:', filteredItems.length);
            
            filteredItems.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                
                // Create tags HTML
                let tagsHtml = '';
                item.tags.forEach(tag => {
                    tagsHtml += `<span class="tag ${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`;
                });
                
                menuItem.innerHTML = `
                    <div class="menu-item-img">
                        <img src="${item.image}" alt="${item.name}" loading="lazy" 
                             onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80'; this.alt='Image not available'">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <div class="menu-item-name">${item.name}</div>
                            <div class="menu-item-price">${item.price}</div>
                        </div>
                        <div class="menu-item-desc">${item.description}</div>
                        ${tagsHtml ? `<div class="menu-item-tags">${tagsHtml}</div>` : ''}
                    </div>
                `;
                
                // Add hover effect
                menuItem.addEventListener('mouseenter', () => {
                    menuItem.style.transform = 'translateY(-10px)';
                });
                
                menuItem.addEventListener('mouseleave', () => {
                    menuItem.style.transform = 'translateY(0)';
                });
                
                menuItemsContainer.appendChild(menuItem);
            });
        }
        
        // Load all menu items initially
        filterMenuItems('all');
    } else {
        console.error('Menu elements not found in DOM');
    }
    
    // Testimonials Data - URL-ները նույնպես ուղղված են
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Food Critic',
            content: 'Mini Restaurants sets the standard for fine dining in the city. Every dish is a masterpiece, and the service is impeccable.',
            rating: 5,
            image: 'https://www.theparisreview.org/blog/wp-content/uploads/2021/04/whiting031621sarahstewartjohnson061beowulfsheehan.jpg' 
        },
        {
            name: 'Michael Chen',
            role: 'Regular Guest',
            content: 'I\'ve celebrated three anniversaries here, and each time has been magical. The romantic dinner package is absolutely worth it!',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' // FIXED
        },
        {
            name: 'Emma Rodriguez',
            role: 'Food Blogger',
            content: 'As a food blogger, I visit many restaurants, but Mini Restaurants consistently delivers exceptional quality and creativity.',
            rating: 4,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' // FIXED
        },
        {
            name: 'David Wilson',
            role: 'Business Executive',
            content: 'Perfect for business dinners. The private dining area and exceptional wine selection always impress our clients.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' // FIXED
        }
    ];
    
    // Initialize testimonials slider
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    const testimonialControls = document.getElementById('testimonialControls');
    
    if (testimonialsContainer && testimonialControls) {
        console.log('Initializing testimonials slider...');
        let currentTestimonial = 0;
        
        // Create testimonial cards and controls
        testimonials.forEach((testimonial, index) => {
            // Create testimonial card
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            
            // Create rating stars
            let stars = '';
            for (let i = 0; i < 5; i++) {
                stars += i < testimonial.rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
            }
            
            testimonialCard.innerHTML = `
                <div class="testimonial-content">
                    ${testimonial.content}
                </div>
                <div class="testimonial-author">
                    <div class="author-img">
                        <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy"
                             onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=200&q=80'; this.alt='Image not available'">
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                        <div class="rating">${stars}</div>
                    </div>
                </div>
            `;
            
            testimonialsContainer.appendChild(testimonialCard);
            
            // Create slider control button
            const sliderBtn = document.createElement('button');
            sliderBtn.className = `slider-btn ${index === 0 ? 'active' : ''}`;
            sliderBtn.setAttribute('data-index', index);
            sliderBtn.addEventListener('click', () => {
                goToTestimonial(index);
            });
            testimonialControls.appendChild(sliderBtn);
        });
        
        // Function to go to specific testimonial
        function goToTestimonial(index) {
            currentTestimonial = index;
            testimonialsContainer.style.transform = `translateX(-${currentTestimonial * 100}%)`;
            
            // Update active slider button
            document.querySelectorAll('#testimonialControls .slider-btn').forEach((btn, idx) => {
                if (idx === currentTestimonial) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
        
        // Auto slide testimonials every 6 seconds
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            goToTestimonial(currentTestimonial);
        }, 6000);
    }
    
    // Reservation Form Submission
    const reservationForm = document.getElementById('reservationForm');
    
    if (reservationForm) {
        console.log('Reservation form found');
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const guests = document.getElementById('guests').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const location = document.getElementById('location').value;
            
            // Validate form
            if (!name || !email || !phone || !guests || !date || !time) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Format date for display
            const formattedDate = new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Show success message
            alert(`Thank you, ${name}! Your reservation for ${guests} people on ${formattedDate} at ${time} has been received. We will confirm your booking via email at ${email} within 30 minutes.`);
            
            // Reset form
            reservationForm.reset();
            
            // Set minimum date to today
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('date').min = today;
        });
        
        // Set minimum date to today for reservation form
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.getElementById('date');
        if (dateInput) {
            dateInput.min = today;
            
            // Set default date to tomorrow
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.value = tomorrow.toISOString().split('T')[0];
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add some additional interactive features
    
    // Current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Add loading animation AND error handling for images
    const images = document.querySelectorAll('img');
    console.log('Total images found:', images.length);
    
    images.forEach(img => {
        // Loading effect
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            console.log('Image loaded:', this.src);
        });
        
        // Error handling
        img.addEventListener('error', function() {
            console.error('Image failed to load:', this.src);
            this.onerror = null; // Prevent infinite loop
            this.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80';
            this.alt = 'Image not available';
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded (from cache)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
    
    // Newsletter subscription (example)
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Thank you! You've been added to our newsletter with email: ${email}`);
                this.reset();
            }
        });
    }
    
    console.log('Script initialization complete');
});
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    const phone = document.getElementById('phone').value;
    
    
    if (!/^[0-9+\-\s()]{8,}$/.test(phone)) {
        e.preventDefault();
        alert("Խնդրում եմ մուտքագրեք ճիշտ հեռախոսահամար");
        return;
    }
    
    // Ամսաթվի վալիդացիա
    const date = document.getElementById('date').value;
    const selectedDate = new Date(date);
    const today = new Date();
    
    if (selectedDate < today) {
        e.preventDefault();
        alert("Խնդրում եմ ընտրեք ապագա ամսաթիվ");
        return;
    }
}); 