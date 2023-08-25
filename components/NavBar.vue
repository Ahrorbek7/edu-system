<template>
  <nav>
    <div class="nav-container w-2/3 h-[10vh] flex items-end float-right justify-evenly fixed right-0">
      <div
        v-for="(btn, index) in btns"
        :key="index"
        class="navbar"
      >
        <nuxt-link :to="btn.route">
          <button class="py-3 px-6 bg-purple-600 text-white rounded-[30px] hover:bg-transparent hover:text-purple-800 transition duration-300">
            {{ btn.txt }}
          </button>
        </nuxt-link>
      </div>
      <div
        class="mobile-navbar absolute w-full border-t-2 bottom-0 left-0 h-[9vh] bg-white items-center justify-evenly hidden"
      >
        <nuxt-link to="/home">
          <i class="bi bi-house text-2xl text-purple-600" />
        </nuxt-link>
        <nuxt-link to="/lessons/mylessons">
          <i class="bi bi-journal text-2xl text-purple-600" />
        </nuxt-link>
        <nuxt-link to="/chat">
          <i class="bi bi-telegram text-2xl text-purple-600" />
        </nuxt-link>
        <nuxt-link to="/">
          <i class="bi bi-person text-2xl text-purple-600" />
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
const btns = [
  { txt: 'Home', route: '/home' },
  { txt: 'My Lessons', route: '/lessons/mylessons' },
  { txt: 'Discuss', route: '/chat' },
  { txt: 'My Account', route: '/' },
];
</script>
