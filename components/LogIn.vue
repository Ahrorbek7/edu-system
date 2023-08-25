<template>
  <main
    class="w-full h-[100vh] flex"
  >
    <section class="login-info flex items-center justify-center h-full w-1/2">
      <div class="log-register w-[364px] h-[469px] py-4">
        <h1 class="login-title text-center text-[30px] font-extrabold">
          LOGIN
        </h1>
        <p class="text-center text-[16px] my-2 text-gray-500 text-shadow">
          Want to start great   adventure with us?
        </p>
        <p class="mt-5 kip">
          Username
        </p>
        <i class="bi bi-person absolute translate-y-5 text-xl translate-x-2 text-gray-500" />
        <input
          v-model="username"
          class="outline-none bg-slate-100 border w-full py-3 px-8 rounded-xl my-2 shadow-md"
          type="text"
          placeholder="Username"
        >
        <p class="mt-5 kip">
          Password
        </p>
        <i class="bi bi-shield-lock absolute translate-y-5 text-xl translate-x-2 text-gray-500" />
        <input
          v-model="password"
          class="outline-none bg-slate-100 border w-full py-3 px-8 rounded-xl my-2 shadow-md"
          type="password"
          placeholder="Password"
        >
        <button
          class="signin-btn w-full my-6 rounded-xl py-4 text-white transition duration-300"
          :disabled="isDisabled"
          @click="login"
        >
          <Icon
            class="text-xl mx-2"
            name="fa-brands:github"
          /> Authorize with
          GitHub
        </button>
      </div>
    </section>

    <section class="login-img h-full w-1/2 flex items-center justify-center">
      <div class="login-img--block border-2 border-gray-400 rounded-[40px] w-[400px] h-[500px] p-7">
        <h3 class="text-white text-3xl font-semibold max-w-[200px] leading-10">
          Great things are waiting for you login now and start adventure!
        </h3>
        <img
          class="absolute w-[690px] top-[20.5%] right-[5.5%]"
          src="../assets/img/login-girl-img.png"
        >
      </div>
    </section>
  </main>
</template>
<script setup>
import {ref, computed} from "vue"

defineProps({
  login:{
    type:Function,
    required:true
  }
})

const username = ref('');
const password = ref('');

const isDisabled = computed(() => {
  return username.value !== "admin" || password.value !== "12345"
});

</script>
<style>
body{
  z-index: 1;
}
.login-img {
  background-image: url('../assets/img/login-bg.jpg');
}
</style>
