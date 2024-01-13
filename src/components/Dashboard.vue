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
  <div class="bg-gray-900 h-screen">
    <div class="h-dvh">
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
      <div
        class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8 w-4/5 rounded-xl mt-8 h-auto"
      >
        <div class="h-96 rounded-lg bg-gray-800">
          <form
            novalidate=""
            class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow"
          >
            <h2 class="w-full text-3xl font-bold leadi text-gray-100">
              Create Task
            </h2>
            <div>
              <label for="tache" class="block mb-1 ml-1 text-gray-300"
                >TAches</label
              >
              <input
                id="tache"
                type="text"
                placeholder="Nom de la tâche"
                required=""
                class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"
              />
            </div>
            <div>
              <label for="time" class="block mb-1 ml-1 text-gray-300"
                >Time</label
              >
              <input
                id="time"
                type="datetime-local"
                placeholder="Date de la tâche"
                required=""
                class="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"
              />
            </div>

            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 font-bold rounded shadow bg-orange-700 text-gray-100 focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 focus:ri hover:ri dark:text-gray-900"
              >
                Create
              </button>
            </div>
          </form>
        </div>
        <div class="h-96 rounded-lg bg-gray-800 lg:col-span-2">
          <ul>
            <li>
              <div class="flex items-center">
                <input
                  id="todo1"
                  name="todo1"
                  type="checkbox"
                  class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label for="todo1" class="ml-3 block text-gray-900">
                  <span class="text-lg font-medium"
                    >Finish project proposal</span
                  >
                  <span class="text-sm font-light text-gray-500"
                    >Due on 4/1/23</span
                  >
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
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
