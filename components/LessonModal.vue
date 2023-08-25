<script>


export default {

  props: {
    isOpen: Boolean,
    lesson: Object
  },
  // Other component options and methods
}
</script>

<template>
  <Transition name="modal-outer">
    <div
      v-if="isOpen"
      class="modal fixed top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <Transition name="modal-inner">
        <div class="modal-content bg-white rounded-md w-[70%] z-10 h-[94%] shadow-xl border border-gray-400">
          <!-- Lesson information -->
          <div class="modal-inner flex w-full h-full">
            <div>
              <iframe
                class="w-[98%] h-[300px] m-4"
                :src="lesson.videoUrl"
                frameborder="0"
              />
              <section class="text-area-modal w-[95%] mx-4 my-4 overflow-y-scroll text-gray-700 pb-4 h-[300px] text-center px-4">
                <h1 class="text-gray-900 text-xl font-semibold text-center my-4">
                  {{ lesson.title }}
                </h1>
                {{ lesson.description }}
              </section>
            </div>
            <section class="lesson-txt px-6">
              <h1 class="text-3xl text-center my-4 rounded-xl font-semibold">
                Useful Podcasts <i class="bi bi-headphones" />
              </h1>
              <audio
                v-if="lesson.podcast1"
                controls
              >
                <source
                  :src="lesson.podcast1"
                  type="audio/mp3"
                >

                Your browser does not support the audio element.
              </audio>
              <audio
                v-if="lesson.podcast2"
                controls
              >
                <source
                  :src="lesson.podcast2"
                  type="audio/mp3"
                >

                Your browser does not support the audio element.
              </audio>
              <audio
                v-if="lesson.podcast3"
                controls
              >
                <source
                  :src="lesson.podcast3"
                  type="audio/mp3"
                >
                  
                Your browser does not support the audio element.
              </audio>
              <audio
                v-if="lesson.podcast4"
                controls
              >
                <source
                  :src="lesson.podcast4"
                  type="audio/mp3"
                >

                Your browser does not support the audio element.
              </audio>
              <audio
                v-if="lesson.podcast5"
                controls
              >
                <source
                  :src="lesson.podcast5"
                  type="audio/mp3"
                >
                
                Your browser does not support the audio element.
              </audio>
              <audio
                v-if="lesson.podcast6"
                controls
              >
                <source
                  :src="lesson.podcast6"
                  type="audio/mp3"
                >
              
              </audio>
            </section>
            <button
              class="float-right px-7 py-2 rounded-md bg-blue-600 text-white m-4 h-[60px]"
              @click="$emit('close')"
            >
              Close
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
<style scoped>
audio {
  margin: 2rem auto;
}
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
