type Props = string | string[] | undefined;

const embedMovie = (id: Props) =>
    `https://www.2embed.ru/embed/tmdb/movie?id=${id}`;
const embedEpisode = (id: Props, season: Props, episode: Props) =>
    `https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${season}&e=${episode}`;

export { embedMovie, embedEpisode };
