import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Mainboard from '@/components/mainboard.vue';
import App from '@/App.vue';
import { doesNotMatch } from 'assert';
import axios, { AxiosResponse } from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedResponse: AxiosResponse = {
  data: {
    finalMachine : 
    {
      name: "Henry",
      OSName : "Win32",
      TotalMemory: "16GB",
      FreeMemory: "7GB",
      HostName: "WUSND185089-SY1",
      Platform: "Win32",
      Architecture: "x64"
    }
  },
  status: 200,
  statusText: "OK",
  headers: {},
  config: {},
};

const localVue = createLocalVue();


describe('App.vue', () => {
  it('App.vue Root Component Pre Checkup', () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    const wrapper = shallowMount(App);
    expect(wrapper.isVisible()).toBe(true);
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.html()).toContain("div");
    expect(wrapper.html()).toContain("mainboard-stub");
    expect(wrapper.attributes().id).toBe("app");
  });


 
  it('App.vue Root Component Initialization', () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    const wrapper = shallowMount(App);
    expect(wrapper.isVisible()).toBe(true);
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.html()).toContain("div");
    expect(wrapper.attributes().id).toBe("app");
    expect(wrapper.vm.$data.MainMachine.OSName).toBe("");
    expect(wrapper.vm.$data.MainMachine.TotalMemory).toBe("");
    expect(wrapper.vm.$data.MainMachine.FreeMemory).toBe("");
    expect(wrapper.vm.$data.MainMachine.HostName).toBe("");
    expect(wrapper.vm.$data.MainMachine.Platform).toBe("");
    expect(wrapper.vm.$data.MainMachine.Architecture).toBe("");
    expect(wrapper.vm.$data.MainMachine.CPU.length).toEqual(1);
    expect(wrapper.vm.$data.MainMachine.CPU[0]).toBe("");
    expect(wrapper.vm.$data.MainMachine.IPAddress.length).toEqual(1);
    expect(wrapper.vm.$data.MainMachine.IPAddress[0]).toEqual({});
  });

 
  it('App.vue Root Component Machine Value setup', () => {
        mockedAxios.get.mockResolvedValue(mockedResponse);

       const wrapper = shallowMount(App, {
            localVue,
            data : function() {
                return {
                    MainMachine : {
                        OSName : "Win32",
                        TotalMemory: "16GB",
                        FreeMemory: "7GB",
                        HostName: "WUSND185089-SY1",
                        Platform: "Win32",
                        Architecture: "x64",
                        CPU: ["Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz"],
                        IPAddress: [{"Address" : "192.168.1.12", "Net Mask" : "255.255.255.0" }],
                    }
                }
            }
        });
        expect(wrapper.vm).toBeTruthy();
        expect(wrapper.vm.$data.MainMachine.OSName).toBe("Win32");
        expect(wrapper.vm.$data.MainMachine.TotalMemory).toBe("16GB");
        expect(wrapper.vm.$data.MainMachine.FreeMemory).toBe("7GB");
        expect(wrapper.vm.$data.MainMachine.HostName).toBe("WUSND185089-SY1");
        expect(wrapper.vm.$data.MainMachine.Platform).toBe("Win32");
        expect(wrapper.vm.$data.MainMachine.Architecture).toBe("x64");
        expect(wrapper.vm.$data.MainMachine.CPU.length).toBeGreaterThan(0);
        expect(wrapper.vm.$data.MainMachine.CPU[0]).toBe("Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz");
        expect(wrapper.vm.$data.MainMachine.IPAddress.length).toBeGreaterThan(0);
        expect(wrapper.vm.$data.MainMachine.IPAddress[0]).toEqual({"Address" : "192.168.1.12", "Net Mask" : "255.255.255.0" });
  });
 
});
