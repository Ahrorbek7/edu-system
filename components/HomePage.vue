<template>
  <div class="home-container w-full h-[100vh]">
    <NavBar />
    <main>
      <section class="w-full home-main my-2 h-[90vh] flex">
        <div class="home-txt w-1/2 flex flex-col justify-center px-[10%]">
          <h1 class="text-5xl font-bold leading-12 max-w-[400px] my-6">
            The <span class="text-purple-600">Smart</span> Choice For <span class="text-purple-600">Future</span>
          </h1>
          <p class="text-gray-600 max-w-[450px]">
            EduApp is a training provider based accross students that specialises for programming and some other tips.We crush the..
          </p>
          <nuxt-link to="/lessons/mylessons">
            <button class="bg-purple-600 text-white font-semibold py-3 px-6 my-8 rounded-xl hover:bg-purple-700">
              Start training
            </button>
          </nuxt-link>
        </div>
        <div class="home-img w-1/2 flex items-center">
          <img
            class="w-[80%]"
            src="../assets/img/home-img-section-people.jpg"
          >
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import NavBar from './NavBar.vue';
</script>
