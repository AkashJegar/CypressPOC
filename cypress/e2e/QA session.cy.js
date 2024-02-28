/// <reference types = "cypress"/>

describe('Login and dashboard iteration', () =>{
  beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get('input[name="username"]').as('username');
      cy.get('input[type="password"]').as('password');
      cy.get('@username').type('Admin');
      cy.get('@password').type('admin123');
      cy.get('.oxd-button').click();
});


    


it('checkbox', () =>{
    cy.contains('My Info').click();
    cy.wait(5000);
    cy.get('input[type="checkbox"]').check().should('be.check');
    cy.get('input[type="checkbox"]').uncheck().should('not.be.check');
   // cy.get('input[type="checkbox"]').check().should('be.checked');
    //cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');
    

})

// it('Switch the tabs', () =>{
//     cy.contains('PIM').click();
//     cy.contains('Add Employee').should('be.visible');

//     cy.contains('Leave').click();
//     cy.contains('Apply').should('be.visible');
// })






it('alerts', () =>{
    cy.contains('Admin').click();
    cy.get('button[type="button"]').click();
    cy.get('.class="oxd-select-text-input"').select('ESS').should('have.value', '1');

})

it('mouse actions', () =>{
    cy.contains('PIM').dblclick();
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a').trigger('Admin');
    cy.contains('My Info').trigger('mouseover');
    //cy.wait('3000');
    cy.contains('My Info').trigger('mousedown');
    //cy.wait('3000');
    cy.contains('My Info').trigger('mouseup');


})

it.only('Tutorialspoint', function () {   
    // test case   it('Scenario 1', function (){      
        // url launch      
        cy.visit("https://the-internet.herokuapp.com/windows")      
        // delete target attribute with invoke for link      
        cy.get('.example > a')      .invoke('removeAttr', 'target').click()      
        // verify child window url      
        cy.url()      .should('include', 'https://the-internet.herokuapp.com/windows/new')      
        // shift to parent window      
        cy.go('back');   
    });




})