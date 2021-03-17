<template>
  <div class="divRedesComp">
    <a
      class="red"
      v-for="(red, index) in list_redes"
      :key="index"
      :href="red.link"
      target="_blank"
      :title="red.title"
    >
      <img class="icon" :src="red.img" onload="SVGInject(this)" />
    </a>
  </div>
</template>

<script>
export default {
  name: "redes-comp",
  props: [],
  mounted() {},
  data() {
    return {
      list_redes: [
        {
          img: require("@/assets/icons/redes_github.svg"),
          nombre: "GitHub",
          title: "GitHub: @ovatlh",
          link: "https://github.com/ovatlh",
        },
        {
          img: require("@/assets/icons/redes_linkedin.svg"),
          nombre: "LinkedIn",
          title: "LinkedIn: @ovatlh",
          link: "https://www.linkedin.com/in/ovatlh",
        },
        {
          img: require("@/assets/icons/redes_twitter.svg"),
          nombre: "Twitter",
          title: "Twitter: @ovatlh",
          link: "https://twitter.com/ovatlh",
        },
        {
          img: require("@/assets/icons/redes_instagram.svg"),
          nombre: "Instagram",
          title: "Instagram: @ovatlh",
          link: "https://www.instagram.com/ovatlh",
        },
        {
          img: require("@/assets/icons/redes_facebook.svg"),
          nombre: "Facebook",
          title: "Facebook: @ovatlh",
          link: "https://www.facebook.com/ovatlh",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.divRedesComp {
  display: grid;
  gap: 5px;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  margin: 10px 0;
}

.red {
  display: grid;

  fill: #ffffff;

  transition: 0.1s ease;
}

.red:hover {
  transform: scale(1.3);
}

.icon {
  justify-self: center;
  min-width: 20px;
  max-width: 20px;
  height: 20px;
  margin: 5px;
  object-fit: contain;
}
</style>
