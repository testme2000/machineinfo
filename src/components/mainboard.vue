<template>
    <div>
        <h1 class="title is-1">Machine Details</h1>
        <table class="table is-bordered">
            <thead class="title is-4">Basic Machine and Browser Information</thead>
            <tbody>
                <tr>
                    <td class="subtitle is-4">Machine Operating System</td>
                    <td>{{properos}}</td>
                </tr>
                <tr>
                    <td class="subtitle is-4">Browser Details</td>
                    <table>
                        <tr><td class="subtitle is-6">Code Name : </td><td>{{OSBrowser.CodeName}}</td></tr>
                        <tr><td>App Name : </td><td>{{OSBrowser.AppName}}</td></tr>
                        <tr><td>Version : </td><td>{{OSBrowser.Version}}</td></tr>
                    </table>
                </tr>
                <tr>
                    <td class="subtitle is-4">Host Name</td>
                    <td>{{finalmachine.HostName}}</td>
                </tr>
                <tr>
                    <td class="subtitle is-4">IP Address</td>
                    <td>
                        <table>
                            <template v-for="(item,index) in finalmachine.IPAddress">
                                <tr>
                                    <td>
                                       {{index + 1}}. IP Address
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Address : {{item.address}}
                                    </td>
                                    <td>
                                        Net Mask : {{item.netmask}}
                                    </td>
                                    <td>
                                        Family : {{item.family}}
                                    </td>
                                    <td>
                                        CIDR : {{item.cidr}}
                                    </td>
                                </tr>
                            </template>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="subtitle is-4">Total Memory</td>
                    <td>{{totalmemoryinUnit}}</td>
                </tr>
                <tr>
                    <td class="subtitle is-4">Free Memory</td>
                    <td>{{freememoryinUnit}}</td>
                </tr>
                <tr>
                    <td class="subtitle is-4">Operating System Platform</td>
                    <td>{{ProperPlatform}}</td>
                </tr>
                <tr>
                    <td class="subtitle is-4">Operating System Architecture</td>
                    <td>{{finalmachine.Architecture}}</td>
                </tr>
                <tr>
                    <td class="subtitle is-4">Machine CPUS</td>
                    <td>
                        <ul>
                            <li v-for="(item,index) in finalmachine.CPU" :key="index">
                                {{item}} 
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PropType } from 'vue';
import platform from 'platform';

interface MachineType  {
    OSName: string;
    TotalMemory: string;
    FreeMemory: string;
    HostName: string;
    Platform: string;
    Architecture: string;
    CPU: [];
    IPAddress: [];
}


@Component
export default class MainBoard extends Vue {
    @Prop() public finalmachine: MachineType;
    public OSBrowser = {
        CodeName: "",
        AppName: "",
        Version: "",
    };
    public created() {
        this.OSBrowser.CodeName = navigator.appCodeName;
        this.OSBrowser.AppName = navigator.appName;
        this.OSBrowser.Version = navigator.appVersion;
    }
    get properos() {
        return this.finalmachine.OSName.toUpperCase();
    }
    get totalmemoryinUnit() {
        return this.formatedByte(this.finalmachine.TotalMemory);
    }
    get freememoryinUnit() {
        return this.formatedByte(this.finalmachine.FreeMemory);
    }
    get ProperPlatform() {
        return this.finalmachine.Platform.toUpperCase();
    }
    public formatedByte(bytevalue: string): string {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
        let baseUnit = 0;
        let resultValue = parseInt(bytevalue, 10) || 0;

        while (resultValue >= 1024 && ++baseUnit) {
            resultValue = resultValue / 1024;
        }
        const finalResult = resultValue.toFixed() + ' ' + units[baseUnit];
        return finalResult;
    }
}

</script>