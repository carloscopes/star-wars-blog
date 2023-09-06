const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
    },
    actions: {
      getPeople: async () => {
        const store = getStore();
        try {
          let response = await fetch("https://www.swapi.tech/api/people/");
          let data = await response.json();
          setStore({ characters: data.results });
          console.log(store.characters);
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
