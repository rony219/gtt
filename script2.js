<script>
// Function to filter cities based on input and show suggestions
function filterCities() {
    const input = document.getElementById('city-input').value.toLowerCase();
    const suggestionsList = document.getElementById('city-suggestions');
    suggestionsList.innerHTML = '';

    if (input) {
        const filteredCities = cities.filter(city => city.toLowerCase().includes(input));
        
        // Sort the filtered cities to prioritize those that start with the input
        filteredCities.sort((a, b) => {
            const aStartsWith = a.toLowerCase().startsWith(input);
            const bStartsWith = b.toLowerCase().startsWith(input);
            if (aStartsWith && !bStartsWith) return -1;
            if (!aStartsWith && bStartsWith) return 1;
            return a.localeCompare(b); // If both start or both don't, sort alphabetically
        });

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

</script>