export const getNumberOfEpisodes = (episodes: string[]) => {
  const numberOfEpisodes = episodes.map((ep) => ep.slice(40, 45)).join(', ');
  return numberOfEpisodes.length <= 20
    ? numberOfEpisodes
    : numberOfEpisodes.slice(0, 28) + ' . . .';
};
