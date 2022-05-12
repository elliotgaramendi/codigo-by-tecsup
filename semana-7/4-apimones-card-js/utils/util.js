// export const setLoading = (state) => {
//   if (state) {
//     document.getElementById('spinner').classList.remove('spinner--hidden');
//   } else {
//     document.getElementById('spinner').classList.add('spinner--hidden');
//   }
// };

// // export const fetchApi = async (url) => {
// //   setLoading(true);
// //   try {
// //     const response = await fetch(url, { method: 'GET' });
// //     const data = await response.json();
// //     return data;
// //   } catch (error) {
// //     console.log(error);
// //   } finally {
// //     setLoading(false);
// //   }
// // };

// export const fetchApi = async (...urls) => {
//   setLoading(true);
//   try {
//     const promises = urls.map(async (url) => {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     });
//     return Promise.all(promises);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setLoading(false);
//   }
// };

// export const renderCard = (domElement, pokemon) => {
//   domElement.insertAdjacentHTML('beforeend', `
//     <div class="pokemon__card">
//       <header class="pokemon__header">
//         <img src="./img/bg-pattern-card.svg" alt="Header card image" class="pokemon__header-image">
//       </header>
//       <section class="pokemon__body">
//         <figure class="pokemon__body-image-container">
//           <img src="${pokemon.sprites.other['official-artwork'].front_default}"
//             alt="${pokemon.name}" class="pokemon__body-image" />
//         </figure>
//         <h2 class="pokemon__body-id">Id: ${pokemon.id}</h2>
//         <h1 class="pokemon__body-title">
//           ${pokemon.name}
//         </h1>
//         <p class="pokemon__body-types">${pokemon.types.map(element => element.type.name).join(', ')}
//         </p>
//       </section>
//       <footer class="pokemon__footer">
//         <div class="pokemon__footer-stats">
//           <h3 class="pokemon__footer-stats-base">${pokemon.stats[0].base_stat}</h3>
//           <p class="pokemon__footer-stats-name">${pokemon.stats[0].stat.name}</p>
//         </div>
//         <div class="pokemon__footer-stats">
//           <h3 class="pokemon__footer-stats-base">${pokemon.stats[1].base_stat}</h3>
//           <p class="pokemon__footer-stats-name">${pokemon.stats[1].stat.name}</p>
//         </div>
//         <div class="pokemon__footer-stats">
//           <h3 class="pokemon__footer-stats-base">${pokemon.stats[2].base_stat}</h3>
//           <p class="pokemon__footer-stats-name">${pokemon.stats[2].stat.name}</p>
//         </div>
//         <div class="pokemon__footer-stats">
//           <h3 class="pokemon__footer-stats-base">${pokemon.stats[3].base_stat}</h3>
//           <p class="pokemon__footer-stats-name">${pokemon.stats[3].stat.name}</p>
//         </div>
//         <div class="pokemon__footer-stats">
//           <h3 class="pokemon__footer-stats-base">${pokemon.stats[4].base_stat}</h3>
//           <p class="pokemon__footer-stats-name">${pokemon.stats[4].stat.name}</p>
//         </div>
//         <div class="pokemon__footer-stats">
//           <h3 class="pokemon__footer-stats-base">${pokemon.stats[5].base_stat}</h3>
//           <p class="pokemon__footer-stats-name">${pokemon.stats[5].stat.name}</p>
//         </div>
//       </footer>
//     </div>
//   `);
// };