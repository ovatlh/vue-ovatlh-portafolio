<template>
  <div class="divSobreMiComp" id="sobremi">
    <div class="content">
      <div class="divImgProfile">
        <div class="imgBGEffect"></div>
        <img class="imgProfile" :src="imgProfile02" alt="" />
      </div>

      <div class="text">
        <p>
          Hola, soy <strong>Tavo</strong>, tengo {{ edad }} años y soy de México.
        </p>

        <p>
          Soy egresado del <strong>ITESRC</strong> (Instituto Tecnológico de Estudios Superiores de la Región Carbonífera) de la carrera <strong>Ing. en Sistemas Computacionales</strong>.
        </p>

        <!-- <p>
          Estudie la carrera de <strong>Ing. en Sistemas Computacionales</strong> en el <strong>ITESRC</strong> (Instituto Tecnológico de Estudios Superiores de la Región Carbonífera).
        </p> -->
        <p>
          Llevo programando desde la secundaria y desde entonces he pasado por visual basic, adobe flash con action script (2.0 y 3.0), c, c++, hasta las tecnologías que aparecen al final.
        </p>
        <p>
          Me gusta seguir estudiando para mantenerme actualizado, mejorar y aumentar mis conocimientos en la programación.
        </p>
        
        <a href="https://rcarbonifera.tecnm.mx/" target="_blank">> Web: ITESRC</a>
        <a href="https://www.facebook.com/itesrc" target="_blank">> Facebook: ITESRC</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sobre-mi-comp",
  props: [],
  mounted() {
    this.mthCalcularEdad();
  },
  data() {
    return {
      imgProfile02: "https://raw.githubusercontent.com/ovatlh/ovatlh.github.io/main/portafolio/ovatlh_2.jpg",
      edad: 23,
      fechaNacimiento: new Date(1997, 10, 23),
    };
  },
  methods: {
    mthCalcularEdad() {
      var diff_ms = Date.now() - this.fechaNacimiento.getTime();
      var age_dt = new Date(diff_ms);

      this.edad = Math.abs(age_dt.getUTCFullYear() - 1970);
    },
  },
  computed: {},
};
</script>

<style scoped>
.divSobreMiComp {
  z-index: 2;
  display: grid;
  grid-template-areas: "SobreMi";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-content: center;

  min-height: 600px;

  overflow: hidden;

  background-color: #ffffff;

  box-shadow: 0 -50px 50px 0 rgba(0, 0, 0, 1);
}

.content {
  width: 100%;

  display: grid;
  gap: var(--sobremicomp-content-grd-gap);
  padding: 50px;
  grid-template-areas: var(--sobremicomp-content-grd-areas);
  grid-template-columns: var(--sobremicomp-content-grd-columns);
  grid-template-rows: var(--sobremicomp-content-grd-rows);
  align-self: center;
  align-items: center;
}

.divImgProfile {
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
  grid-auto-flow: row;
  gap: 10px;
  align-content: start;

  width: 100%;
}

.text p {
  text-align: start;
  /* word-break: break-all; */
  word-wrap: break-word;
}

.text a {
  text-decoration: none;
  font-weight: 600;
  color: #1e1e1e;
  padding: 5px 10px;
}

.text a:hover {
  background-color: #1e1e1e;
  color: #ffffff;
}
</style>
