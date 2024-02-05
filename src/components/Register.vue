<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { link } from "./../assets/url.js";
export default {
  setup() {
    const isLoading = ref(false);
    const router = useRouter();
    const dataUser = ref({
      fullname: "",
      email: "",
      password: "",
    });

    const submit = async () => {
      try {
        isLoading.value = true;
        const { data } = await axios.post(`${link}/api/users`, dataUser.value, {
          withCredentials: true,
        });

        toastSuccess("Compte créé avec succès");
        dataUser.value = {
          fullname: "",
          email: "",
          password: "",
        };
        router.push("/login");
      } catch (error) {
        console.error("Erreur lors de la requête axios :", error);

        toastError("Une erreur est survenue");
        isLoading.value = false;
      } finally {
        isLoading.value = false;
      }
    };

    const toastConfig = {
      position: "bottom-left",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "orange",
    };

    const toastError = (message) => {
      toast.error(message, toastConfig);
    };

    const toastSuccess = (message) => {
      toast.success(message, toastConfig);
    };

    return {
      dataUser,
      submit,
      isLoading,
      toastError,
      toastSuccess,
    };
  },
};
</script>

<template>
  <section
    class="relative flex flex-wrap bg-gray-900 lg:h-screen lg:items-center"
  >
    <!-- Image -->
    <div class="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Bienvenue"
        src="https://images.pexels.com/photos/1059383/pexels-photo-1059383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="absolute inset-0 object-cover w-full h-full"
      />
    </div>
    <!-- / Image -->
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="max-w-lg mx-auto text-center">
        <h1
          class="text-2xl font-bold text-center text-orange-600 sm:text-3xl animate__animated animate__fadeInDown"
        >
          Rejoignez-nous dès aujourd'hui
        </h1>

        <p
          class="max-w-md mx-auto mt-4 text-center text-gray-300 animate__animated animate__fadeInUp"
        >
          Créez votre compte pour bénéficier de toutes les fonctionnalités.
        </p>
      </div>

      <form
        @submit.prevent="submit"
        action=""
        class="max-w-md p-4 mx-auto mt-8 mb-0 space-y-4 rounded-lg shadow-lg"
      >
        <p class="text-lg font-medium text-center text-orange-600">
          Créer un nouveau compte
        </p>

        <div>
          <label for="fullname" class="sr-only">Nom complet</label>

          <input
            v-model="dataUser.fullname"
            type="text"
            id="fullname"
            name="fullname"
            class="w-full p-4 text-sm text-gray-200 bg-gray-800 border-gray-700 rounded-lg shadow-sm pe-12"
            placeholder="Entrez votre nom complet"
          />
        </div>
        <div>
          <label for="email" class="sr-only">Email</label>

          <input
            v-model="dataUser.email"
            type="email"
            id="email"
            name="email"
            class="w-full p-4 text-sm text-gray-200 bg-gray-800 border-gray-700 rounded-lg shadow-sm pe-12"
            placeholder="Entrez votre email"
          />
        </div>

        <div>
          <label for="password" class="sr-only">Mot de passe</label>

          <input
            v-model="dataUser.password"
            type="password"
            id="password"
            name="password"
            class="w-full p-4 text-sm text-gray-200 bg-gray-800 border-gray-700 rounded-lg shadow-sm pe-12"
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <button
          type="submit"
          class="block w-full px-5 py-3 text-sm font-medium text-white bg-orange-600 rounded-lg"
        >
          Inscription
        </button>

        <p class="text-sm text-center text-gray-500">
          Vous avez déjà un compte ?
          <router-link to="/login" class="underline">Connexion</router-link>
        </p>

        <div
          v-if="isLoading"
          class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75"
        >
          <div
            class="w-16 h-16 border-t-8 border-blue-500 border-solid rounded-full animate-spin"
          ></div>
        </div>
        <!-- Bouton de retour à la page d'accueil -->
        <router-link
          to="/"
          class="block w-full px-5 py-3 mt-4 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Retour à la page d'accueil
        </router-link>
      </form>
    </div>
  </section>
</template>

<style scoped>
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
