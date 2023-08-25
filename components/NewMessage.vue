<script setup>
const title = ref('')
const sending = ref(false)
const nuxtApp = useNuxtApp()
const postIssue = async () => {
  if (sending.value || !title.value.trim()) return
  sending.value = true
  await githubFetch('/repos/Ahrorbek7/edu-system/issues', {
    method: 'POST',
    body: { title: title.value, },
  })
  sending.value = false
  title.value = ''
  nuxtApp.callHook('refresh:messages')
}
</script>

<template>
  <div>
    <form
      
      @submit.prevent="postIssue"
    >
      <div class="new w-1/2 flex justify-end items-center fixed bottom-0 right-0">
        <input
          v-model="title"
          type="text"
          required
          placeholder="Write a message... :)"
          class="new-msg w-[90%] h-[9vh]  shadow-xl my-[-20px] px-3 border outline-none"
        >
        <button
          type="submit"
          class="send-btn py-[19px] px-6 text-white bg-purple-600 border-2 border-white rounded"
        >
          {{ sending ? 'Sending...' : 'Send' }}
        </button>
      </div>
    </form>
  </div>
</template>
