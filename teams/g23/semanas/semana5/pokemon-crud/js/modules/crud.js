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
    localStorage.setItem('pokemonCrud', JSON.stringify(pokemons));
    readPokemon();
    pokemonForm.reset();
  };

  const readPokemon = () => {
    pokemonTBody.innerHTML = '';

    pokemons.forEach((element, index) => {
      const { name, type, hp, basic, special, image } = element;
      // pokemonTBody.innerHTML += `
      //   <tr>
      //     <td>${index + 1}</td>
      //     <td>${name}</td>
      //     <td>${type}</td>
      //     <td>${hp}</td>
      //     <td>${basic}</td>
      //     <td>${special}</td>
      //     <td>
      //       <img src="${image}" alt="${name}" width="48" height="48" />
      //     </td>
      //     <td>
      //       <button class="btn btn-outline-danger btn-sm">🗑</button>
      //       <button class="btn btn-outline-warning btn-sm">✏</button>
      //     </td>
      //   </tr>
      // `;

      const tableRow = document.createElement('tr');

      const idTableData = document.createElement('td');
      idTableData.textContent = index + 1;
      const nameTableData = document.createElement('td');
      nameTableData.textContent = name;
      const typeTableData = document.createElement('td');
      typeTableData.textContent = type;
      const hpTableData = document.createElement('td');
      hpTableData.textContent = hp;
      const basicTableData = document.createElement('td');
      basicTableData.textContent = basic;
      const specialTableData = document.createElement('td');
      specialTableData.textContent = special;
      const imageTableData = document.createElement('td');
      const imageImg = document.createElement('img');
      imageImg.setAttribute('src', image);
      imageImg.setAttribute('alt', name);
      imageImg.setAttribute('width', '48px');
      imageImg.setAttribute('height', '48px');
      imageTableData.appendChild(imageImg);

      const actionsTableData = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('btn', 'btn-outline-danger', 'btn-sm');
      deleteButton.textContent = '✏';
      actionsTableData.appendChild(deleteButton);

      tableRow.appendChild(idTableData);
      tableRow.appendChild(nameTableData);
      tableRow.appendChild(typeTableData);
      tableRow.appendChild(hpTableData);
      tableRow.appendChild(basicTableData);
      tableRow.appendChild(specialTableData);
      tableRow.appendChild(imageTableData);
      tableRow.appendChild(actionsTableData);
      pokemonTBody.appendChild(tableRow);
    });
  };

  if (localStorage.getItem('pokemonCrud') !== null) {
    pokemons = JSON.parse(localStorage.getItem('pokemonCrud'));
    readPokemon();
  }

  pokemonForm.addEventListener('submit', e => {
    e.preventDefault();
    createPokemon();
  });
};

export default crud;