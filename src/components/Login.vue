<script>
export default {
  date() {
    return {};
  },
};
</script>

<template>
  <div class="flex flex-1 items-center justify-center">
    <div
      class="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
      <form class="text-center">
        <h1
          class="font-bold tracking-wider text-3xl mb-8 w-full text-white-600">
          Connexion
        </h1>
        <div class="py-2 text-left">
          <input
            type="email"
            class="text-black bg-gray-200 border-2 border-gray-100 focus:outline-none bg-orange-100 block w-full py-2 px-4 rounded-lg focus:border-orange-700"
            placeholder="Email" />
        </div>
        <div class="py-2 text-left">
          <input
            type="password"
            class="text-black bg-orange-200 border-2 border-orange-100 focus:outline-none bg-orange-100 block w-full py-2 px-4 rounded-lg focus:border-orange-700"
            placeholder="Password" />
        </div>
        <div class="py-2">
          <button
            type="submit"
            class="border-2 border-gray-100 focus:outline-none bg-orange-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-orange-700">
            Connexion
          </button>
        </div>
      </form>
      <div class="text-center">
        <a href="#" class="hover:underline">Mot de passe oublié?</a>
      </div>
      <div class="text-center mt-12">
        <span> Don't have an account? </span>
        <router-link
          to="/register"
          class="font-light text-md text-orange-600 underline font-semibold hover:text-orange-800"
          >Créer un compte</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
