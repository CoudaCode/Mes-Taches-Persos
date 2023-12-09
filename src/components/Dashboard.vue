<script>
export default {
  data() {
    return {
      taches: [
        { Title: "coder", Description: "Bien coder" },
        { Title: "manger", Description: "Bien manger" },
      ],
    };
  },
};
</script>

<template>
  <!--
  <template>
  <div class="flex flex-grow items-center justify-center bg-gray-900 h-full">
    <div
      class="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-4/5 text-gray-200"
    >
      <div class="flex items-center mb-6">
        <h4 class="font-semibold ml-3 text-lg">Mes Taches à faire</h4>
      </div>
      <div class="list">
       <div class="flex gap-5 w-4/5">
          <div class="flex w-3/5">
            <input class="hidden" type="checkbox" id="task_6" checked />
            <label
              class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
              for="task_6">
              <span
                class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              <span class="ml-4 text-sm">Trim the verge</span>
            </label>
          </div>
          <div class="w-2/5 flex justify-end">
            <button
              class="py-2 px-4 ml-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              update
            </button>
            <button
              class="py-2 px-4 bg-orange-500 ml-5 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
              delete
            </button>
          </div>
        </div>
        <div class="flex gap-5 w-4/5">
          <div class="flex w-3/5">
            <input class="hidden" type="checkbox" id="task_7" checked />
            <label
              class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
              for="task_7">
              <span
                class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              <span class="ml-4 text-sm">Trim the verge</span>
            </label>
          </div>
          <div class="w-2/5 flex justify-end">
            <button
              class="py-2 px-4 ml-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              update
            </button>
            <button
              class="py-2 px-4 bg-orange-500 ml-5 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
              delete
            </button>
          </div>
        </div> 
      </div>
      <div class="flex gap-5 w-4/5">
        <div class="flex w-4/5">
          <div
            class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded"
          >
            <svg
              class="w-5 h-5 text-gray-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <input
              class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
              type="text"
              placeholder="ajouter une nouvelle tâche"
            />
          </div>
        </div>
        <div class="w-1/5 m-2 flex justify-end">
          <button
            class="py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  </div>


  
</template>
  -->
  <div class="bg-gray-900 h-full">
    <header class="mt-10 pt-8">
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
                <strong class="block font-medium text-white"
                  >Eric Frusciante</strong
                >

                <span class="text-gray-500"> eric@frusciante.com </span>
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
            Welcome back, Barry!
          </h1>

          <p class="mt-1.5 text-sm text-gray-500">
            Ajoutez vos nouvelles tâches ci-dessous et restez organisé au
            quotidien.
          </p>
        </div>
      </div>
    </header>
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
