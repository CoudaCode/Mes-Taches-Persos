<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<template>
  <section
    class="relative bg-[url(https://images.pexels.com/photos/5717409/pexels-photo-5717409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>

    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1
          class="text-3xl font-extrabold sm:text-5xl text-white animate__animated animate__flipInX"
        >
          Organisez votre vie avec notre

          <strong class="block font-extrabold text-orange-700">
            Application TodoList.
          </strong>
        </h1>

        <p
          class="mt-4 max-w-lg sm:text-xl/relaxed text-white animate__animated animate__slideInDown"
        >
          Simplifiez vos tâches quotidiennes et augmentez votre productivité.
          Notre application TodoList est conçue pour rendre votre vie plus
          facile. Ne manquez plus jamais une échéance !
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <router-link
            to="register"
            class="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto animate__animated animate__lightSpeedInLeft"
          >
            Commencer
          </router-link>

          <router-link
            to="/login"
            class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-600 shadow hover:text-orange-700 focus:outline-none focus:ring active:text-orange-500 sm:w-auto animate__animated animate__lightSpeedInRight"
          >
            Connexion
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
