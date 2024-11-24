export default defineEventHandler(async (event) => {
  const userQuery = getQuery(event);
  const { searchTerm } = userQuery;
  const config = useRuntimeConfig(event);
  const { accessToken } = config;
  const { movieSearchURL, seriesSearchURL } = config.public;

  const movies = await $fetch(movieSearchURL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    // All these are the default values anyway - see the above 'discover-movie' reference
    query: {
      query: searchTerm,
    },
  });

  const series = await $fetch(seriesSearchURL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    // All these are the default values anyway - see the above 'discover-movie' reference
    query: {
      query: searchTerm,
    },
  });

  return { movies, series };
});
