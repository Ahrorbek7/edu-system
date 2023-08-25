<template>
  <div>
    <nav
      class="chatting-nav absolute bg-purple-600 text-white h-[17vh] font-semibold py-4 border-2 w-[29%] flex items-center justify-center"
    >
      <nuxt-link to="/home">
        <i class="bi bi-house-fill text-2xl text-white mx-5" />
      </nuxt-link>
      <h2 class="profile-heading text-center text-2xl">
        My Account
      </h2>
    </nav>
    <div class="flex justify-center h-[100vh] w-full">
      <div class="profile-block w-[500px] h-[90vh] flex-wrap my-20">
        <img
          class="profileImg w-[200px] rounded-[50%] mx-auto"
          :src="user.avatar_url"
          alt="userImg"
        >
        <h2 class="text-center text-xl font-semibold">
          {{ user.name }}
        </h2>
        <div class="flex w-full justify-center my-2">
          <p class="mx-2 text-2xl">
            <i class="bi bi-people-fill text-blue-700" />
            {{ user.followers }}
          </p>
          <p class="mx-2 text-2xl">
            <i class="bi bi-person-add text-green-600" />
            {{ user.following }}
          </p>
        </div>
        <p class="text-gray-600 text-center my-2 max-w-[500px]">
          {{ user.bio }}
        </p>
        <a
          :href="user.html_url"
        >
          <p class="my-4 text-center hover:underline">
            <Icon name="fa-brands:github" />
            My github profile
          </p>
        </a>
        <p class="my-5 text-gray-760">
          <i class="bi bi-geo-alt-fill text-green-500 font-semibold text-xl" /> 
          Location: 
          <span class="text-gray-950 font-semibold">{{ user.location }}</span>
        </p>
        <p class="my-6 text-gray-760">
          <i class="bi bi-building font-semibold text-xl" /> 
          Company: 
          <span class="text-gray-950 font-semibold">{{ user.company }}</span>
        </p>
        <p class="my-6">
          <i class="bi bi-briefcase font-semibold text-xl" /> 
          Owner of the <span class="font-semibold">{{ user.public_repos }}</span> in Github Portfolio
        </p>
        <p
          v-if="user.twitter"
          class="my-6"
        >
          <i class="bi bi-twitter text-blue-700" />
          Twitter: <span>{{ user.twitter }}</span>
        </p>
        <p
          v-if="user.blog"
          class="my-6"
        >
          You can follow me on {{ user.blog }}
        </p>
        <p class="my-4">
          <i class="bi bi-clock-fill text-xl text-gray-600" />
          Account created 
          <UseTimeAgo
            v-slot="{ timeAgo }"
            :time="user.created_at"
          >
            {{ timeAgo }}
          </UseTimeAgo>
        </p>
        <p class="my-4">
          <i class="bi bi-arrow-clockwise text-2xl text-blue-600" />
          Last updating
          <UseTimeAgo
            v-slot="{ timeAgo }"
            :time="user.updated_at"
          >
            {{ timeAgo }}
          </UseTimeAgo>
        </p>
      </div>
    </div>
  </div>
</template>
  <script setup>
  import { UseTimeAgo } from '@vueuse/components';
defineProps({
  user: {
    type: Object,
    required: true
  }
})

</script>

  