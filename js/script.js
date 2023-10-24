const characterInput = document.querySelector('#characterInput');
const button = document.querySelector('#searchBtn');
let characterOutput = document.querySelector('#characterOutput');

let url = new URL('https://www.swapi.tech/api/people/?name=');

const getCharacterOnClick = () => {
    if(characterInput.value === null || characterInput.value === '')
        alert('Please enter a character');

    url.searchParams.set('name', characterInput.value);
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            if(res.ok)
                return res.json();
        })
        .then(data => {
            if(data.result.length < 1)
                alert('No character found with that name');
            console.log(data)
            let character = `Name: ${data.result[0].properties.name}\nGender: ${data.result[0].properties.gender}\nHeight: ${data.result[0].properties.height}\nMass: ${data.result[0].properties.mass}\nHair color: ${data.result[0].properties.hair_color}`;
            characterOutput.innerHTML = character;
        })
        .catch(err => console.log(err));
}
button.addEventListener('click', getCharacterOnClick);