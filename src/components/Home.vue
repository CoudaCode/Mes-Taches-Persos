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
      class="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1
          class="text-3xl font-extrabold text-white sm:text-5xl animate__animated animate__flipInX"
        >
          Organisez votre vie avec notre

          <strong class="block font-extrabold text-orange-700">
            Application TodoList.
          </strong>
        </h1>

        <p
          class="max-w-lg mt-4 text-white sm:text-xl/relaxed animate__animated animate__slideInDown"
        >
          Simplifiez vos tâches quotidiennes et augmentez votre productivité.
          Notre application TodoList est conçue pour rendre votre vie plus
          facile. Ne manquez plus jamais une échéance !
        </p>

        <div class="flex flex-wrap gap-4 mt-8 text-center">
          <router-link
            to="register"
            class="block w-full px-12 py-3 text-sm font-medium text-white bg-orange-600 rounded shadow hover:bg-orange-700 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto animate__animated animate__lightSpeedInLeft"
          >
            Commencer
          </router-link>

          <router-link
            to="/login"
            class="block w-full px-12 py-3 text-sm font-medium text-orange-600 bg-white rounded shadow hover:text-orange-700 focus:outline-none focus:ring active:text-orange-500 sm:w-auto animate__animated animate__lightSpeedInRight"
          >
            Connexion
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
