<script>
import { link } from "./../assets/url.js";
import { onMounted, ref } from "vue";
import VueCookies from "vue-cookies";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const dataUser = ref({});

    const getUser = async (key) => {
      try {
        const id = localStorage.getItem("connect");
        console.log("id", id);
        console.log("token", key);

        const { data } = await axios.get(`${link}/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${key}`,
            Accept: "application/json",
          },
        });

        console.log(data);
        if (data && data.message) {
          dataUser.value = { ...data.message };
        } else {
          router.push("/login");
        }
        console.log(dataUser.value);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données utilisateur :",
          error,
        );
      }
    };

    onMounted(() => {
      const token = VueCookies.get("token");
      getUser(token);
    });

    return {
      dataUser,
    };
  },
};
</script>
<template>
  <div class="bg-gray-900 h-full">
    <header
      class="mt-10 pt-8 animate__animated animate__fadeInDown animate__delay-2s"
    >
      <div
        class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-gray-800 w-4/5 rounded-xl"
      >
        <div class="flex items-center sm:justify-between sm:gap-4">
          <div
            class="flex flex-1 items-center justify-between gap-8 sm:justify-end"
          >
            <div class="flex gap-4">
              <button
                type="button"
                class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
              >
                <span class="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
                  class="h-5 w-5"
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
                  class="h-5 w-5"
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
              class="group flex shrink-0 items-center rounded-lg transition"
            >
              <span class="sr-only">Menu</span>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="h-10 w-10 rounded-full object-cover"
              />

              <p class="ms-2 hidden text-left text-xs sm:block">
                <strong class="block font-medium text-white">{{
                  dataUser.fullname
                }}</strong>

                <span class="text-gray-500"> {{ dataUser.email }} </span>
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
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
    <section
      class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-gray-800 w-4/5 rounded-xl mt-8"
    >
      <form @submit.prevent="addTask">
        <div class="flex items-center mb-4">
          <input
            v-model="newTask"
            type="text"
            placeholder="Ajouter une nouvelle tâche..."
            class="flex-1 p-2 rounded-l-md bg-white text-gray-800"
          />
          <input
            v-model="taskDate"
            type="time"
            class="p-2 rounded-r-md bg-white text-gray-800"
          />
          <button
            type="submit"
            class="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
          >
            Ajouter
          </button>
        </div>
      </form>
      <div class="mt-4">
        <h2 class="text-lg font-bold text-gray-100 mb-2">Tâches créées :</h2>
        <ul class="list-disc list-inside">
          <li class="text-white">
            {{ task.name }} - {{ task.date }}
            <button class="btn bg-red-800">
              Modifier
            </button>
            <button class="btn bg-green-400 ml-2">
              Supprimer
            </button>
          </li>
         
        </ul>
      </div>
    </section>
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
