export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = fetch(url);
    return await response.json();
  } catch (error) {
    console.log("Error: ", error);
  }
};
