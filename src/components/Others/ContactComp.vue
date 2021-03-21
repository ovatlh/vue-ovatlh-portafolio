<template>
  <div class="divContactComp">
    <div class="bgContact" @click="mthToggleContact"></div>
    <form class="frmContact" @submit.prevent="mthSendForm">
      <h3>¡Pongámonos en contacto!</h3>
      <input
        type="text"
        name="name"
        placeholder="¿Como te llamas?"
        v-model="name"
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        v-model="email"
      />
      <p>¿En que podemos trabajar?</p>
      <textarea
        name="message"
        placeholder="Hola, quiero trabajar contigo en mi tiendita!"
        v-model="mensaje"
      ></textarea>
      <button type="submit" :disabled="enviando">
        {{ enviando ? "Enviando..." : "Enviar" }}
      </button>
      <div class="close" @click="mthToggleContact">x</div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
export default {
  name: "contact-comp",
  props: [],
  mounted() {
    this.documentTitle = document.title;
    document.title = "Contacto | @ovatlh";
  },
  beforeDestroy() {
    document.title = this.documentTitle;
  },
  data() {
    return {
      documentTitle: "",
      name: "",
      email: "",
      mensaje: "",
      destino: "https://formspree.io/f/mnqlanvp",
      enviando: false,
    };
  },
  methods: {
    ...mapActions({
      mthMapToggleContact: "actToggleContact",
    }),
    mthToggleContact() {
      this.mthMapToggleContact({ status: false });
    },
    mthSendForm() {
      if (
        this.name.length <= 0 ||
        this.email.length <= 0 ||
        this.mensaje.length <= 0
      ) {
        this.mthErrorEmpty();
      } else {
        this.enviando = true;
        Vue.axios
          .post(this.destino, {
            name: this.name,
            from: this.email,
            _subject: `Portafolio | ${this.name} | GitHubPages`,
            message: this.mensaje,
          })
          .then((response) => {
            this.name = "";
            this.email = "";
            this.mensaje = "";
            this.mthOk();
            console.log(response.data);
          })
          .catch((error) => {
            alert(
              "Ups! ¿Parece que paso algo malo? \nNo olvides intentar de nuevo!"
            );
            console.log(error.data);
          })
          .finally(() => {
            this.enviando = false;
          });
      }
    },
    mthErrorEmpty() {
      alert("No olvides llenar todo! :)");
    },
    mthOk() {
      alert("Listo! \nPronto me pondre en contacto contigo! :)");
    },
  },
  computed: {},
};
</script>

<style scoped>
.divContactComp {
  z-index: var(--contactcomp-index);

  display: grid;
  grid-template-areas: "Contact";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}

.bgContact {
  grid-area: Contact;
  
  background-color: rgba(0, 0, 0, 0.3);
}

.frmContact {
  grid-area: Contact;
  position: relative;
  display: grid;
  gap: 10px;
  padding: 20px;
  margin: 10px;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto 1fr auto;
  background-color: #f5f5f5;
  color: #1e1e1e;
  border-radius: 5px;
  min-height: 250px;
  max-height: 400px;
  min-width: 250px;
  max-width: 300px;
  justify-self: center;
  align-self: center;

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}

.frmContact input,
.frmContact textarea {
  padding: 10px;
  min-width: 100%;
  max-width: 100%;
  width: 100%;
}

.frmContact textarea {
  min-height: 100px;
  resize: none;
}

.frmContact p {
  text-align: center;
  font-weight: 600;
}

.frmContact button {
  border: none;
  background-color: #d9d9d9;
  color: #1e1e1e;
  font-weight: 600;
  padding: 10px;
}

.frmContact button:hover {
  background-color: #051061;
  color: #ffffff;
  cursor: pointer;
}

.close {
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 5px;
  background-color: rgb(236, 43, 43);
  color: #ffffff;
  font-weight: 600;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;
}

.close:hover {
  background-color: rgb(194, 19, 19);
}
</style>
