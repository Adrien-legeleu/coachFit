import axios from "axios";

export class ExerciseSportAPI {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseUrl = "https://exercisedb.p.rapidapi.com/exercises";
    this.headers = {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_X_RAPIDAIPI_KEY as string,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    };
  }

  // Méthode pour obtenir tous les exercices
  async getAllExercisesRandom(limit = 10, offset = 0) {
    const options = {
      method: "GET",
      url: this.baseUrl,
      params: { limit: String(limit), offset: String(offset) },
      headers: this.headers,
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des exercices:", error);
      throw error;
    }
  }

  // Méthode pour obtenir les exercices en fonction d'une partie du corps
  async getExercisesByBodyPart(bodyPart: string) {
    const options = {
      method: "GET",
      url: `${this.baseUrl}/bodyPart/${bodyPart}`,
      headers: this.headers,
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(
        `Erreur lors de la récupération des exercices pour la partie du corps "${bodyPart}":`,
        error
      );
      throw error;
    }
  }
}
