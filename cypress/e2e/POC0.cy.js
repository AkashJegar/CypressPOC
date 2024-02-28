/// <reference types = "cypress"/>
import 'cypress-iframe'


describe('Tabs', function () {
    // test case
    it('Test1', function (){
       // url launch
       cy.visit("https://the-internet.herokuapp.com/windows")
       // delete target attribute with invoke for link
       cy.get('.example > a').invoke('removeAttr', 'target').click()
       // verify tab url
       cy.url()
       .should('include', 'https://the-internet.herokuapp.com/windows/new')
       // shift to parent window
      cy.go('back');
    });
 });

 describe('child window', function () {
    // test case
    it('Scenario 1', function (){
       // url launch
       cy.visit("https://the-internet.herokuapp.com/windows")
       // delete target attribute with invoke for link
       cy.get('.example > a')
       .invoke('removeAttr', 'target').click()
       // verify child window url
       cy.url()
       .should('include', 'https://the-internet.herokuapp.com/windows/new')
       // shift to parent window
       cy.go('back');
    });
 });


 describe('Alerts', function () {
   // test case
   it('Scenario 1', function (){
      // launch url
      cy.visit("https://register.rediff.com/register/register.php");
      // click submit
      cy.get('input[type="submit"]').click();
   });
});















