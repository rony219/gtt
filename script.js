// Sample data to simulate hotel information
const hotels = [
    {
        id: 1,
        name: "Hotel Sunshine",
        location: "New York",
        image: "https://via.placeholder.com/150",
        pricePerNight: 100,
        description: "A beautiful hotel in the heart of New York.",
        foodMenu: ["Pizza", "Burger", "Salad"]
    },
    {
        id: 2,
        name: "Beach Resort",
        location: "Miami",
        image: "https://via.placeholder.com/150",
        pricePerNight: 150,
        description: "A lovely beach resort with stunning views.",
        foodMenu: ["Seafood", "Sushi", "Steak"]
    }
];

// Function to search hotels by location
function searchHotels() {
    const location = document.getElementById('location-search').value.toLowerCase();
    const hotelListing = document.getElementById('hotel-listing');
    hotelListing.innerHTML = ''; // Clear previous results

    const filteredHotels = hotels.filter(hotel => hotel.location.toLowerCase().includes(location));
    
    filteredHotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.classList.add('hotel-card');
        hotelCard.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}">
            <h3>${hotel.name}</h3>
            <p>${hotel.description}</p>
            <button onclick="showHotelDetails(${hotel.id})">View Details</button>
        `;
        hotelListing.appendChild(hotelCard);
    });
}

// Function to display hotel details
function showHotelDetails(hotelId) {
    const hotel = hotels.find(h => h.id === hotelId);
    const hotelInfo = document.getElementById('hotel-info');
    hotelInfo.innerHTML = `
        <h3>${hotel.name}</h3>
        <p>${hotel.description}</p>
        <h4>Food Menu</h4>
        <ul>${hotel.foodMenu.map(item => `<li>${item}</li>`).join('')}</ul>
        <p>Price per night: $${hotel.pricePerNight}</p>
    `;
}

// Function to calculate the cost of stay
function calculateCost() {
    const stayLength = document.getElementById('stay-length').value;
    const hotelName = document.getElementById('hotel-info').querySelector('h3').textContent;
    const hotel = hotels.find(h => h.name === hotelName);
    const totalCost = hotel.pricePerNight * stayLength;

    const costOutput = document.getElementById('cost-output');
    costOutput.textContent = `Total cost for ${stayLength} nights: $${totalCost}`;
}
// Sample data for vacation places
const vacationPlaces = [
    {
        name: "Andra Pradesh, Hyderabad",
        image: "https://media.istockphoto.com/id/1351964928/photo/araku-valley-visakhapatnam-andhra-pradesh-india.jpg?s=612x612&w=0&k=20&c=Mev1sG0qcWTCqzhoOaoALYrQFZnVHhqDif7CF4xfEhE=",
        description: "Known for its rich culture, heritage, and the famous Tirupati temple.",
    },
    {
        name: "Arunachal Pradesh, Itanagar",
        image: "https://i.pinimg.com/originals/b6/9b/df/b69bdfd5fad4e3b9191fc80c0702fba0.jpg",
        description: "The land of dawn-lit mountains, famous for its biodiversity."
    },
    {
        name: "Assam, Dispur",
        image: "https://media.istockphoto.com/id/1134043134/photo/women-harvest-tea-leaves-in-tea-plantation-assam-india.jpg?s=612x612&w=0&k=20&c=tDc1I0a740psoqGGc6fHoPYhhADdTpSY-e2C7hLgkkA=",
        description: "Famous for its tea plantations and rich wildlife."
    },
    {
        name: "Bihar, Patna",
        image: "https://www.shutterstock.com/image-photo/bodh-gaya-bihar-seat-enlightenment-600nw-1570135798.jpg",
        description: "state in eastern India known for its rich cultural heritage, historical significance, and agricultural economy."
    },
    {
        name: "Chhattisgarh, Raipur",
        image: "https://t3.ftcdn.net/jpg/04/22/27/00/240_F_422270049_Lcfprpg4cbvy8QXMb6OloEW2C4Qxfg8r.jpg",
        description: "A central Indian state known for its rich cultural heritage, lush forests, and diverse tribal communities."
    },
    {
        name: "Goa, Panaji",
        image: "https://media.istockphoto.com/id/157579910/photo/the-beach.jpg?s=612x612&w=0&k=20&c=aMk67AmzIVD_S1Nibww8ytUdyub2ck3HNQ3uTvuPWPI=",
        description: "A coastal state known for its stunning beaches, vibrant nightlife, and Portuguese heritage."
    },
    {
        name: "Gujrat, Gandhinagar",
        image: "https://media.istockphoto.com/id/177800537/photo/bay-and-harbor-view-of-dwarka-gujarat-india.webp?b=1&s=612x612&w=0&k=20&c=i-tSQNVjKUBUXVnsDqeql2X2WUD7r3ZVrsdoE2J4n00=",
        description: "Known for its rich history, vibrant culture, and economic significance."
    },
    {
        name: "Haryana, Chandigarh",
        image: "https://plus.unsplash.com/premium_photo-1697730334768-6e65fa8fded0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFyeWFuYXxlbnwwfHwwfHx8MA%3D%3D",
        description: "A state in northern India known for its agricultural productivity and vibrant cultural heritage."
    },
    {
        name: "Himachal Pradesh, Shimla",
        image: "https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.webp?b=1&s=612x612&w=0&k=20&c=C6y4Yqs1SpF4gtA8cxER7gKq5CJMQj_pFxzZ29KgVCA=",
        description: "A picturesque northern Indian state known for its stunning Himalayan landscapes and vibrant hill stations."
    },
    {
        name: "Jharkhand, Ranchi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnHxdoC9YU_TWRj4so48cNgPxW-9Vgejs0cA6AvDO1f3bJeMESmmbWtTaJCIAKbihRRQ&usqp=CAU",
        description: "An Indian state known for its rich natural resources, diverse tribal culture, and scenic landscapes."
    },
    {
        name: "Karnataka, Bengaluru",
        image: "https://plus.unsplash.com/premium_photo-1697730504977-26847b1f1f91?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2FybmF0YWthfGVufDB8fDB8fHww",
        description: "A state in southern India known for its rich cultural heritage, diverse landscapes, and significant contributions to literature, art, and technology."
    },
    {
        name: "Kerala, Thiruvananthapuram",
        image: "https://t4.ftcdn.net/jpg/00/99/72/93/360_F_99729394_rV8TM7ta85cNBUvuB8DyI8q0IyXAtU9b.jpg",
        description: "A tropical paradise in southern India known for its lush landscapes, backwaters, and rich cultural heritage."
    },
    {
        name: "Madhya Pradesh, Bhopal",
        image: "https://static.toiimg.com/photo/msid-98387805,width-96,height-65.cms",
        description: "A central Indian state known for its rich cultural heritage, historic monuments, and diverse wildlife."
    },
    {
        name: "Maharashtra, Mumbai",
        image: "https://static.toiimg.com/thumb/width-600,height-400,msid-64028431.cms",
        description: "A diverse and vibrant state in western India known for its rich history, cultural heritage, and economic significance."
    },
    {
        name: "Manipur, Imphal",
        image: "https://www.fabhotels.com/blog/wp-content/uploads/2020/05/Manipur1.jpg",
        description: "A state in northeastern India known for its rich cultural heritage, scenic landscapes, and diverse ethnic communities."
    },
    {
        name: "Meghalaya, Shillong",
        image: "https://www.holidify.com/images/bgImages/NONGPOH.jpg",
        description: "A northeastern Indian state known for its lush landscapes, vibrant culture, and abundant rainfall."
    },
    {
        name: "Mizoram, Aizawl",
        image: "https://www.offbeatstays.in/wp-content/uploads/2021/01/Toipui_Tuipui_river_Mizoram_India.jpg",
        description: "A picturesque state in northeastern India known for its lush hills, vibrant tribal culture, and scenic landscapes."
    },
    {
        name: "Nagaland, Kohima",
        image: "https://www.incredible-northeastindia.com/images/nagaland-head.jpg",
        description: "A state in northeastern India known for its rich cultural heritage, diverse tribal communities, and lush landscapes."
    },
    {
        name: "Odisha, Bhubaneshwar",
        image: "https://thumbs.dreamstime.com/b/view-lingaraja-temple-complex-bhubaneswar-india-odisha-view-lingaraja-temple-complex-bhubaneswar-odisha-india-165731841.jpg",
        description: "An Indian state on the eastern coast known for its rich cultural heritage, historic temples, and beautiful beaches."
    },
    {
        name: "Punjab, Chandigarh",
        image: "https://media.istockphoto.com/id/1421834396/photo/various-views-of-the-golden-temple-at-night-amritsar.jpg?s=612x612&w=0&k=20&c=k61fmzcnVJuDzQ-8Z61AaSR1X4jgWFyD2_KvwM8OwE4=",
        description: "A culturally rich state in northern India, known for its vibrant traditions, agriculture, and historical significance."
    },
    {
        name: "Rajasthan, Jaipur",
        image: "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=612x612&w=0&k=20&c=MeF2Dl4ya1NVOWM_I_xo3EPd8E-iazBghYhjiyRaTcU=",
        description: "A vibrant state in northern India known for its rich history, majestic palaces, and vast deserts."
    },
    {
        name: "Sikkim, Gangtok",
        image: "https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Sikkim is a small, mountainous state in northeastern India, known for its stunning landscapes, rich biodiversity, and vibrant cultural heritage."
    },
    {
        name: "TamilNadu, Chennai",
        image: "https://img.nayatrip.com/images/state/big/TAMIL-NADU.jpg",
        description: "A state in southern India known for its rich cultural heritage, ancient temples, and vibrant traditions."
    },
    {
        name: "Telengana, Hyderabad",
        image: "https://www.delhimetrotimes.in/images/telangana-tourism.jpg",
        description: "A state in southern India, known for its rich cultural heritage, historic monuments, and IT industry hub in Hyderabad, its capital."
    },
    {
        name: "Tripura, Agartala",
        image: "https://thumbs.dreamstime.com/b/maharaja-radha-kishore-manikya-debbarma-built-ujjayanta-palace-also-known-as-palace-kingdom-tripura-319789821.jpg",
        description: "A small northeastern state of India known for its rich cultural heritage, scenic landscapes, and diverse tribal communities."
    },
    {
        name: "Uttar Pradesh, Lucknow",
        image: "https://i.pinimg.com/736x/28/32/72/2832723df32778663c10e43bca8da436.jpg",
        description: "Populous state in northern India, known for its rich cultural heritage, historical monuments, and the cities of Varanasi and Agra."
    },
    {
        name: "Uttarakhand, Dehradun(w), Gairsain(s)",
        image: "https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXR0YXJha2hhbmQlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Known for its scenic Himalayan landscapes, spiritual sites, and rich cultural heritage."
    },
    {
        name: "West Bengal, Kolkata",
        image: "https://static.javatpoint.com/tourist-places/images/tourist-places-in-west-bengal1.png",
        description: "An eastern Indian state known for its rich cultural heritage, diverse landscapes, and bustling capital city, Kolkata."
    },
];

// Function to load vacation places into the grid
function loadVacationPlaces() {
    const vacationGrid = document.getElementById('vacation-grid');
    vacationPlaces.forEach(place => {
        const card = document.createElement('div');
        card.classList.add('vacation-card');
        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <div class="vacation-card-content">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
            </div>
        `;
        vacationGrid.appendChild(card);
    });
}

// Load vacation places on page load
window.onload = loadVacationPlaces;
function calculateCost() {
    // Get form values
    const checkinDate = new Date(document.getElementById('checkin-date').value);
    const checkoutDate = new Date(document.getElementById('checkout-date').value);
    const numberOfGuests = document.getElementById('guests').value;
    const roomType = document.getElementById('room-type').value;

    // Check if dates are valid
    if (checkoutDate <= checkinDate) {
        alert('Check-out date must be after check-in date.');
        return;
    }

    // Calculate the number of nights
    const timeDiff = Math.abs(checkoutDate - checkinDate);
    const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // Set room prices
    let roomPricePerNight = 0;
    switch (roomType) {
        case 'standard':
            roomPricePerNight = 100;
            break;
        case 'deluxe':
            roomPricePerNight = 150;
            break;
        case 'suite':
            roomPricePerNight = 200;
            break;
        default:
            roomPricePerNight = 0;
    }

    // Calculate total cost
    const totalCost = nights * roomPricePerNight;

    // Display booking summary
    const bookingSummary = document.getElementById('booking-summary');
    bookingSummary.style.display = 'block';
    bookingSummary.innerHTML = `
        <h3>Booking Summary</h3>
        <p>Check-in Date: ${checkinDate.toDateString()}</p>
        <p>Check-out Date: ${checkoutDate.toDateString()}</p>
        <p>Number of Guests: ${numberOfGuests}</p>
        <p>Room Type: ${roomType.charAt(0).toUpperCase() + roomType.slice(1)}</p>
        <p>Number of Nights: ${nights}</p>
        <p>Total Cost: $${totalCost}</p>
    `;
}
// Function to handle form submission
document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const hotel = document.getElementById('hotel').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;
    const foodMenu = document.getElementById('food-menu').value;

    // Booking confirmation message
    alert(`Booking confirmed for ${hotel}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\nFood Plan: ${foodMenu}`);
});

// List of cities in India (can be extended or fetched from an API)
const cities = [
    "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", 
    "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", 
    "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore",
    "Thane", "Bhopal", "Patna", "Vadodara", "Ghaziabad",
    "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut",
    "Rajkot", "Kalyan", "Vasai-Virar", "Varanasi", "Srinagar",
    "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad"
];

// Function to filter cities based on input and show suggestions
function filterCities() {
    const input = document.getElementById('city-input').value.toLowerCase();
    const suggestionsList = document.getElementById('city-suggestions');
    suggestionsList.innerHTML = '';

    if (input) {
        const filteredCities = cities.filter(city => city.toLowerCase().includes(input));
        suggestionsList.style.display = filteredCities.length ? 'block' : 'none';
        filteredCities.forEach(city => {
            const li = document.createElement('li');
            li.textContent = city;
            li.onclick = () => selectCity(city);
            suggestionsList.appendChild(li);
        });
    } else {
        suggestionsList.style.display = 'none';
    }
}

// Function to set the input value to the selected city from suggestions
function selectCity(city) {
    document.getElementById('city-input').value = city;
    document.getElementById('city-suggestions').style.display = 'none';
}
