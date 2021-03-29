<template>
  <div id="app">
    <MainBoard msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainBoard from './components/mainboard.vue';
import { gethostdetails } from './machineinfo';

@Component({
  components: {
    MainBoard,
  },
})
export default class App extends Vue {
  public class MachineDetail {
     OSName: string;
     TotalMemory: string;
     FreeMemory: string;
  }
  public OSName: string = "";
  public TotalMemory: string = "";
  public FreeMemory: string = "";
  public created() {
    this.MachineDetail = new MachineDetail();
    gethostdetails()
      .then((res) => {
        console.log(res);
        this.OSName = res["OS Platform"];
        this.TotalMemory = res["Total Memory"];
        this.FreeMemory = res["Free Memory"];
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
