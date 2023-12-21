export default interface Specie {
  name: string;
  evolves_from_species: {
    name: string;
    url: string;
  } | null;
}
