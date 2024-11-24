export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { accessToken } = config;
  const { popularMoviesURL, popularSeriesURL } = config.public;

  const popularMovies = await $fetch(popularMoviesURL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const popularSeries = await $fetch(popularSeriesURL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return { popularMovies, popularSeries };
});
