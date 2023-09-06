const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
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

          console.log(data.results);
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
