<template>
  <div class="lessons-container w-full h-[100vh] overflow-hidden">
    <main>
      <nuxt-link to="/home">
        <i class="bi bi-house-fill home-link absolute left-20 text-4xl text-purple-700" />
      </nuxt-link>
      <h1 class="lessons-heading text-4xl text-center mt-14 font-semibold text-gray-900">
        Our todays lessons!
      </h1>
      <div class="task-container w-full h-[70vh] flex flex-wrap justify-evenly items-center overflow-y-scroll">
        <div 
          v-for="(lesson, index) in data"
          :key="'lesson-' + index"
          class="cursor-pointer hover:bg-slate-200 transition duration-100 task-card w-[300px] h-[370px] bg-white m-4 rounded-xl shadow-xl flex flex-col justify-between"
          @click="openModal(lesson)"
        >
          <img
            class="w-[90%] h-[43%] bord00 my-3 mx-auto"
            :src="lesson.headerImg"
            alt="taskImg"
          >
          <h1 class="text-md font-semibold text-center">
            <span v-if="lesson.title">
              {{ lesson.title }}
            </span>
            <span v-else>
              Lesson 
            </span>
          </h1>
          <h3 class="my-4 mx-2 text-gray-950">
            <i class="bi bi-mortarboard-fill text-xl text-blue-700" /> 
            speciality: 
            <span
              v-if="lesson.speciality"
              class="font-semibold text-gray-950"
            >
              {{ lesson.speciality }}
            </span>
            <span
              v-else
              class="text-gray-600"
            >Not specified</span>
          </h3>
          <p class="mx-2">
            <i class="bi bi-journal-check text-xl text-green-500" />
            Includes: 
            <span class="font-semibold">videos, presintation...</span>
          </p>
          <div class="w-full justify-between flex items-center px-2">            
            <p
              v-if="lesson.createdDate"
              class="text-gray-600 mx-2"
            >
              {{ lesson.createdDate }}
            </p>
            <p
              v-else
              class="text-gray-600"
            >
              No date set
            </p>
            <img
              width="100px"
              src="../../assets/img/logo-eduapp.png"
              alt=""
            >
          </div>
        </div>
      </div>
      <LessonModal
        :is-open="selectedLesson !== null"
        :lesson="selectedLesson"
        @close="selectedLesson = null"
      />
      <nuxt-link to="/chat">
        <button class="rounded-xl my-5 w-[12%] h-[60px] bg-purple-700 text-white mx-[45%] hover:bg-purple-900">
          Need any help?
        </button>
      </nuxt-link>
    </main>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/lessons')
import { ref } from 'vue'

const selectedLesson = ref(null)

const openModal = (lesson) => {
  selectedLesson.value = lesson
}
</script>

<style lang="scss" scoped>

</style>