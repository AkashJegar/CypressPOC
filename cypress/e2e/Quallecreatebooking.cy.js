/// <reference types = "cypress"/>

const url='https://ebpv3-69501.web.app/login';
const username='qualle.test.1@gmail.com';
const password='Jelly08142020!!';
const datePickerInput = '#datePickerInput';

describe('qualle', () =>{

    it('create booking', () =>{

        cy.visit(url);
        /*cy.get('#input-0').type(username);
        cy.get('#input-2').type(password);
        cy.get('button[type="submit"]').should('be.enabled');
        cy.get('button[type="submit"]').click();
        */

        cy.xpath('//*[@id="app"]/div/div/div/div[3]/div/div[1]/button').click();
        cy.get('#input-40').type('10');
        cy.get('#input-42').type('10');
        cy.get('#input-44').select('option 2');
        
        

        
        
        
        


    })
})
