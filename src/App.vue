<template>
  <div id="app">
    <MainBoard :finalmachine="MainMachine" />
  </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainBoard from './components/mainboard.vue';
import { gethostdetails } from './machineinfo';

interface MachineType  {
    OSName: string;
    TotalMemory: string;
    FreeMemory: string;
    HostName: string;
    Platform: string;
    Architecture: string;
    CPU: string[];
    IPAddress: any[];
}

@Component({
  components: {
    MainBoard,
  },
})

export default class App extends Vue {
  public MainMachine: MachineType = {
    OSName: "",
    TotalMemory: "",
    FreeMemory: "",
    HostName: "",
    Platform: "",
    Architecture: "",
    CPU: [""],
    IPAddress: [{}],
  };
  public created() {
    gethostdetails()
      .then((res) => {
              this.MainMachine.OSName = res["OS Platform"];
              this.MainMachine.TotalMemory = res["Total Memory"];
              this.MainMachine.FreeMemory = res["Free Memory"];
              this.MainMachine.HostName = res[`Host`];
              this.MainMachine.Platform = res["OS Platform"];
              this.MainMachine.Architecture = res["OS Archtecture"];
              const cpujson = res[`CPUS`];
              for (const cpurecord in cpujson) {
                  if (cpujson.hasOwnProperty(cpurecord)) {
                      const proprecord = cpujson[cpurecord];
                      this.MainMachine.CPU.push(proprecord[`model`]);
                  }
              }
              const ipinfo = res[`IPAddress`];
              const wifi = JSON.parse(JSON.stringify(ipinfo["Wi-Fi"]));
              this.MainMachine.IPAddress.length = 0;
              for (const iprecord in wifi) {
                  if (!iprecord.hasOwnProperty(wifi)) {
                      const record = wifi[iprecord];
                      this.MainMachine.IPAddress.push(record);
                  }
              }
      })
  } 
}

//ADD CYPRESS SUPPORT npx cypress open
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
