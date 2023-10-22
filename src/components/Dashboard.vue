<script>
import List from "./List.vue";
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
  <div class="flex flex-grow items-center justify-center bg-gray-900 h-full">
    <!-- Component Start -->
    <div
      class="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-4/5 text-gray-200">
      <div class="flex items-center mb-6">
        <h4 class="font-semibold ml-3 text-lg">Mes Taches à faire</h4>
      </div>
      <div class="list">
         <List></List>                  
                <!-- <div class="flex gap-5 w-4/5">
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
        </div> -->
      </div>
      <div class="flex gap-5 w-4/5">
        <div class="flex w-4/5">
          <div
            class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
            <svg
              class="w-5 h-5 text-gray-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <input
              class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
              type="text"
              placeholder="ajouter une nouvelle tâche" />
          </div>
        </div>
        <div class="w-1/5 m-2 flex justify-end">
          <button
            class="py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
            Ajouter
          </button>
        </div>
      </div>
    </div>
    <!-- Component End  -->
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
