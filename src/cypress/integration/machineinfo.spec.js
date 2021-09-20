
describe('Complete Integration Testing for MachineInfo', function() {
    it('Component Layout Testing', function() {
        cy.visit('http://localhost:8080')

        cy.get('div').should('exist');
        cy.get('div').should('be.visible');
        cy.get('div').should('have.id','app');
        cy.get('div').should('have.length',2);
        cy.get('h1').should('exist');
        cy.get('h1').should('be.visible');
        cy.get('h1').should('have.class','title is-1');
        cy.get('h1').should('have.text','Machine Details');
        cy.get('h1').should('have.length',1);
        cy.get('table').should('exist');
        cy.get('table').should('be.visible');
        cy.get('table').should('have.class','table is-bordered');
        cy.get('table').should('have.length',3);
        cy.get('thead').should('exist');
        cy.get('thead').should('have.class','title is-4');
        cy.get('thead').should('have.text','Basic Machine and Browser Information');
        cy.get('tbody').should('exist');
        cy.get('tr').should('exist');
        cy.get('tr').should('be.visible');
        cy.get('tr').should('have.length',16);
        cy.get('td').should('exist');
        cy.get('td').should('be.visible');
        cy.get('td').should('have.length',33);
        cy.get('td').should('have.class','subtitle is-4');
        cy.get('table').contains('td', 'Machine Operating System').should('exist').should('be.visible');
        cy.get('table').contains('td', 'Browser Details').should('exist').should('be.visible');
        cy.get('table').contains('td', 'IP Address').should('exist').should('be.visible');
        cy.get('table').contains('td', 'Total Memory').should('exist').should('be.visible');
        cy.get('table').contains('td', 'Free Memory').should('exist').should('be.visible');
        cy.get('table').contains('td','Operating System Platform').should('exist').should('be.visible');
        cy.get('table').contains('td','Operating System Architecture').should('exist').should('be.visible');
        cy.get('table').contains('td','Machine CPUS').should('exist').should('be.visible');
        cy.get('table').contains('td','Code Name : ').should('exist').should('be.visible');
        cy.get('table').contains('td','App Name : ').should('exist').should('be.visible');
        cy.get('table').contains('td','Version : ').should('exist').should('be.visible');
        cy.get('table').contains('td','Host Name').should('exist').should('be.visible');
        cy.get('table').contains('td','IP Address').should('exist').should('be.visible');
        cy.get('table').contains('td','Address :').should('exist').should('be.visible');
        cy.get('table').contains('td','Net Mask :').should('exist').should('be.visible');
        cy.get('table').contains('td','Family :').should('exist').should('be.visible');
        cy.get('table').contains('td','CIDR :').should('exist').should('be.visible');
        cy.get('table').contains('td','Total Memory').should('exist').should('be.visible');
        cy.get('table').contains('td','Free Memory').should('exist').should('be.visible');
        cy.get('table').contains('td','Operating System Platform').should('exist').should('be.visible');
        cy.get('table').contains('td','Operating System Architecture').should('exist').should('be.visible');
        cy.get('table').contains('td','Machine CPUS').should('exist').should('be.visible');
    })


    it('Component Data Display Testing', function() {
        cy.visit('http://localhost:8080')

        cy.get('table').contains('td', 'WIN32').should('exist').should('be.visible');
        cy.get('table').contains('td', 'Mozilla').should('exist').should('be.visible');
        cy.get('table').contains('td', 'Netscape').should('exist').should('be.visible');
        cy.get('table').contains('td', "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36").should('exist').should('be.visible');
        cy.get('table').contains('td', "WUSND185089-SY1").should('exist').should('be.visible');
        cy.get('table').contains('td', "fe80::644b:a1bd:2aa8:bda0").should('exist').should('be.visible');
        cy.get('table').contains('td', "ffff:ffff:ffff:ffff::").should('exist').should('be.visible');
        cy.get('table').contains('td', "IPv6").should('exist').should('be.visible');
        cy.get('table').contains('td', "fe80::644b:a1bd:2aa8:bda0/64").should('exist').should('be.visible');
        cy.get('table').contains('td', "192.168.1.12").should('exist').should('be.visible');
        cy.get('table').contains('td', "16 GB").should('exist').should('be.visible');
        cy.get('table').contains('td', "5 GB").should('exist').should('be.visible');
        cy.get('table').contains('td', "WIN32").should('exist').should('be.visible');
        cy.get('table').contains('td', "x64").should('exist').should('be.visible');
        cy.get('table').contains('td', "Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz").should('exist').should('be.visible');
    })

})