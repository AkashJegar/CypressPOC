/// <reference types = "cypress"/>

const url='https://ebpv3-69501.web.app/login';


describe('qualle', () =>{

    it.only('invalid login4', () =>{
        cy.visit(url);
        cy.get('input[type="email"]').type('aaa@');
        cy.get('input[type="password"]').type('1212121212');
        cy.get('button[type="submit"]').click();
        
        
    })

})
