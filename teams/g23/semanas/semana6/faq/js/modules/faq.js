// const FAQ = () => {
//   const categories = document.getElementById('categories');

//   const fetchData = async () => {
//     const response = await fetch('./json/database.json');
//     const data = await response.json();

//     data.forEach(element => {
//       const { id, image, title, slug, text } = element;
//       categories.innerHTML += `
//         <div class="card" key=${id}>
//           <div class="card__body">
//             <img src="${image}" width="48px" height="48px" />
//             <h2 class="card__title">${title}</h2>
//             <p class="card__text">${text}</p>
//             <a href="${slug}" class="button button--primary">Ver preguntas</a>
//           </div>
//         </div>
//       `;
//     });
//   };
//   fetchData();
// };

// export default FAQ;