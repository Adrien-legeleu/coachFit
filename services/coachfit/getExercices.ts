import axios from "axios";

export const getExercices = async () => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    params: {
      limit: "10",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": "80d1fb50e1msh335d183925b62a2p13f3a9jsne494a5322031",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response);

    return response.data; // Retourner les données de la réponse
  } catch (error) {
    console.error(error);
    throw error; // Relancer l'erreur pour la gérer dans le composant
  }
};
