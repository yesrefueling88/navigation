<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

@media (min-width: 640px) {
  .sm\:w-184 {
      width: 46rem !important;
  }

  .sm\:w-196 {
      width: 48.75rem !important;
  }
}
</style>
