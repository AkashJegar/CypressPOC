// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js or cypress/support/index.js
// import 'cypress-xpath';

Cypress.Commands.add('demourl',() =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/');
});

  

Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[type="password"]').type('admin123');
    cy.get('button[type=submit]').click();
  });

  Cypress.Commands.add('invalidlogin', (username, password) => {
    cy.get('input[name="username"]').type('aaa');
    cy.get('input[type="password"]').type('admin123');
    cy.get('button[type=submit]').click();
  });
  
