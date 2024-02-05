<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import VueCookies from "vue-cookies";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import { link } from "./../assets/url.js";
import deleteModal from "./deleteModal.vue";
export default {
  components: {
    deleteModal,
  },
  setup() {
    const deconect = ref(false);
    const selectedTaskId = ref(null);
    const isLoading = ref(false);
    const router = useRouter();
    const dataUser = ref({});
    const openModal = ref(false);
    const isDelete = ref(false);
    const newTastUser = ref({
      Title: "",
      Time: "",
      Description: "",
      UserId: "",
    });
    const tasks = ref([]);
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

    const formatDateTime = (dateTime) => {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      };
      return new Date(dateTime).toLocaleDateString("en-US", options);
    };

    //Afficher les informations de l'utilisateur
    const getUser = async (key) => {
      try {
        isLoading.value = true;
        const id = localStorage.getItem("connect");
        const { data } = await axios.get(`${link}/api/users/${id}`, {
          withCredentials: true,
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
        isLoading.value = false;
        console.error(
          "Erreur lors de la récupération des données utilisateur :",
          error
        );
      }
    };
    //Ajouter une tâche
    const submitTask = async () => {
      const token = VueCookies.get("token");
      const id = localStorage.getItem("connect");
      newTastUser.value.UserId = id;

      if (
        !newTastUser.value.Title ||
        !newTastUser.value.Time ||
        !newTastUser.value.Description
      ) {
        toastError("Veuillez remplir tous les champs");
        return;
      }

      if (newTastUser.value.Time < new Date().toISOString()) {
        toastError(
          "La date et l'heure doivent être supérieures à la date actuelle"
        );
        return;
      }

      try {
        isLoading.value = true;

        // Si selectedTaskId.value est défini, alors vous modifiez une tâche existante
        if (selectedTaskId.value) {
          await UpdateTask();
        } else {
          // Sinon, vous créez une nouvelle tâche
          const { data } = await axios.post(
            `${link}/api/taches/`,
            newTastUser.value,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
              },
            }
          );

          if (data && data.message) {
            toastSuccess("Tâche créée avec succès");
            router.go(0);
          }
        }

        // Réinitialiser les valeurs du formulaire après la création ou la modification
        newTastUser.value = {
          Title: "",
          Time: "",
          Description: "",
          UserId: "",
        };
      } catch (error) {
        isLoading.value = false;
        toastError("Une erreur est survenue");
        console.error("Erreur lors de la requête axios :", error);
      }
    };

    //Déconnexion
    const logout = () => {
      VueCookies.remove("token");
      localStorage.removeItem("connect");
      router.push("/login");
    };
    //Récupérer les tâches
    const getTaches = async () => {
      const token = VueCookies.get("token");
      try {
        isLoading.value = true;
        const { data } = await axios.get(`${link}/api/taches`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        if (data && data.message) {
          tasks.value = [...data.message];
        }
      } catch (error) {
        isLoading.value = false;
        toastError("Une erreur est survenue");
        console.error("Erreur lors de la requête axios :", error);
      }
    };

    const changeDeconect = () => {
      deconect.value = !deconect.value;
    };
    //Ouvrir le modal
    const changeModal = (taskId, valueDelete) => {
      isDelete.value = valueDelete;
      selectedTaskId.value = taskId;
      openModal.value = !openModal.value;
      // Si c'est pour la modification, récupérez les détails de la tâche
      console.log("isDelete", isDelete.value);
      if (isDelete.value == true && selectedTaskId.value) {
        getTaskDetails(selectedTaskId.value);
      }
    };

    //Delete task
    const deleteTask = async () => {
      const token = VueCookies.get("token");
      try {
        isLoading.value = true;
        const { data } = await axios.delete(
          `${link}/api/taches/${selectedTaskId.value}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        if (data && data.message) {
          toastSuccess("Tâche supprimée avec succès");
          router.go(0);
        }
      } catch (error) {
        isLoading.value = false;
        toastError("Une erreur est survenue");
        console.error("Erreur lors de la requête axios :", error);
      }
    };
    // getDetailTask

    const getTaskDetails = async (taskId) => {
      openModal.value = false;
      const token = VueCookies.get("token");
      try {
        isLoading.value = true;
        const { data } = await axios.get(`${link}/api/taches/${taskId}`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        if (data && data.message) {
          // Formatage de la date avant de l'assigner
          data.message.Time = new Date(data.message.Time)
            .toISOString()
            .slice(0, 16);
          // Remplissez le formulaire avec les détails de la tâche
          newTastUser.value = { ...data.message };
        }
      } catch (error) {
        isLoading.value = false;
        toastError("Une erreur est survenue");
        console.error("Erreur lors de la requête axios :", error);
      }
    };
    //Récupérer les données de l'utilisateur et les tâches lors du montage du composant
    onMounted(() => {
      const token = VueCookies.get("token");
      getUser(token);
      getTaches();
    });

    //Modifier une tâche
    const UpdateTask = async () => {
      const token = VueCookies.get("token");
      try {
        isLoading.value = true;
        const { data } = await axios.put(
          `${link}/api/taches/${selectedTaskId.value}`,
          newTastUser.value,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        if (data && data.message) {
          toastSuccess("Tâche modifiée avec succès");
          router.go(0);
        }
      } catch (error) {
        isLoading.value = false;
        toastError("Une erreur est survenue");
        console.error("Erreur lors de la requête axios :", error);
      }
    };

    return {
      deconect,
      changeDeconect,
      formatDateTime,
      getTaches,
      tasks,
      logout,
      deleteTask,
      getTaskDetails,
      changeModal,
      isLoading,
      newTastUser,
      submitTask,
      dataUser,
      openModal,
      deleteModal,
      isDelete,
      selectedTaskId,
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
          </div>

          <button
            type="button"
            class="flex items-center transition rounded-lg group shrink-0"
          >
            <span class="sr-only">Menu</span>
            <img
              alt="Man"
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=${dataUser.fullname}"
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

          <!-- Ajoutez le bouton de déconnexion ici -->
          <button
            type="button"
            class="px-4 py-2 text-white transition bg-red-500 rounded-lg hover:bg-red-600"
            @click="changeDeconect()"
          >
            Déconnexion
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
          {{ isDelete ? "Modifier la tâche" : "Ajouter une tâche" }}
        </h2>
        <div>
          <label for="tache" class="block mb-1 ml-1 text-gray-300"
            >Taches</label
          >
          <input
            id="tache"
            type="text"
            v-model="newTastUser.Title"
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
            v-model="newTastUser.Time"
            class="block w-full p-2 rounded focus:ring focus:ri:bg-gray-500"
          />
        </div>

        <div>
          <label for="description" class="text-sm">Description</label>
          <textarea
            id="description"
            v-model="newTastUser.Description"
            placeholder=""
            class="w-full rounded-md focus:ring focus:ri:bg-gray-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="w-full px-4 py-2 font-bold text-gray-100 bg-orange-700 rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 hover:ri dark:text-gray-900"
          >
            {{ isDelete ? "Modifier" : "Ajouter" }}
          </button>
        </div>
      </form>
    </div>
    <div class="overflow-y-auto bg-gray-800 rounded-lg h-96 lg:col-span-2">
      <div
        v-if="tasks.length === 0"
        class="flex items-center justify-center w-full h-full"
      >
        Vous n'avez pas encore de tâches
      </div>
      <ul v-else class="mt-4 space-y-2">
        <li v-for="task in tasks" :key="task.id">
          <div
            class="block h-full p-4 border border-gray-700 rounded-lg hover:border-orange-600"
          >
            <strong class="font-medium text-white">{{ task.Title }}</strong>

            <p class="mt-1 text-xs font-medium text-gray-300">
              {{ task.Description }}
            </p>
            <p class="text-xs font-medium text-gray-500">
              Date and Time: {{ formatDateTime(task.Time) }}
            </p>

            <button
              @click="changeModal(task.id, true)"
              class="px-4 py-2 mt-2 mr-2 text-white rounded-md bg-violet-600 hover:bg-violet-400"
            >
              Update
            </button>
            <button
              class="px-4 py-2 mt-2 text-white bg-orange-600 rounded-md hover:bg-orange-400"
              @click="changeModal(task.id)"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- Modal Update and Delete -->
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

      <p class="mt-4 text-gray-500">
        {{
          isDelete
            ? "Voulez-vous modifier la tâche ?"
            : "Voulez-vous supprimer cette tâche ?"
        }}
      </p>

      <div class="mt-6 sm:flex sm:gap-4">
        <button
          class="inline-block w-full px-5 py-3 text-sm font-semibold text-center text-white bg-red-500 rounded-lg sm:w-auto"
          @click="deleteTask()"
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

  <!-- Modal Deconexion -->

  <div
    class="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
    role="alert"
    v-if="deconect"
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

      <p class="mt-4 text-gray-500">Voulez-vous vous déconnecter ?</p>

      <div class="mt-6 sm:flex sm:gap-4">
        <button
          class="inline-block w-full px-5 py-3 text-sm font-semibold text-center text-white bg-red-500 rounded-lg sm:w-auto"
          @click="logout()"
        >
          Oui
        </button>

        <button
          class="inline-block w-full px-5 py-3 mt-2 text-sm font-semibold text-center text-gray-700 bg-gray-300 rounded-lg sm:mt-0 sm:w-auto"
          @click="changeDeconect()"
        >
          Non
        </button>
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
