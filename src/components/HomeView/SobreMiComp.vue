<template>
  <div class="divSobreMiComp">
    <div class="content">
      <div class="divImgProfile">
        <div class="imgBGEffect"></div>
        <img class="imgProfile" :src="imgProfile02" alt="" />
      </div>

      <div class="text">
        <p>
          Lorem ipsum dolor sit, <strong>Tavo</strong> amet consectetur
          adipisicing elit. Totam consequuntur dolore veniam, odio modi nostrum
          quidem aut, quos dicta doloribus praesentium, voluptatum ea quod in
          laborum perferendis. Doloribus iusto excepturi, ipsum omnis sit
          adipisci! Aliquid, nostrum quisquam amet quaerat iste inventore
          corporis asperiores voluptate. Illo, maiores quos? Perspiciatis,
          labore voluptatem!
        </p>
        <p>
          Lorem ipsum dolor sit, <strong>Tavo</strong> amet consectetur
          adipisicing elit. Totam consequuntur dolore veniam, odio modi nostrum
          quidem aut, quos dicta doloribus praesentium, voluptatum ea quod in
          laborum perferendis. Doloribus iusto excepturi, ipsum omnis sit
          adipisci! Aliquid, nostrum quisquam amet quaerat iste inventore
          corporis asperiores voluptate. Illo, maiores quos? Perspiciatis,
          labore voluptatem!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sobre-mi-comp",
  props: [],
  mounted() {},
  data() {
    return {
      imgProfile02: require("@/assets/imgs/profile_picture_02.jpg"),
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.divSobreMiComp {
  display: grid;
  grid-template-areas: "SobreMi";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-content: center;

  min-height: 600px;

  overflow: hidden;
}

.content {
  width: 100%;

  display: grid;
  gap: 50px;
  padding: 50px;
  grid-template-areas: var(--sobremicomp-content-grd-areas);
  grid-template-columns: var(--sobremicomp-content-grd-columns);
  grid-template-rows: var(--sobremicomp-content-grd-rows);
  align-self: center;
  align-items: center;
}

.divImgProfile{
  max-width: 250px;
  max-height: 250px;
  display: grid;
  grid-template-areas: "ImgProfile";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  transform: translateX(10px);
  justify-self: center;
}

.imgBGEffect {
  z-index: 1;
  grid-area: ImgProfile;
  width: calc(100% - (4px * 2));
  height: calc(100% - (4px * 2));
  border: 4px solid #1e1e1e;
  transform: translate(-20px, -20px);
}

.imgProfile {
  grid-area: ImgProfile;
  z-index: 2;
  object-fit: contain;
  width: 100%;
}

.text {
  display: grid;
  gap: 10px;
  align-content: start;

  width: 100%;
}

.text p {
  text-align: start;
  word-break: break-all;
  word-wrap: break-word;
}
</style>
