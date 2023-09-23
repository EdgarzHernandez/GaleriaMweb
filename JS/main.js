

// Arreglo de objetos que representa el menú de la aplicación

const menu = [
  {

    // Cada objeto representa un elemento del menú con sus propiedades
    // como el id, título, categoría, precio, imagen y descripción

    id: 1,
    title: "Panqueques",
    category: "Desayunos",
    price: 15.99,
    img: "./img/item-1.jpeg",
    desc: "Deliciosos y esponjosos panqueques de suero de mantequilla, acompañados de jarabe de arce y trocitos de frutas frescas.",
  },
  {
    id: 2,
    title: "Hambuguesa doble",
    category: "Almuerzos",
    price: 13.99,
    img: "./img/item-2.jpeg",
    desc: "Una suculenta doble hamburguesa con queso derretido, tocino crujiente, lechuga fresca y nuestra exclusiva salsa especial.",
  },
  {
    id: 3,
    title: "Batido Godzilla",
    category: "Batidos",
    price: 6.99,
    img: "./img/item-3.jpeg",
    desc: "Un monstruoso batido con una mezcla única de sabores tropicales y cremosidad, decorado alegremente.",
  },
  {
    id: 4,
    title: "Desayuno Campestre",
    category: "Desayunos",
    price: 20.99,
    img: "./img/item-4.jpeg",
    desc: "Un festín campestre con huevos revueltos, tocino artesanal, pan casero y una selección de quesos de la región.",
  },
  {
    id: 5,
    title: "Hamburguesa Torito",
    category: "Almuerzos",
    price: 22.99,
    img: "./img/item-5.jpeg",
    desc: "Una explosión de sabor con huevos pochados, espinacas frescas, aguacate cremoso y un toque de salsa de mostaza y miel.",
  },
  {
    id: 6,
    title: "Batido de Oreo",
    category: "Batidos",
    price: 18.99,
    img: "./img/item-6.jpeg",
    desc: "Un sueño hecho realidad para los fanáticos de las galletas Oreo: un batido cremoso con trozos de galletas y virutas de chocolate.",
  },
  {
    id: 7,
    title: "Moffin de Tocino",
    category: "Desayunos",
    price: 8.99,
    img: "./img/item-7.jpeg",
    desc: "Un abundante desayuno con montones de tocino crujiente, huevos fritos, tostadas doradas y un café recién hecho.",
  },
  {
    id: 8,
    title: "Clásico Americano",
    category: "Almuerzos",
    price: 12.99,
    img: "./img/item-8.jpeg",
    desc: "El auténtico sabor de Estados Unidos en una Hamburguesa: carne de pavo jugosa, lechuga fresca y aderezo de mostaza y mayonesa.",
  },
  {
    id: 9,
    title: "Batido para comparir",
    category: "Batidos",
    price: 16.99,
    img: "./img/item-9.jpeg",
    desc: "Un batido reconfortante y nutritivo con una mezcla de frutas frescas, yogur suave y un toque de miel.",
  },
  {
    id: 10,
    title: "Filete de bisonte",
    category: "Cena",
    price: 22.99,
    img: "img/item-10.jpeg",
    desc: `Filete de bisonte con un toque auténtico, con una presentación única que incluye bordes crujientes. Ideal para los amantes de la carne.`,
  },
];


// Se obtienen los elementos del DOM para el contenedor de los elementos del menú
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");


// Se agrega un evento que se dispara cuando se ha cargado el contenido de la página
window.addEventListener("DOMContentLoaded", function() 
{
  // Llama a la función para mostrar los elementos del menú
  diplayMenuItems(menu);

  // Llama a la función para mostrar los botones de filtrado por categoría
  displayMenuButtons();
});



// Función para mostrar los elementos del menú en el DOM
function diplayMenuItems(menuItems) 
{
  // Mapea cada elemento del menú en un arreglo de strings HTML con formato
  let displayMenu = menuItems.map(function(item) 
  {
    return `<article class="menu-item">
              <img src=${item.img} alt=${item.title} class="photo" />
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`;
  });

  // Une los elementos del arreglo en un solo string y lo muestra en el contenedor
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}


// Función para mostrar los botones de filtrado por categoría
function displayMenuButtons() 
{
  // Reduse el arreglo de los elementos del menú a un arreglo de categorías únicas
  const categories = menu.reduce(function(values, item) 
  {
    if (!values.includes(item.category)) 
    {
      values.push(item.category);
    }
    return values;
  }, ["Todos"]); // Inicializa el arreglo con una categoría especial "Todos"

  // Mapea cada categoría en un botón con formato HTML
  const categoryBtns = categories.map(function(category) 
  {
    return `<button type="button" class="filter-btn" data-id=${category}>
              ${category}
            </button>`;
  }).join(""); // Une los botones en un solo string

  // Muestra los botones en el contenedor
  btnContainer.innerHTML = categoryBtns;

  // Obtiene todos los botones de filtrado y agrega un evento a cada uno
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function(btn) 
  {
    btn.addEventListener("click", function(e) 
    {
      // Obtiene la categoría seleccionada del botón
      const category = e.currentTarget.dataset.id;

      // Filtra los elementos del menú por la categoría seleccionada
      const menuCategory = menu.filter(function(menuItem) 
      {
        if (menuItem.category === category) 
        {
          return menuItem;
        }
      });

      // Muestra todos los elementos si se selecciona la opcion "Todos"
      if (category === "Todos") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}





