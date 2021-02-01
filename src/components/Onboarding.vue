<template>
  <div class="Onboarding w-full overflow-hidden">
    <div v-if="state.view == 1" class=" transition duration-1000">
      <div class="flex justify-between items-center ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-left-short text-red-400 cursor-pointer"
            viewBox="0 0 16 16"
            v-if="state.view > 1"
            @click="prev()"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </div>
        <img src="../assets/svg/logo.svg" />
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <div
          class="flex justify-center items-center pt-5 h-64 animate__animated animate__headShake animate__infinite animate__slow "
        >
          <img src="../assets/svg/onboard-1.svg" />
        </div>
        <div class="text-center">
          <h1 class="text-xl font-bold text-red-400 h-14">
            Daily Schedule Optimization
          </h1>
          <h1 class="text-lg h-40 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            culpa maxime atque ad.
          </h1>
        </div>
      </div>
      <div class="flex justify-center pt-3 space-x-1">
        <span
          class="w-5 h-3 rounded-full bg-red-400 bg-opacity-70 shadow-lg animate-pulse"
        ></span>
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
      </div>
      <div class="flex justify-center items-center pt-16">
        <div
          class="w-20 h-20 relative justify-center items-center flex cursor-pointer hover:scale-90 transform transition duration-1000"
          @click="next()"
        >
          <div
            class="w-full h-full border-4 border-gray-400 rounded-full absolute dark:border-gray-200"
          ></div>
          <div
            class="w-full h-full border-t-4 border-red-400 rounded-full absolute"
          ></div>
          <div
            class="w-3/4 h-3/4 bg-red-400 rounded-full justify-center items-center flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              class="bi bi-arrow-right-short w-3/4 h-3/4 text-white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div v-if="state.view == 2">
      <div class="flex justify-between items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-left-short text-red-400 cursor-pointer"
            viewBox="0 0 16 16"
            v-if="state.view > 1"
            @click="prev()"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </div>
        <img src="../assets/svg/logo.svg" />
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <div
          class="flex justify-center items-center pt-5 h-64 animate__animated animate__headShake animate__infinite animate__slow"
        >
          <img src="../assets/svg/onboard-2.svg" />
        </div>
        <div class="text-center">
          <h1 class="text-xl font-bold text-red-400 h-14">
            Set A Systematic Schedule
          </h1>
          <h1 class="text-lg h-40 dark:text-white">
            Nostrum dolorem temporibus eius. Reprehenderit ducimus voluptate
            explicabo ab! Cupiditate nam harum fuga corrupti?
          </h1>
        </div>
      </div>
      <div class="flex justify-center pt-3 space-x-1">
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
        <span
          class="w-5 h-3 rounded-full bg-red-400 bg-opacity-70 shadow-lg animate-pulse"
        ></span>
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
      </div>
      <div class="flex justify-center items-center pt-16">
        <div
          class="w-20 h-20 relative justify-center items-center flex cursor-pointer hover:scale-90 transform transition duration-1000"
          @click="next()"
        >
          <div
            class="w-full h-full border-4 border-gray-400 rounded-full absolute dark:border-gray-200"
          ></div>
          <div
            class="w-full h-full border-t-4 border-r-4 border-red-400 rounded-full absolute"
          ></div>
          <div
            class="w-3/4 h-3/4 bg-red-400 rounded-full justify-center items-center flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              class="bi bi-arrow-right-short w-3/4 h-3/4 text-white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div v-if="state.view == 3">
      <div class="flex justify-between items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-left-short text-red-400 cursor-pointer"
            viewBox="0 0 16 16"
            v-if="state.view > 1"
            @click="prev()"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </div>
        <img src="../assets/svg/logo.svg" />
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <div
          class="flex justify-center items-center pt-5 h-64 animate__animated animate__headShake animate__infinite animate__slow"
        >
          <img src="../assets/svg/onboard-3.svg" />
        </div>
        <div class="text-center">
          <h1 class="text-xl font-bold text-red-400 h-14">
            Speed Up Work In Scheduling
          </h1>
          <h1 class="text-lg h-40 dark:text-white">
            Nostrum dolorem temporibus eius. Reprehenderit ducimus voluptate
            explicabo ab! Cupiditate nam harum fuga corrupti?
          </h1>
        </div>
      </div>
      <div class="flex justify-center pt-3 space-x-1">
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
        <span
          class="w-5 h-3 rounded-full bg-red-400 bg-opacity-70 shadow-lg animate-pulse"
        ></span>
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
      </div>
      <div class="flex justify-center items-center pt-16">
        <div
          class="w-20 h-20 relative justify-center items-center flex cursor-pointer hover:scale-90 transform transition duration-1000"
          @click="next()"
        >
          <div
            class="w-full h-full border-4 border-gray-400 rounded-full absolute dark:border-gray-200"
          ></div>
          <div
            class="w-full h-full border-t-4 border-r-4 border-b-4 border-red-400 rounded-full absolute"
          ></div>
          <div
            class="w-3/4 h-3/4 bg-red-400 rounded-full justify-center items-center flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              class="bi bi-arrow-right-short w-3/4 h-3/4 text-white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div v-if="state.view == 4">
      <div class="flex justify-between items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-left-short text-red-400 cursor-pointer"
            viewBox="0 0 16 16"
            v-if="state.view > 1"
            @click="prev()"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </div>
        <img src="../assets/svg/logo.svg" />
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <div
          class="flex justify-center items-center pt-5 h-64 animate__animated animate__headShake animate__infinite animate__slow"
        >
          <img src="../assets/svg/onboard-4.svg" />
        </div>
        <div class="text-center">
          <h1 class="text-xl font-bold text-red-400 h-14">
            Increase Income Fast
          </h1>
          <h1 class="text-lg h-40 dark:text-white">
            Nostrum dolorem temporibus eius. Reprehenderit ducimus voluptate
            explicabo ab! Cupiditate nam harum fuga corrupti?
          </h1>
        </div>
      </div>
      <div class="flex justify-center pt-3 space-x-1">
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
        <span
          class="w-3 h-3 rounded-full bg-gray-700 bg-opacity-70 shadow-lg dark:bg-gray-300"
        ></span>
        <span
          class="w-5 h-3 rounded-full bg-red-400 bg-opacity-70 shadow-lg animate-pulse"
        ></span>
      </div>
      <div class="flex justify-center items-center pt-16">
        <div
          class="w-20 h-20 relative justify-center items-center flex cursor-pointer hover:scale-90 transform transition duration-1000"
        >
          <div
            class="w-full h-full border-4 border-gray-400 rounded-full absolute dark:border-gray-200"
          ></div>
          <div
            class="w-full h-full border-4 border-red-400 rounded-full absolute"
          ></div>
          <div
            class="w-3/4 h-3/4 bg-red-400 rounded-full justify-center items-center flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              class="bi bi-arrow-right-short w-3/4 h-3/4 text-white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import { reactive } from "vue";
export default {
  name: "onboarding",
  setup() {
    const state = reactive({
      view: 1,
    });
    function next() {
      state.view++;
      console.log(state.view);
    }
    function prev() {
      state.view--;
    }
    return {
      state,
      next,
      prev,
    };
  },
};
</script>

<style leng="scss">
.active {
  left: 0;
  transition: 2s;
}
</style>
