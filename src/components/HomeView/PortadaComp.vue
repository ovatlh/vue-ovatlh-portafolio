<template>
  <div class="divPortadaComp">
    <img class="imgBG" :src="imgPortada" alt="portada" />

    <div class="content">
      <div class="tavolh">
        <p class="top">Tavo</p>
        <p class="bottom">López Hernández</p>
      </div>

      <div class="ovatlh">
        <img class="imgProfile" :src="imgProfile" alt="ovatlh - profile pic" />

        <div class="desc">
          <p class="atovatlh">@ovatlh</p>
          <p class="dev">full-stack developer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portada-comp",
  props: [],
  mounted() {},
  data() {
    return {
      imgPortada: require("@/assets/imgs/portada.jpg"),
      imgProfile: require("@/assets/imgs/profile_picture_01.jpg"),
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.divPortadaComp {
  display: grid;
  grid-template-areas: "Portada";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-content: center;

  min-height: 600px;
  height: 100vh;

  overflow: hidden;
}

.imgBG {
  grid-area: Portada;
  z-index: 1;

  object-fit: cover;
  width: 100%;
  height: 100%;
}

.content {
  grid-area: Portada;
  z-index: 2;
  justify-self: center;
  align-self: center;
  text-align: center;

  display: grid;
  gap: 20px;
  grid-template-areas: var(--homeview-content-grd-areas);
  grid-template-columns: var(--homeview-content-grd-columns);
  grid-template-rows: var(--homeview-content-grd-rows);
  justify-items: center;
  align-items: center;
  width: 100%;

  color: #ffffff;
}

.tavolh, .ovatlh {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-items: center;
}

.tavolh {
  grid-area: Tavolh;
}

.ovatlh {
  grid-area: ovaTlh;
  gap: 10px;
}

.top {
  font-size: 100px;
  line-height: 100px;
  font-weight: bold;
}

.bottom {
  font-size: 28px;
  line-height: 28px;
}

.imgProfile {
  z-index: 1;
  object-fit: contain;
  width: 260px;
  height: 260px;
  border-radius: 100%;
  border: 10px solid #ffffff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 1);
}

.desc {
  z-index: 2;
}

.atovatlh {
  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
}

.dev {
  font-size: 18px;
  line-height: 18px;
}
</style>
