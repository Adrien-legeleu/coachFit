import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosRequestConfig } from "axios";

// Configuration de la requête API avec `options`
const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://fitguru.p.rapidapi.com/api/exercices",
  params: { page: "1" },
  headers: {
    "x-rapidapi-key": "5bce0e32f2msh68dbbb3c19cebf1p135ce7jsne3b20ccd1fb1", // Utilise une variable d'environnement
    "x-rapidapi-host": "fitguru.p.rapidapi.com",
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // Utilise `axios` pour faire la requête
    const response = await axios.request(options);
    console.log("ezezeezezez");
    console.log(response.data);

    res.status(200).json(response.data); // Envoie les données récupérées comme réponse
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des exercices" });
  }
}
