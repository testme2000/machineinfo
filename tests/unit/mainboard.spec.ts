import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Mainboard from '@/components/mainboard.vue';
import { doesNotMatch } from 'assert';


describe('Mainboard.vue', () => {
    it('Maibboard Component Pre Checkup', () => {
        const wrapper = shallowMount(Mainboard, {
            propsData: {
                finalmachine : {
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
        });
        expect(wrapper.isVisible()).toBe(true);
        expect(wrapper.vm).toBeTruthy();
    });

    it('Maibboard Component Layout Checkup', () => {
        const wrapper = shallowMount(Mainboard, {
            propsData: {
                finalmachine : {
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
        });
        expect(wrapper.isVisible()).toBe(true);
        expect(wrapper.vm).toBeTruthy();
        // Div section
        expect(wrapper.html()).toContain("div");
        // Heading Section
        expect(wrapper.html()).toContain("h1");
        const allSubDiv = wrapper.findAll("h1");
        expect(allSubDiv.length).toBe(1);
        expect(allSubDiv.at(0).html()).toBe("<h1 class=\"title is-1\">Machine Details</h1>");
        expect(allSubDiv.at(0).exists()).toBe(true); 
        expect(allSubDiv.at(0).text()).toBe("Machine Details");
        expect(allSubDiv.at(0).element.className).toBe("title is-1");
        expect(allSubDiv.at(0).attributes("class")).toBe("title is-1");
        // Table Section
        const table = wrapper.findAll("table");
        expect(table.length).toBe(3);
        expect(table.at(0).html()).toContain("table");
        expect(table.at(0).exists()).toBeTruthy(); 
        expect(table.at(0).element.className).toBe("table is-bordered");
        expect(table.at(0).attributes("class")).toBe("table is-bordered");
        expect(table.at(1).html()).toContain("table");
        expect(table.at(1).exists()).toBeTruthy(); 
        expect(table.at(2).html()).toContain("table");
        expect(table.at(2).exists()).toBeTruthy(); 
        // Table Header Section
        const tableHeader = wrapper.findAll("thead");
        expect(tableHeader.length).toBe(1);
        expect(tableHeader.at(0).html()).toContain("thead");
        expect(tableHeader.at(0).exists()).toBeTruthy(); 
        expect(tableHeader.at(0).element.className).toBe("title is-4");
        expect(tableHeader.at(0).attributes("class")).toBe("title is-4");
        expect(tableHeader.at(0).text()).toBe("Basic Machine and Browser Information");
        // Table Body Section
        const tableBody = wrapper.findAll("tbody");
        expect(tableBody.length).toBe(1);
        expect(tableBody.at(0).html()).toContain("tbody");
        expect(tableBody.at(0).exists()).toBeTruthy(); 
        // Table Row Section (All Row within HTML Document)
        const tableRow = wrapper.findAll("tr");
        expect(tableRow.length).toBe(14);
        expect(tableRow.at(0).html()).toContain("tr");
        expect(tableRow.at(0).exists()).toBeTruthy(); 
        // Table Column Section (All Table Column HTML Document)
        const tableColumn = wrapper.findAll("td");
        expect(tableColumn.length).toBe(28);
        expect(tableColumn.at(0).html()).toContain("td");
        expect(tableColumn.at(0).exists()).toBeTruthy(); 
        expect(tableColumn.at(0).element.className).toBe("subtitle is-4");
        expect(tableColumn.at(0).attributes("class")).toBe("subtitle is-4");
        expect(tableColumn.at(3).element.className).toBe("subtitle is-6");
        expect(tableColumn.at(3).attributes("class")).toBe("subtitle is-6");
        expect(tableColumn.at(9).attributes("class")).toBe("subtitle is-4");
        expect(tableColumn.at(9).element.className).toBe("subtitle is-4");
        expect(tableColumn.at(11).attributes("class")).toBe("subtitle is-4");
        expect(tableColumn.at(11).element.className).toBe("subtitle is-4");
        expect(tableColumn.at(18).attributes("class")).toBe("subtitle is-4");
        expect(tableColumn.at(18).element.className).toBe("subtitle is-4");
        expect(tableColumn.at(20).attributes("class")).toBe("subtitle is-4");
        expect(tableColumn.at(20).element.className).toBe("subtitle is-4");
        expect(tableColumn.at(22).attributes("class")).toBe("subtitle is-4");
        expect(tableColumn.at(22).element.className).toBe("subtitle is-4");
        expect(tableColumn.at(24).attributes("class")).toBe("subtitle is-4");
        expect(tableColumn.at(24).element.className).toBe("subtitle is-4");
        expect(tableColumn.at(26).attributes("class")).toBe("subtitle is-4");
        expect(tableColumn.at(26).element.className).toBe("subtitle is-4");
        // Table Column Section Content 
        expect(tableColumn.at(0).text()).toBe("Machine Operating System");
        expect(tableColumn.at(1).text()).toBe("WIN32");
        expect(tableColumn.at(2).text()).toBe("Browser Details");
        expect(tableColumn.at(3).text()).toBe("Code Name :");
        expect(tableColumn.at(4).text()).toBe("Mozilla");
        expect(tableColumn.at(5).text()).toBe("App Name :");
        expect(tableColumn.at(6).text()).toBe("Netscape");
        expect(tableColumn.at(7).text()).toBe("Version :");
        expect(tableColumn.at(8).text()).toBe("4.0");
        expect(tableColumn.at(9).text()).toBe("Host Name");
        expect(tableColumn.at(10).text()).toBe("WUSND185089-SY1");
        expect(tableColumn.at(11).text()).toBe("IP Address");
        expect(tableColumn.at(12).text()).toContain("IP Address");
        expect(tableColumn.at(12).text()).toContain("Address");
        expect(tableColumn.at(12).text()).toContain("Net Mask");
        expect(tableColumn.at(12).text()).toContain("Family");
        expect(tableColumn.at(12).text()).toContain("CIDR");
        expect(tableColumn.at(18).text()).toContain("Total Memory");
        expect(tableColumn.at(19).text()).toContain("16 bytes");
        expect(tableColumn.at(20).text()).toContain("Free Memory");
        expect(tableColumn.at(21).text()).toContain("7 bytes");
        expect(tableColumn.at(22).text()).toContain("Operating System Platform");
        expect(tableColumn.at(23).text()).toContain("WIN32");
        expect(tableColumn.at(24).text()).toContain("Operating System Architecture");
        expect(tableColumn.at(25).text()).toContain("x64");
        expect(tableColumn.at(26).text()).toContain("Machine CPUS");
        expect(tableColumn.at(27).text()).toContain("Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz");
    });

    it('Maibboard Component Value Setup', () => {
        const wrapper = shallowMount(Mainboard, {
            propsData: {
                finalmachine : {
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
        });
        expect(wrapper.props().finalmachine.OSName).toBe("Win32");
        expect(wrapper.props().finalmachine.TotalMemory).toBe("16GB");
        expect(wrapper.props().finalmachine.FreeMemory).toBe("7GB");
        expect(wrapper.props().finalmachine.HostName).toBe("WUSND185089-SY1");
        expect(wrapper.props().finalmachine.Platform).toBe("Win32");
        expect(wrapper.props().finalmachine.Architecture).toBe("x64");
        expect(wrapper.props().finalmachine.CPU.length).toEqual(1);
        expect(wrapper.props().finalmachine.CPU[0]).toBe("Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz");
        expect(wrapper.props().finalmachine.IPAddress.length).toEqual(1);
        expect(wrapper.props().finalmachine.IPAddress[0]).toStrictEqual({"Address" : "192.168.1.12", "Net Mask" : "255.255.255.0" });
       
        
    });
    
});