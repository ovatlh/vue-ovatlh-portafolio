<template>
  <div class="divNotFoundView">
    <p><span>404</span> <span>:(</span></p>
  </div>
</template>

<script>
export default {
  name: "not-found-view",
  props: [],
  mounted() {
    document.title = "404 - Not Found | @ovatlh";
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.divNotFoundView {
  display: grid;
  justify-content: center;
  align-content: center;

  background-color: #f5f5f5;
  color: #1e1e1e;
  height: 100vh;
}

.divNotFoundView p {
  display: grid;
  gap: 20px;
  grid-template-rows: auto auto;
  text-align: center;
  font-weight: 600;
  font-size: 32px;
}
</style>
