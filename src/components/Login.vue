<script>
import axios from "axios";
import { ref } from "vue";
import { link } from "./../assets/url.js";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
import "vue3-toastify/dist/index.css";
import VueCookies from "vue-cookies";
export default {
  setup() {
    const isLoading = ref(false);
    const router = useRouter();
    const dataUser = ref({
      email: "",
      password: "",
    });

    const submit = async () => {
      try {
        isLoading.value = true;
        const { data } = await axios.post(
          `${link}/api/users/login`,
          dataUser.value
        );
        VueCookies.set("token", data.token, "20m");
        localStorage.setItem("connect", JSON.stringify(data.message.id));
        toastSuccess("Bien connecté");
        dataUser.value = {
          email: "",
          password: "",
        };
        router.push("/dashboard");
      } catch (error) {
        const response = error.response.data;
        toastError(response.message);
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
    <div
      class="w-full px-4 py-12 bg-gray-900 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24"
    >
      <div class="max-w-lg mx-auto text-center">
        <h1
          class="text-2xl font-bold text-center text-orange-600 sm:text-3xl animate__animated animate__fadeInDown"
        >
          Commencez dès aujourd'hui
        </h1>

        <p
          class="max-w-md mx-auto mt-4 text-center text-gray-300 animate__animated animate__fadeInUp"
        >
          Simplifiez votre vie quotidienne en vous connectant à votre compte.
        </p>
      </div>

      <form
        @submit.prevent="submit"
        action=""
        class="max-w-md p-4 mx-auto mt-8 mb-0 space-y-8 rounded-lg shadow-xl"
      >
        <p class="text-lg font-medium text-center text-orange-600">
          Connectez-vous à votre compte
        </p>

        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              v-model="dataUser.email"
              type="email"
              class="w-full p-4 text-sm text-gray-200 bg-gray-800 border-gray-700 rounded-lg shadow-sm pe-12"
              id="email"
              name="email"
              placeholder="Entrez votre email"
            />

            <span
              class="absolute inset-y-0 grid px-4 end-0 place-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          v-if="isLoading"
          class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75"
        >
          <div
            class="w-16 h-16 border-t-8 border-blue-500 border-solid rounded-full animate-spin"
          ></div>
        </div>
        <div>
          <label for="password" class="sr-only">Mot de passe</label>

          <div class="relative">
            <input
              v-model="dataUser.password"
              type="password"
              class="w-full p-4 text-sm text-gray-200 bg-gray-800 border-gray-700 rounded-lg shadow-sm pe-12"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
            />

            <span
              class="absolute inset-y-0 grid px-4 end-0 place-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <button
          type="submit"
          class="block w-full px-5 py-3 text-sm font-medium text-white bg-orange-600 rounded-lg"
        >
          Connexion
        </button>

        <p class="text-sm text-center text-gray-500">
          Vous n'avez pas de compte ?
          <router-link to="/register" class="underline"
            >Inscription</router-link
          >
        </p>

        <!-- Bouton de retour à la page d'accueil -->
        <router-link
          to="/"
          class="block w-full px-5 py-3 mt-4 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Retour à la page d'accueil
        </router-link>
      </form>
    </div>

    <!-- Image -->
    <div class="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt="Bienvenue"
        src="https://images.pexels.com/photos/5717422/pexels-photo-5717422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="absolute inset-0 object-cover w-full h-full"
      />
    </div>
    <!-- / Image -->
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
