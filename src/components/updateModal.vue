<script>
export default {};
</script>
<template>
  <div
    class="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
    role="alert"
    v-if="openModal"
  >
    <div
      class="relative p-4 bg-white border border-blue-100 shadow-lg w-72 w-58 rounded-2xl sm:p-6 lg:p-8"
      role="alert"
    >
      <div class="flex items-center gap-4">
        <span class="p-2 text-white bg-red-400 rounded-full shrink-0">
          <svg
            class="w-4 h-4"
            fill="currentColor"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fill-rule="evenodd"
            />
          </svg>
        </span>

        <p class="font-medium text-red-600 sm:text-lg">Avertissement</p>
      </div>

      <p class="mt-4 text-gray-500">Voulez vous supprimer cette tâche ?</p>

      <div class="mt-6 sm:flex sm:gap-4">
        <button
          class="inline-block w-full px-5 py-3 text-sm font-semibold text-center text-white bg-red-500 rounded-lg sm:w-auto"
          @click="deleteTask"
        >
          Oui
        </button>

        <button
          class="inline-block w-full px-5 py-3 mt-2 text-sm font-semibold text-center text-gray-700 bg-gray-300 rounded-lg sm:mt-0 sm:w-auto"
          @click="changeModal()"
        >
          Non
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
