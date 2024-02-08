// cypress/integration/orangehrm_demo.spec.js


 describe('Test1', ()=>{

   it('Test01', ()=>{

      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
      cy.contains('Home').click();
      cy.xpath('/html/body/div/div/div[2]/div/div[1]/div[1]/button').click();
      cy.get('#userSelect').select('2');
      cy.get('button[type="submit"]').click();
      cy.get('#accountSelect').select('2');
      cy.contains('Deposit').click();
      cy.get('input[type="number"]').type('12000');

   })


 })