<template>
  <div class="home">
    <Onboarding />
  </div>
</template>

<script>
// @ is an alias to /src
import Onboarding from "@/components/Onboarding.vue";

export default {
  name: "Home",
  components: {
    Onboarding,
  },
};
</script>
