export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { accessToken } = config;
  const { topRatedMoviesURL, topRatedSeriesURL } = config.public;
  const topRatedMovies = await $fetch(topRatedMoviesURL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const topRatedSeries = await $fetch(topRatedSeriesURL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return { topRatedMovies, topRatedSeries };
});
