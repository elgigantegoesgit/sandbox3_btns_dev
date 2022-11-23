<template>
  <div
    v-bind:style="{ backgroundColor: mycol }"
    @mousedown="mymousedown"
    @mouseup="mymouseup"
    @touchstart="mymousedown"
    @touchend="mymouseup"
  >
    {{ btnmsg }}
  </div>
</template>

<script>
export default {
  name: "btn",
  data() {
    return {
      btnmsglcl: this.btnmsg,
      mycol: "#00ffaa",
    };
  },
  props: {
    btnmsg: String,
  },

  methods: {
    mymousedown() {
      console.log("now " + Date.now() + ":  " + this.btnmsg);
      this.$emit("myevent");
      this.mycol = "#004d99";
    },
    mymouseup() {
      console.log("up");
      this.mycol = "#00ffaa";
    },
  },
};
</script>

<style scoped>
div {
  color: #003399;
  padding: 20px;
  margin: 10px;
  /* background-color: #00ffaa; */
  border-radius: 30px;
}
</style>