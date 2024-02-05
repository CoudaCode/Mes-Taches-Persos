<script>
export default {
  props: {
    openModal: Boolean,
    changeModal: Function,
    deleteTask: Function,
    selectedTaskId: Number,
  },
  setup(props) {
    const changeModal = () => {
      props.changeModal();
    };

    const deleteTask = () => {
      // Accéder à selectedTaskId
      const taskId = props.selectedTaskId;
      // Utiliser taskId dans la fonction deleteTask
      props.deleteTask(taskId);
    };

    const openModal = props.openModal;

    return {
      // Utilisez les props directement ici
      openModal,
      changeModal,
      deleteTask,
    };
  },
};
</script>
<template></template>

<style></style>
