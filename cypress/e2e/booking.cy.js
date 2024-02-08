/// <reference types = "cypress"/>

const url='https://ebpv3-69501.web.app/login';
const username='qualle.test.1@gmail.com';
const password='Jelly08142020!!';


describe('qualle', () =>{

    it('valid login', () =>{

        cy.visit(url);
        //cy.get('input[type="email"]').type(username);
        //cy.get('input[type="password"]').type(password);
        //cy.get('button[type="submit"]').click();
        
        
        

        //cy.contains('NN').click();
        //cy.contains('Logout').click();
        


        cy.contains('Create booking').should('be.visible')
        .log('create booking')

        cy.contains('Create booking').click();

        //cy.get('button[type="button"]').click();
       // cy.get('#input-23').type('abc');
        //cy.get('#input-25').type('10');
        cy.get('input[type="text"]').click();

      })
    })


    