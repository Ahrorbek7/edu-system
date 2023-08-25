<template>
  <div>
    <NavBar v-if="user" />
    <LogOut
      v-if="user"
      :user="user"
    />  
    <img
      class="w-[200px] absolute logo-site"
      src="../assets/img/logo-eduapp.png"
    >
    <MyAccount
      v-if="user"
      :user="user"
    />
    <LogIn
      v-else
      :login="login"
    />
  </div>
</template>

<script setup>
const login = githubLogin
const user = await fetchGithubUser()

</script>

<style>
@import '../assets/style/main.css';
</style>
