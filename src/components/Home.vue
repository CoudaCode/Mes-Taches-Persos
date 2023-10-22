<script>
export default {
    name: "Home",
    data() {
        return {};
    },
};
</script>

<template>
  <div class="w-full h-full flex justify-center items-center text-white">
    <div class="rounded-2xl w-3/5 h-3/5 bg-orange-100">
      <h1 class="text-center text-3xl text-black font-extrabold">
        Créer une Todolist
      </h1>
      <router-link
        to="/login"
        class="py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
        >Connexion</router-link
      >
      <router-link
        to="/register"
        class="py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
        >Login</router-link
      >
    </div>
  </div>
</template>

<style></style>
