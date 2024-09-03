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
        name: "Aizawl",
        image: "https://live.staticflickr.com/2523/3879356619_d62734eb83_b.jpg",
        description: "Aizawl is the scenic capital city of Mizoram, India, known for its picturesque landscapes and rich cultural heritage.",
    },
    {
        name: "Champhai",
        image: "https://www.shutterstock.com/image-photo/panoramic-view-town-champhai-mizoram-600nw-1460596550.jpg",
        description: "Champhai is a picturesque town in Mizoram, India, known for its scenic beauty, vibrant culture, and proximity to the Indo-Myanmar border."
    },
    {
        name: "Hnahthial",
        image: "https://photos.wikimapia.org/p/00/02/71/54/69_big.jpg",
        description: "Hnahthial is a town in Mizoram, India, known for its scenic beauty and cultural significance"
    },
    {
        name: "Khawzawl",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr1F0ROT3PzTRyYjeXRm0V7X9g6mcZBrZZQ&s",
        description: "Khawzawl is a town in Mizoram, India, known for its scenic beauty and vibrant culture."
    },
    {
        name: "Kolasib",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvMiw--rLodIG2LNFMPvG3stpezTOWWFWBQ&s",
        description: "Kolasib is a town in Mizoram, India, known for its picturesque landscapes and as a hub for trade and agriculture.
    },
    {
        name: "Lawngtlai",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Lunglei",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Mamit",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "saitual",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "serchhip",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "siaha",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
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
