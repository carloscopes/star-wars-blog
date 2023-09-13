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
        const favorites = store.favorites;

        setStore({ favorites: [item.name, ...favorites] });

        if (favorites.some((itemFav) => itemFav.name === item.name)) {
          const updateFav = favorites.filter(
            (itemFav) => itemFav.name !== item.name
          );
          setStore({ favorites: updateFav });
        } else {
          setStore({ favorites: [item.name, ...favorites] });
        }
      },
    },
  };
};

export default getState;
