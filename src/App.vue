<template>
  <div>
    <!-- img alt="Vue logo" src="./assets/logo.png" / -->
    <!-- btn id="btn_toggle" btnmsg="Toggle View">Toggle View</btn -->
    <button @click="page_toggle">Toggle View</button>


    <div id="pages">
      <HelloWorld v-show="showHello" msg="xxxx Tests mit git" />
      <btn v-show="!showHello" btnmsg="Alternative Seite"></btn>
    </div>
  </div>
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
import btn from "./components/btn.vue";
export default {
  name: "App",
  components: {
    HelloWorld: HelloWorldVue,
    btn: btn
  },
  data() {
    return {
      showHello: 1
    };
  },
  methods: {
    page_toggle() {
      this.showHello = !this.showHello;
      console.log(
        'Toggle View: Normaler <button> per @click="methode" ' + Date.now()
      );
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  background: linear-gradient(45deg, #233329, #63d471);
}
#pages {
  text-align: center;
}
#btn_toggle {
  text-align: left;
  display: inline-flex;
}
</style>
