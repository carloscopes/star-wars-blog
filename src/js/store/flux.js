const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      info: [],
      favorites: [],
    },
    actions: {
      getPeople: async () => {
        try {
          let response = await fetch("https://www.swapi.tech/api/people/");
          let data = await response.json();
          setStore({ characters: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      getPlanets: async () => {
        try {
          let response = await fetch("https://www.swapi.tech/api/planets/");
          let data = await response.json();
          setStore({ planets: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      getVehicles: async () => {
        try {
          let response = await fetch("https://www.swapi.tech/api/vehicles/");
          let data = await response.json();
          setStore({ vehicles: data.results });
        } catch (error) {
          console.log(error);
        }
      },
      getInfo: async (type, id) => {
        try {
          let response = await fetch(
            `https://www.swapi.tech/api/${type}/${id}`
          );
          //let response = await fetch(`https://www.swapi.tech/api/characters/4`);

          let data = await response.json();

          setStore({ info: data.result.properties });
        } catch (error) {
          console.log("An error occurred in the info request: " + error);
        }
      },
      addFavorite: (item) => {
        const store = getStore();
        const favorites = store.favorites; // Obtener la lista actual de favoritos desde el estado

        // Verificar si el elemento ya está en favoritos
        if (favorites.some((itemFav) => itemFav === item.name)) {
          // Comprobar si el nombre del elemento coincide con algún elemento en favoritos
          const updatedFav = favorites.filter(
            (itemFav) => itemFav !== item.name
          ); // Filtrar el elemento actual para eliminarlo de la lista
          setStore({ favorites: updatedFav }); // Actualizar el estado con la lista de favoritos actualizada (elemento eliminado)
        } else {
          setStore({ favorites: [item.name, ...favorites] }); // Si el elemento no está en favoritos, agregarlo al principio de la lista y actualizar el estado
        }
      },
      deleteFavorite: (item) => {
        const store = getStore();

        const updateFavList = store.favorites.filter(
          (itemFav) => itemFav !== item
        );

        console.log(updateFavList);
        setStore({ favorites: updateFavList });
      },
    },
  };
};

export default getState;
