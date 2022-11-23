<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>dddddddddd</p>
    <btn @myevent="myMeth_btn1()" :btnmsg="maindata1"></btn>
    <btn @myevent="myMeth_btn2()" :btnmsg="maindata2"></btn>
    <btn btnmsg="button 3"></btn>
  </div>
</template>

<script>
import btn from "./btn.vue";
export default {
  name: "HelloWorld",
  components: {
    btn: btn,
  },
  data() {
    return {
      maindata1: "strFromMainData",
      maindata2: "strFromMainData2",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    myMeth_btn1() {
      console.log("mymeth");
      this.maindata1 = "maindata1 set by btn1";
    },
    myMeth_btn2() {
      this.maindata1 = "maindata1 set by btn2";
    },
  },
};
</script>

<style scoped>
p {
  color: #42b983;
}
</style>
