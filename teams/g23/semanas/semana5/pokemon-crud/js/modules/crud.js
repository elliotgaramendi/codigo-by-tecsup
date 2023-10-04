const crud = () => {
  let pokemons = [];
  const pokemonTBody = document.getElementById('pokemonTBody');
  const pokemonForm = document.forms['pokemonForm'];

  const createPokemon = () => {
    const name = pokemonForm['name'].value;
    const type = pokemonForm['type'].value;
    const hp = pokemonForm['hp'].value;
    const basic = pokemonForm['basic'].value;
    const special = pokemonForm['special'].value;
    const image = pokemonForm['image'].value;

    pokemons = [...pokemons, { name, type, hp, basic, special, image }];

    pokemonTBody.innerHTML = '';

    pokemons.forEach((element, index) => {
      const { name, type, hp, basic, special, image } = element;
      pokemonTBody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${name}</td>
          <td>${type}</td>
          <td>${hp}</td>
          <td>${basic}</td>
          <td>${special}</td>
          <td>
            <img src="${image}" alt="${name}" width="48" height="48" />
          </td>
          <td>
            <button class="btn btn-outline-danger btn-sm">🗑</button>
            <button class="btn btn-outline-warning btn-sm">✏</button>
          </td>
        </tr>
      `;
    });

    pokemonForm.reset();
  };

  pokemonForm.addEventListener('submit', e => {
    e.preventDefault();
    createPokemon();
  });
};

export default crud;