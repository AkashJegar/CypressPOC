/// <reference types="Cypress"/>

describe('Amazon Login',() => {

    it('should input email and password', { baseUrl:  'https://www.amazon.in/your-account' }, function() {

        cy.on('uncaught:exception', (err, runnable) => {

            console.error('Google Login -> uncaught:exception', err);

            return false;

        });

        cy.visit('/servicelogin');

        cy.url().should('contain', 'www.amazon.in')}

    )}
)
