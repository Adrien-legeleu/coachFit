export const clientTypes = [
  {
    title: "Débutants",
    description: "Clients qui commencent leur parcours de fitness.",
  },
  {
    title: "Intermédiaires",
    description: "Clients avec une certaine expérience en activité physique.",
  },
  {
    title: "Avancés",
    description: "Clients qui cherchent à améliorer leurs performances.",
  },
  {
    title: "Seniors",
    description: "Clients expérimentés qui visent des défis intenses.",
  },
  {
    title: "Réhabilitation",
    description: "Clients ayant besoin d'un accompagnement spécifique.",
  },
];
export const specialties = [
  {
    title: "Nutrition",
  },
  {
    title: "Fitness",
  },
  {
    title: "Bien-être",
  },
  {
    title: "Réhabilitation",
  },
  {
    title: "Coaching mental",
  },
];
export const diplomes = [
  { value: "Bac" },
  { value: "Brevet" },
  { value: "CAP" },
  { value: "TEC" },
  { value: "BTS" },
  { value: "Licence" },
  { value: "Master" },
];
type YearExpOption = {
  title: string;
  value: string;
  description: string;
};
export const year_exp: YearExpOption[] = [
  {
    title: "Débutant",
    value: "debutant",
    description: "Moins d'un an d'expérience en coaching.",
  },
  {
    title: "Intermédiaire",
    value: "intermediate",
    description: "Entre 1 et 3 ans d'expérience en coaching.",
  },
  {
    title: "Avancé",
    value: "advanced",
    description: "Entre 3 et 5 ans d'expérience en coaching.",
  },
  {
    title: "Expert",
    value: "senior",
    description: "Plus de 5 ans d'expérience en coaching.",
  },
];
