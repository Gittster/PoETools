document.getElementById('character-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const accountName = document.getElementById('account-name').value;
    const characterName = document.getElementById('character-name').value;
    fetchCharacterData(accountName, characterName);
});

function fetchCharacterData(accountName, characterName) {
    const url = `https://www.pathofexile.com/character-window/get-items?accountName=${accountName}&character=${characterName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('character-data').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('character-data').textContent = 'Error fetching data';
            console.error('Error:', error);
        });
}
