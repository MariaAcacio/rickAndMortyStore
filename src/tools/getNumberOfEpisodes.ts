export const getNumberOfEpisodes = (episodes: string[]) => {
  const numberOfEpisodes = episodes.map((ep) => ep.slice(40, 45));
  return numberOfEpisodes;
};
