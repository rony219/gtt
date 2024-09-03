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
        name: "Goalpara",
        image: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900",
        description: "The city of lights and romance, known for the Eiffel Tower and its rich history.",
    },
    {
        name: "Guwahati",
        image: "https://img.freepik.com/free-photo/bali-pagoda-sunrise-indonesia_1150-11013.jpg?size=626&ext=jpg&ga=GA1.1.1054264010.1725272696&semt=ais_hybrid",
        description: "A tropical paradise famous for its beaches, temples, and vibrant culture."
    },
    {
        name: "Dibrugarh",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/23/18/kyoto-main.jpg?quality=75&width=1250&crop=3%3A2%2Csmart&auto=webp",
        description: "A city of classical Buddhist temples, beautiful gardens, and traditional wooden houses."
    },
    {
        name: "Nagaon",
        image: "https://plus.unsplash.com/premium_photo-1682656220562-32fde8256295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
        description: "The city that never sleeps, known for Times Square, Central Park, and Broadway."
    },
    {
        name: "Jorhat",
        image: "https://via.placeholder.com/300x200?text=Sydney",
        description: "Home to the iconic Sydney Opera House and beautiful beaches like Bondi Beach."
    },
    {
        name: "Tezpur",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Dhubri",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Tinsukia",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Silchar",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "North Lakhimpur",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Diphu",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Mangaldoi",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Sivasagar",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Golaghat",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Dhekiajuli",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Barpeta",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Nalbari",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Sonari",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Lanka",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Bongaigaon",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Dergaon",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Karimganj",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Hailakandi",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Kokrajhar",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Lumding",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Guntakal",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Dharmavaram",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Gudivada",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Narasaraopet	",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Kadiri",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Tadipatri",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "	Chilakaluripet",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    }

    
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
