const characters = [
    {
      name: 'Goku',
      image: '../img-perso/Goku.png',
      description: 'The main protagonist of the Dragon Ball series.'
    },
    {
      name: 'Vegeta',
      image: '../img-perso/Vegeta.png',
      description: 'The Prince of the fallen Saiyan race.'
    },
    {
      name: 'Piccolo',
      image: '../img-perso/Piccolo.png',
      description: 'A Namekian warrior who was once a ruthless enemy of Goku.'
    },
    {
      name: 'Krillin',
      image: '../img-perso/Krillin.png',
      description: 'A skilled martial artist and Goku\'s best friend.'
    },
    {
      name: 'Android 18',
      image: '../img-perso/Android-18.png',
      description: 'A cyborg created by the evil Dr. Gero and later turned into a good character.'
    }
  ];
  
  const characterList = document.querySelector('#character-list');
  
  function displayCharacters(characters) {
    characterList.innerHTML = '';
  
    characters.forEach(character => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="perso">
          <div class="left"></div>
          <div class="right">
            <h1>${character.name}</h1>
          </div>
          <div class="perso-bg"></div>
          <img src="${character.image}" alt="${character.name}">
        </div>
        <p>${character.description}</p>
      `;
      characterList.appendChild(li);
    });
  }
  
  displayCharacters(characters);
  
  const filterInput = document.querySelector('#filter-input');
  
  filterInput.addEventListener('input', () => {
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(filterInput.value.toLowerCase());
    });
    displayCharacters(filteredCharacters);
  });
  