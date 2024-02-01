<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import VueCookies from "vue-cookies";
import { useRouter } from "vue-router";
import { link } from "./../assets/url.js";

export default {
  setup() {
    const router = useRouter();
    const dataUser = ref({});
    const newTastUser = ref({
      tache: "",
      time: "",
      description: "",
      UserId: "",
    });

    const task = ref([]);

    const getUser = async (key) => {
      try {
        const id = localStorage.getItem("connect");
        const { data } = await axios.get(`${link}/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${key}`,
            Accept: "application/json",
          },
        });
        if (data && data.message) {
          dataUser.value = { ...data.message };
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données utilisateur :",
          error
        );
      }
    };

    const submitTask = async () => {
      console.log(newTastUser.value);
      const token = VueCookies.get("token");
      const id = localStorage.getItem("connect");
      newTastUser.value.UserId = id;
      try {
        const { data } = await axios.post(
          `${link}/api/taches/`,
          newTastUser.value,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        if (data && data.message) {
          toastSuccess("Tâche créé avec succès");
          newTastUser.value = {
            tache: "",
            time: "",
            description: "",
            UserId: "",
          };
        }
      } catch (error) {
        toastError("Une erreur est survenue");
        console.error("Erreur lors de la requête axios :", error);
      }
    };
    const logout = () => {
      VueCookies.remove("token");
      localStorage.removeItem("connect");
      router.push("/login");
    };

    const getTaches = async () => {
      const token = VueCookies.get("token");
      const id = localStorage.getItem("connect");

      try {
        const { data } = await axios.get(`${link}/api/taches`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        if (data && data.message) {
          task.value = [...data.message];
        }
      } catch (error) {
        toastError("Une erreur est survenue");
        console.error("Erreur lors de la requête axios :", error);
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
    const createTask = () => {};
    onMounted(() => {
      const token = VueCookies.get("token");
      getUser(token);
    });

    const toastError = (message) => {
      toast.error(message, toastConfig);
    };

    const toastSuccess = (message) => {
      toast.success(message, toastConfig);
    };

    return {
      logout,
      newTastUser,
      submitTask,
      dataUser,
    };
  },
};
</script>
<template>
  <header class="pt-4 animate__animated animate__fadeInDown animate__delay-2s">
    <div
      class="w-4/5 max-w-screen-xl px-4 py-8 mx-auto bg-gray-800 sm:px-6 lg:px-8 rounded-xl"
    >
      <div class="flex items-center sm:justify-between sm:gap-4">
        <div
          class="flex items-center justify-between flex-1 gap-8 sm:justify-end"
        >
          <div class="flex gap-4">
            <button
              type="button"
              class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
            >
              <span class="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <a
              href="#"
              class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
              <span class="sr-only">Academy</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </a>

            <a
              href="#"
              class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
              <span class="sr-only">Notifications</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
          </div>

          <button
            type="button"
            class="flex items-center transition rounded-lg group shrink-0"
          >
            <span class="sr-only">Menu</span>
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="object-cover w-10 h-10 rounded-full"
            />

            <p class="hidden text-xs text-left ms-2 sm:block">
              <strong class="block font-medium text-white">{{
                dataUser.fullname
              }}</strong>

              <span class="text-gray-500"> {{ dataUser.email }} </span>
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="hidden w-5 h-5 text-gray-500 transition ms-4 group-hover:text-gray-700 sm:block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="mt-8">
        <h1 class="text-2xl font-bold text-gray-100 sm:text-3xl">
          Welcome back, {{ dataUser.fullname }}
        </h1>

        <p class="mt-1.5 text-sm text-gray-500">
          Ajoutez vos nouvelles tâches ci-dessous et restez organisé au
          quotidien.
        </p>
      </div>
    </div>
  </header>
  <div
    class="grid h-auto max-w-screen-xl grid-cols-1 gap-4 mx-auto mt-8 bg-gray-900 lg:grid-cols-3 lg:gap-8 sm:px-6 lg:px-8 rounded-xl"
  >
    <div class="bg-gray-800 rounded-lg">
      <form
        novalidate=""
        @submit.prevent="submitTask"
        class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow"
      >
        <h2 class="w-full text-3xl font-bold text-gray-100 leadi">
          Create Task
        </h2>
        <div>
          <label for="tache" class="block mb-1 ml-1 text-gray-300"
            >Taches</label
          >
          <input
            id="tache"
            type="text"
            v-model="newTastUser.tache"
            placeholder="Nom de la tâche"
            requiorange=""
            class="block w-full p-2 focus:ring focus:ri:bg-gray-500 text-red-50"
          />
        </div>
        <div>
          <label for="time" class="block mb-1 ml-1 text-gray-300">Time</label>
          <input
            id="time"
            type="datetime-local"
            placeholder="Date de la tâche"
            requiorange=""
            v-model="newTastUser.time"
            class="block w-full p-2 rounded focus:ring focus:ri:bg-gray-500"
          />
        </div>

        <div>
          <label for="description" class="text-sm">Description</label>
          <textarea
            id="description"
            v-model="newTastUser.description"
            placeholder=""
            class="w-full rounded-md focus:ring focus:ri:bg-gray-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="w-full px-4 py-2 font-bold text-gray-100 bg-orange-700 rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 hover:ri dark:text-gray-900"
          >
            Create
          </button>
        </div>
      </form>
    </div>
    <div class="overflow-y-auto bg-gray-800 rounded-lg h-96 lg:col-span-2">
      <ul class="mt-4 space-y-2">
        <li>
          <div
            class="block h-full p-4 border border-gray-700 rounded-lg hover:border-orange-600"
          >
            <strong class="font-medium text-white">Project A</strong>

            <p class="mt-1 text-xs font-medium text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              consequuntur deleniti, unde ab ut in!
            </p>
            <p class="text-xs font-medium text-gray-500">
              Date and Time: January 31, 2024, 10:00 AM
            </p>

            <button
              class="px-4 py-2 mt-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Start
            </button>
            <button
              class="px-4 py-2 mt-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
            >
              Stop
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
input[type="checkbox"]:checked + label span:first-of-type {
  background-color: #10b981;
  border-color: #10b981;
  color: #fff;
}

input[type="checkbox"]:checked + label span:nth-of-type(2) {
  text-decoration: line-through;
  color: #9ca3af;
}
</style>
