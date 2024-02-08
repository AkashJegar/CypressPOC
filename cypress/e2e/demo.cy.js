/// <reference types = "cypress"/>

describe( 'demo'  , ()=> 
{

    it('demo' , () =>
    {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
      cy.contains('Customer Login').click();
      cy.get('#userSelect').select('Harry Potter');        // drop down for login
      cy.get('#userSelect').should('have.value', '2');      // click on the 2nd value in the drop down
      cy.get('button[type="submit"]').click();

      cy.get('#accountSelect').select('1006');
      cy.get('#accountSelect').should('have.value', 'number:1006');
      cy.contains('Deposit').click();
      cy.get('input[type="number"]').type('150000');
      cy.get('button[type="submit"]').click();
      cy.contains('Deposit Successful').should('exist');
      cy.contains('Withdrawl').click();
      cy.get('input[placeholder="amount"]').type('2000');
      cy.get('button[type="submit"]').click();
      cy.contains('Deposit Successful').should('exist');



    })
})