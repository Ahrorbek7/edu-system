<script setup>
import { UseTimeAgo } from '@vueuse/components'

const nuxtApp = useNuxtApp()
const { data: issues, refresh, pending } = await useAsyncData(
  'issues',
  () => githubFetch('/repos/Ahrorbek7/edu-system/issues'),
  { transform: (issues) => issues.filter((issue) => issue.state === 'open') }
)
nuxtApp.hook('refresh:messages', refresh)
</script>

<template>
  <div class="flex overflow-hidden">
    <nuxt-link
      class="absolute top-10 left-10"
      to="/home"
    >
      <i class="bi bi-house-fill text-2xl text-white mx-5" />
    </nuxt-link>
    <section class="chat-img w-[50%] h-[100vh] overflow-hidden">
      <nav
        class="chatting-nav bg-purple-600 text-white h-[16vh] font-semibold py-4 border-2 w-3/5 flex items-center justify-center"
      >
        <h2 class="text-center text-2xl">
          Discuss with friends
        </h2>
      </nav>
      <img
        class="w-1/2 mx-auto my-7"
        src="../assets/img/chatting-user.png"
        alt=""
      >
    </section>
    <section class="chat-section w-[50%] border-l-2 bg-purple-600 overflow-hidden">
      <Icon
        v-if="!pending"
        name="mdi:refresh"
        class="text-white text-5xl float-right m-2 cursor-pointer"
        @click="refresh"
      />
      <main
        class="message-section w-full h-[82vh] my-12 overflow-y-scroll "
      >
        <div
          v-for="issue in issues"
          :key="issue.id"
          class="chat-message w-[400px] py-1 flex-wrap overflow-auto bg-gray-100 my-6 mx-16 shadow-gray-400 shadow-md"
        >
          <a
            class="m-2 flex items-center text-gray-700 font-semibold"
            :href="`https://github.com/${issue.user.login}`"
            target="_blank"
          >
            <img
              class="mx-2 rounded-[50%]"
              width="50px"
              :src="issue.user.avatar_url"
            >
            {{ issue.user.login }}
          </a>
          <div class="chat-msg w-full h-[50%] overflow-y-scroll flex-wrap">
            <h3 class="m-5">
              {{ issue.title }}
            </h3>
          </div>
          <p class="text-sm text-gray-600 float-right my-3 mx-4">
            Sent
            <UseTimeAgo
              v-slot="{ timeAgo }"
              :time="issue.created_at"
            >
              {{ timeAgo }}
            </UseTimeAgo>
          </p>
        </div>
      </main>
    </section>
  </div>
</template>