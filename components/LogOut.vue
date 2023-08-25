<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    required: true
  }
})
const logout = githubLogout
</script>

<template>
  <div class="flex items-center gap-2 justify-between bg-light-200">
    <button
      class="py-2 px-6 bg-red-600 text-white rounded-md hover:bg-red-700 top-6 right-2 absolute"
      @click="logout"
    >
      <i class="bi bi-box-arrow-right text-xl" />
    </button>
  </div>
</template>
