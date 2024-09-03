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
        name: "Visakhapatnam",
        image: "https://t4.ftcdn.net/jpg/01/26/19/49/360_F_126194923_SabbAZXpE55qmSId97smmkXpisks3lWL.jpg",
        description: "The city of lights and romance, known for the Eiffel Tower and its rich history.",
    },
    {
        name: "Vijayawada",
        image: "https://thumbs.dreamstime.com/b/prakasam-barrage-vijayawada-prakasam-barrage-vijayawada-india-97911939.jpg",
        description: "A tropical paradise famous for its beaches, temples, and vibrant culture."
    },
    {
        name: "Guntur",
        image: "https://www.shutterstock.com/image-photo/kondaveedu-ghat-road-aerial-view-260nw-2329021689.jpg",
        description: "A city of classical Buddhist temples, beautiful gardens, and traditional wooden houses."
    },
    {
        name: "Nellore",
        image: "https://thumbs.dreamstime.com/b/ranganayakula-temple-udayagiri-andhra-pradesh-hindu-dedicated-to-lord-vishnu-located-town-nellore-district-india-285129877.jpg",
        description: "The city that never sleeps, known for Times Square, Central Park, and Broadway."
    },
    {
        name: "Kurnool",
        image: "https://thumbs.dreamstime.com/b/figures-deities-goddess-gandikota-kurnool-andhra-pradesh-figures-deities-goddess-gandikota-kurnool-andhra-234747472.jpg",
        description: "Home to the iconic Sydney Opera House and beautiful beaches like Bondi Beach."
    },
    {
        name: "Kakinada",
        image: "https://as1.ftcdn.net/v2/jpg/04/26/25/20/1000_F_426252026_2OOFu9WQK3wY41MqRTGytzMNzPB4p7Ph.jpg",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Rajamahendravaram",
        image: "https://t3.ftcdn.net/jpg/04/89/31/58/360_F_489315853_eUiIVsImhB4dRai5mf7r02bEZukj4jya.jpg",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Kadapa",
        image: "https://cdn.pixabay.com/photo/2019/12/13/19/45/mountains-4693731_1280.jpg",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Mangalagiri-Tadepalli",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Tirupati",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Anantapuram",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Ongole",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Vizianagaram",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Eluru",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Proddatur",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Nandyal",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Adoni",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Madanapalle",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Machilipatnam",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Tenali",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Chittoor",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Hindupur",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "	Srikakulam",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Bhimavaram",
        image: "https://via.placeholder.com/300x200?text=Cape+Town",
        description: "A coastal city with a rich history, stunning landscapes, and Table Mountain."
    },
    {
        name: "Tadepalligudem",
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
