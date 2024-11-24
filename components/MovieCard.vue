<template>
  <div>
    <div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <NuxtLink @click="changeItemState(item)" :to="`/item/${title}`">
        <img
          class="rounded-t-lg"
          :src="`${imageSiteURL}${poster_path}`"
          alt="Movie image"
        />
      </NuxtLink>
      <div class="p-5">
        <span href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ title }}
          </h5>
        </span>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Release date: {{ release_date }}
        </p>
        <p
          v-if="overview"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-left text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {{ overview }}
        </p>
        <p
          v-else
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-left text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          No overview available
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Find a movie
// https://developer.themoviedb.org/reference/discover-movie

// Get its details
// https://developer.themoviedb.org/reference/movie-details
defineProps([
  "title",
  "id",
  "overview",
  "release_date",
  "popularity",
  "poster_path",
  "item",
]);

const runtimeConfig = useRuntimeConfig();

const imageSiteURL = runtimeConfig.public.imageSiteURL;

const itemState = useState("chosenItem", () => {});

const changeItemState = (item) => {
  itemState.value = item;
};
</script>

<style scoped></style>
