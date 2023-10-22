<script setup></script>

<template>
  <div
    class="w-full rounded container bg-orange-950 h-4/5 items-center flex justify-center">
    <div
      class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src=""
            alt="Modern building architecture" />
        </div>
        <div class="p-8">
          <div
            class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Todo List
          </div>
          <router-link
            to="/login"
            class="py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Connexion
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
