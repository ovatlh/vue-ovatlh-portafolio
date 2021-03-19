<template>
  <div class="divFCASabinasView">
    <div class="top">
      <div class="bg"></div>
      <img class="portada" :src="jpgPortada" alt="Portada: FCA Sabinas">
    </div>

    <img class="icon" :src="pngIcon" alt="Icon: FCA Sabinas">

    <div class="content">
      <p><strong>Festival de la Carne Asada 2020 - Sabinas, Coahuila</strong></p>
      <p>Fue un evento donde varios equipos competían entre sí para saber quien era el mejor en el ramo de la carne asada de manera amateur.</p>
      <p>Estos fueron calificados por jueces, los cuales tienen experiencia en la cocina.</p>
      
      <br>

      <p>Participe como <strong>programador back-end</strong>, junto a mis compañeros de grado en la creación de un sistema para el evento Festival de la Carne Asada 2020 de Sabinas, Coahuila.</p>
      <p>El sistema consiste en poder administrar los equipos, jueces, fechas, ubicaciones, calificaciones y demás para el control de los datos en tiempo real desde una aplicación móvil, la cual les ayudaba a los jueces para poder calificar a los participantes.</p>
      <p>Los datos en tiempo real se mostraban en una pantalla en grande para todo el público por medio de un rango de colores.</p>  
      
      <br>
      
      <p>El proyecto estuvo en desarrollo por el periodo de: <strong>Oct 2019 – Ene 2020</strong></p>
      <p><small><strong>Con este proyecto conseguí mi opción para titulación.</strong></small></p>

      <br>

      <div class="descripcion">
        <h3>¿Qué se utilizó para crear todo el sistema?</h3>
        <p>> MySql</p>
        <p>> .NET Core</p>
        <p>> Xamarin.Forms</p>
        <p>> Visual Studio</p>
      </div>

      <br>

      <div class="links">
        <h3>Links</h3>
        <a href="http://www.fcasabinas.com/" target="_blank">> Web: FCA Sabinas 2020</a>
        <a href="https://www.facebook.com/ParrillerosDeCoahuila/" target="_blank">> Facebook: FCA Sabinas 2020</a>
        <a href="https://play.google.com/store/apps/details?id=com.itesrc.fca" target="_blank">> Google Play: FCA Sabinas</a>
        <a href="https://www.mysql.com/" target="_blank">> Web: MySql</a>
        <a href="https://dotnet.microsoft.com/download" target="_blank">> Web: .Net Core</a>
        <a href="https://dotnet.microsoft.com/apps/xamarin/xamarin-forms" target="_blank">> Web: Xamarin.Forms</a>
        <a href="https://visualstudio.microsoft.com/" target="_blank">> Web: Visual Studio</a>

        <br>
        <a href="https://www.facebook.com/media/set/?set=a.3270138113013418" target="_blank"><small>> Publicación en facebook sobre el proyecto por parte del <strong>ITESRC</strong>.</small></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fca-sabinas-view",
  props: [],
  mounted() {},
  data() {
    return {
      pngIcon: require("@/assets/proyectos/fcasabinas/imgs/fcasabinas_icon.png"),
      jpgPortada: require("@/assets/proyectos/fcasabinas/imgs/fcasabinas_portada.jpg"),
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.divFCASabinasView {
  z-index: var(--view-index);
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-content: start;

  min-height: 100vh;
  background-color: #E08B39;
}

.divFCASabinasView h3 {
  padding-bottom: 5px;
  border-bottom: 1px solid #1e1e1e;
}

.top {
  z-index: 1;
  display: grid;
  grid-template-areas: "top";

  min-height: 250px;
  max-height: 250px;
}

.bg {
  z-index: 1;
  grid-area: top;

  min-height: 250px;
  max-height: 250px;

  background-size: 150px;
  background-repeat: round;
  background-image: url('~@/assets/proyectos/fcasabinas/imgs/fcasabinas_portada.jpg');
  filter: brightness(0.30) contrast(110%) saturate(50%);
}

.portada {
  z-index: 2;
  grid-area: top;
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.icon {
  z-index: 2;
  width: 100px;
  height: 100px;
  position: absolute;
  left: var(--fca-icon-left);
  top: 200px;
  
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
}

.content {
  display: grid;
  padding: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  align-content: start;

  background-color: #f5f5f5;
  color: #1e1e1e;
}

.links {
  display: grid;
  gap: 2px;
  grid-auto-flow: row;
}

.links a {
  text-decoration: none;
  font-weight: 600;
  color: #1e1e1e;
  padding: 5px;
}

.links a:hover {
  background-color: rgb(175, 97, 24);
  color: #ffffff;
}
</style>
