<script>
export default {
  data() {
    return {};
  },
  props: {
    tache: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <div class="flex gap-5 w-4/5">
    <div class="flex w-3/5">
      <input class="hidden" type="checkbox" :id="tache.Title" />
      <label
        class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
        :for="tache.Title">
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
        <span class="ml-4 text-sm">{{ tache.Description }}</span>
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
</template>
<style></style>
