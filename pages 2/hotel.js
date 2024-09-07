document.getElementById('hotel-search-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const location = document.getElementById('location').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // Simple validation
    if (!location || !checkin || !checkout || !guests) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate sending the search request (replace this with real API call)
    console.log(`Searching for hotels in ${location} from ${checkin} to ${checkout} for ${guests}`);

    // Redirect to a search results page (optional)
    // window.location.href = `search-results.html?location=${location}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
});
 