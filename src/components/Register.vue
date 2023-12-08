<script>
export default {
  date() {
    return {};
  },
};
</script>

<template>
  <section
    class="relative flex flex-wrap lg:h-screen lg:items-center bg-gray-900"
  >
    <!-- Image -->
    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Bienvenue"
        src="https://images.pexels.com/photos/1059383/pexels-photo-1059383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
    <!-- / Image -->
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-center">
        <h1
          class="text-center text-2xl font-bold text-orange-600 sm:text-3xl animate__animated animate__fadeInDown"
        >
          Rejoignez-nous dès aujourd'hui
        </h1>

        <p
          class="mx-auto mt-4 max-w-md text-center text-gray-300 animate__animated animate__fadeInUp"
        >
          Créez votre compte pour bénéficier de toutes les fonctionnalités.
        </p>
      </div>

      <form
        action=""
        class="rounded-lg p-4 shadow-lg mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <p class="text-center text-lg font-medium text-orange-600">
          Créer un nouveau compte
        </p>

        <div>
          <label for="fullname" class="sr-only">Nom complet</label>

          <input
            type="text"
            id="fullname"
            name="fullname"
            class="w-full rounded-lg border-gray-700 p-4 pe-12 text-sm shadow-sm bg-gray-800 text-gray-200"
            placeholder="Entrez votre nom complet"
          />
        </div>

        <div>
          <label for="username" class="sr-only">Nom d'utilisateur</label>

          <input
            type="text"
            id="username"
            name="username"
            class="w-full rounded-lg border-gray-700 p-4 pe-12 text-sm shadow-sm bg-gray-800 text-gray-200"
            placeholder="Entrez votre nom d'utilisateur"
          />
        </div>

        <div>
          <label for="email" class="sr-only">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            class="w-full rounded-lg border-gray-700 p-4 pe-12 text-sm shadow-sm bg-gray-800 text-gray-200"
            placeholder="Entrez votre email"
          />
        </div>

        <div>
          <label for="password" class="sr-only">Mot de passe</label>

          <input
            type="password"
            id="password"
            name="password"
            class="w-full rounded-lg border-gray-700 p-4 pe-12 text-sm shadow-sm bg-gray-800 text-gray-200"
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <button
          type="submit"
          class="block w-full rounded-lg bg-orange-600 px-5 py-3 text-sm font-medium text-white"
        >
          Inscription
        </button>

        <p class="text-center text-sm text-gray-500">
          Vous avez déjà un compte ?
          <router-link to="/login" class="underline">Connexion</router-link>
        </p>

        <!-- Bouton de retour à la page d'accueil -->
        <router-link
          to="/"
          class="block w-full mt-4 rounded-lg bg-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-300"
        >
          Retour à la page d'accueil
        </router-link>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
